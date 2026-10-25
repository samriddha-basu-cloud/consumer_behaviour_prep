/* =========================================================
   App shell: hash router, navigation, search, TOC, pager,
   theme, reading progress, back-to-top, print views.
   ========================================================= */
(function () {
  'use strict';

  var CB = window.CB;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var pageEl = $('#page');
  var railEl = $('#toc-rail');
  var navEl = $('#side-nav');
  var crumbsEl = $('#crumbs');

  /* ---------- Build page registry (order = reading sequence) ---------- */
  var pages = [];      // {route, title, kind, module, topic, html()}
  var byRoute = {};

  function addPage(p) { pages.push(p); byRoute[p.route] = p; }

  addPage({ route: '/', title: 'Home', kind: 'home' });
  CB.modules.forEach(function (m) {
    addPage({ route: '/' + m.id, title: 'Module ' + m.num + ' overview', kind: 'module', module: m });
    m.topics.forEach(function (t, i) {
      addPage({ route: '/' + m.id + '/' + t.id, title: t.title, kind: 'topic', module: m, topic: t, index: i });
    });
  });
  addPage({ route: '/recap', title: 'Final Recap & Exam Revision', kind: 'recap' });
  addPage({ route: '/index', title: 'Topic & term index', kind: 'index' });
  addPage({ route: '/coverage', title: 'Source coverage map', kind: 'coverage' });

  /* ---------- Utilities ---------- */
  function slug(s) {
    return String(s).toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'section';
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function stripHtml(html) {
    var d = document.createElement('div');
    d.innerHTML = html;
    $$('.dgm-print', d).forEach(function (x) { x.remove(); });
    return (d.textContent || '').replace(/\s+/g, ' ').trim();
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- Sidebar ---------- */
  function buildNav() {
    var h = '<a class="nav-link" data-route="/" href="#/"><span class="nav-ico" aria-hidden="true">⌂</span>Home</a>';
    h += '<div class="divider" role="presentation"></div>';
    CB.modules.forEach(function (m) {
      h += '<details class="group" data-mod="' + m.id + '"><summary><span class="mod-num" aria-hidden="true">' + m.num + '</span><span>' + m.navTitle + '</span></summary><div class="sub">';
      h += '<a class="nav-link" data-route="/' + m.id + '" href="#/' + m.id + '">Module overview</a>';
      m.topics.forEach(function (t) {
        h += '<a class="nav-link' + (t.kind ? ' kind-' + t.kind : '') + '" data-route="/' + m.id + '/' + t.id + '" href="#/' + m.id + '/' + t.id + '">' + t.title + '</a>';
      });
      h += '</div></details>';
    });
    h += '<div class="divider" role="presentation"></div>';
    h += '<a class="nav-link" data-route="/recap" href="#/recap"><span class="nav-ico" aria-hidden="true">★</span>Final Recap & Exam Revision</a>';
    h += '<a class="nav-link" data-route="/index" href="#/index"><span class="nav-ico" aria-hidden="true">A–Z</span>Topic & term index</a>';
    h += '<a class="nav-link" data-route="/coverage" href="#/coverage"><span class="nav-ico" aria-hidden="true">✓</span>Source coverage map</a>';
    navEl.innerHTML = h;
  }

  function markNav(route, page) {
    $$('.nav-link', navEl).forEach(function (a) {
      if (a.getAttribute('data-route') === route) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    if (page && page.module) {
      var d = $('details[data-mod="' + page.module.id + '"]', navEl);
      if (d && !d.open) d.open = true;
    }
    var cur = $('.nav-link[aria-current="page"]', navEl);
    if (cur && cur.scrollIntoView) {
      var r = cur.getBoundingClientRect(), nr = navEl.getBoundingClientRect();
      if (r.top < nr.top || r.bottom > nr.bottom) cur.scrollIntoView({ block: 'center' });
    }
  }

  /* ---------- Renderers ---------- */
  function sourceLine(m) {
    return '<p class="kicker"><span class="pill">Module ' + m.num + '</span><span class="tag pdf">PDF: ' + m.file + ' · ' + m.pages + ' pages</span></p>';
  }

  function renderHome() {
    var h = '<section class="hero"><p class="kicker">Five modules and ' + CB.coverage.total + ' PDF pages, mapped and explained</p>' +
      '<h1>Consumer Behaviour, built for the exam hall</h1>' +
      '<p class="lede">Every slide from your five module PDFs, explained in plain language, with diagrams you can click through, Indian business examples, and answer structures for 5, 10 and 15-mark questions.</p></section>';

    h += '<div class="legend" aria-label="How content is labelled"><span>Every block is labelled by where it comes from:</span>' +
      CB.H.P(1, 3).replace('CB_MODULE I.pdf, p. 3', 'file, page') + CB.H.A + CB.H.E + '</div>';

    h += '<h2 id="modules">Modules</h2><ol class="mod-path">';
    CB.modules.forEach(function (m) {
      var nTopics = m.topics.filter(function (t) { return !t.kind; }).length;
      h += '<li><a class="mod-card glass" href="#/' + m.id + '"><span class="roman" aria-hidden="true">' + m.num + '</span>' +
        '<span><span class="t">Module ' + m.num + ': ' + m.title + '</span><span class="s">' + m.blurb + '</span></span>' +
        '<span class="n">' + nTopics + ' topics<br>' + m.pages + ' slides</span></a></li>';
    });
    h += '</ol>';

    h += '<h2 id="start">Where to start</h2><div class="quick-links">' +
      '<a class="glass" href="#/m1">Study in order<span>Begin with Module I and use Next at the bottom of each page.</span></a>' +
      '<a class="glass" href="#/recap">Revise fast<span>High-priority topics, diagrams to practise and last-minute points.</span></a>' +
      '<a class="glass" href="#/index">Look up a term<span>A–Z index of every theory, model and definition.</span></a>' +
      '<a class="glass" href="#/coverage">Check coverage<span>All ' + CB.coverage.total + ' PDF pages mapped to the notes that explain them.</span></a></div>';

    h += '<h2 id="how">How each module is organised</h2>' +
      '<p>Each module opens with learning objectives and a topic list, then one page per topic. Every module ends with two study pages: <strong>Exam preparation</strong> (answer frameworks for 5, 10 and 15 marks, important questions, common mistakes) and <strong>Revision notes</strong> (summary, key terms, quick-recall points).</p>' +
      '<p>Diagrams are interactive: select any box to read what it means. When you print, every diagram explanation is printed underneath it.</p>' +
      '<p>Shortcuts: press <kbd>/</kbd> to search, <kbd>[</kbd> and <kbd>]</kbd> for the previous and next topic.</p>';
    return h;
  }

  function renderModule(m) {
    var h = '<header class="page-head">' + sourceLine(m) + '<h1>Module ' + m.num + ': ' + m.title + '</h1>' +
      '<p class="lede">' + m.lede + '</p>' +
      '<div class="page-tools"><a class="btn primary" href="#/' + m.id + '/' + m.topics[0].id + '">Start the first topic</a>' +
      '<a class="btn" href="#/print/' + m.id + '">Print whole module</a></div></header>';
    h += m.intro || '';
    h += '<h2 id="objectives">Learning objectives</h2><p>After this module you should be able to:</p>' + CB.H.ul(m.objectives);
    h += '<h2 id="topics">Topics in this module</h2><ol class="topic-list">';
    m.topics.forEach(function (t, i) {
      h += '<li><a href="#/' + m.id + '/' + t.id + '"><span class="ix">' + (t.kind ? (t.kind === 'exam' ? '✎' : '↻') : i + 1) + '</span><span>' + t.title + '</span><span class="pg">' + (t.pages ? 'pp. ' + t.pages : '') + '</span></a></li>';
    });
    h += '</ol>';
    if (m.map) h += '<h2 id="map">How the topics connect</h2>' + m.map;
    return h;
  }

  function renderTopic(m, t) {
    var h = '<header class="page-head"><p class="kicker"><span class="pill">Module ' + m.num + '</span>' +
      (t.pages ? CB.H.P(m.n, t.pages) : '<span class="tag add">Study aid</span>') + '</p>' +
      '<h1>' + t.title + '</h1>' + (t.lede ? '<p class="lede">' + t.lede + '</p>' : '') + '</header>';
    h += '<nav class="toc-inline" aria-label="Contents"></nav>';
    h += t.html;
    return h;
  }

  function renderRecap() { return CB.recap.html; }

  function renderIndex() {
    var items = [];
    CB.terms.forEach(function (t) { items.push({ k: t.term, href: '#/' + t.module + '/' + t.topic, where: 'Module ' + modById(t.module).num, def: t.def }); });
    items.sort(function (a, b) { return a.k.localeCompare(b.k, 'en', { sensitivity: 'base' }); });
    var letters = {};
    items.forEach(function (i) { var L = i.k[0].toUpperCase(); if (!/[A-Z]/.test(L)) L = '#'; (letters[L] = letters[L] || []).push(i); });
    var keys = Object.keys(letters).sort();
    var h = '<header class="page-head"><p class="kicker"><span class="pill">Index</span></p><h1>Topic & term index</h1>' +
      '<p class="lede">' + items.length + ' theories, models, definitions and authors from all five modules. Type to filter, then open the topic that explains it.</p></header>';
    h += '<label class="sr-only" for="idx-filter">Filter the index</label><input id="idx-filter" class="index-filter" type="search" placeholder="Filter, e.g. dissonance, Vroom, AIO">';
    h += '<nav class="az" aria-label="Jump to letter">' + keys.map(function (k) { return '<a href="#/index?s=letter-' + k.toLowerCase() + '">' + k + '</a>'; }).join('') + '</nav>';
    h += '<div id="idx-body">';
    keys.forEach(function (k) {
      h += '<section class="idx-sec"><h2 class="idx-letter" id="letter-' + k.toLowerCase() + '">' + k + '</h2><ul class="idx-list">';
      letters[k].forEach(function (i) {
        h += '<li data-k="' + escapeHtml((i.k + ' ' + i.def).toLowerCase()) + '"><a href="' + i.href + '">' + i.k + '</a><span class="where">' + i.where + '</span><p>' + i.def + '</p></li>';
      });
      h += '</ul></section>';
    });
    h += '</div><p id="idx-empty" hidden>No terms match that filter. Try a shorter word, or use the search box in the sidebar to search the full notes.</p>';
    return h;
  }

  function renderCoverage() {
    var c = CB.coverage;
    var h = '<header class="page-head"><p class="kicker"><span class="pill">Quality check</span></p><h1>Source coverage map</h1>' +
      '<p class="lede">Every page of every PDF, with what is on it and where it is explained in these notes. ' + c.total + ' pages across five files; ' + c.contentPages + ' carry teaching content and all of them are covered.</p></header>';
    h += c.intro || '';
    CB.modules.forEach(function (m) {
      var rows = c.pages[m.id].map(function (p) {
        var where = p.topic ? '<a href="#/' + m.id + '/' + p.topic + '">' + topicTitle(m, p.topic) + '</a>' : '—';
        return [String(p.p), p.title, '<span class="cov-status ' + (p.structural ? 'structural' : 'content') + '">' + (p.structural ? 'Structural' : 'Covered') + '</span>', where];
      });
      h += '<h2 id="cov-' + m.id + '">Module ' + m.num + ': ' + m.file + '</h2>';
      h += CB.H.table(['Page', 'Slide content', 'Status', 'Explained in'], rows);
    });
    return h;
  }

  function renderPrint(ids) {
    var h = '<div class="no-print call tip"><span class="call-t">Print view</span><p>This page holds the full module so you can print it or save it as a PDF. Use the button below, or your browser’s Print command, and choose “Save as PDF” as the printer.</p><p><button class="btn primary" type="button" id="do-print">Print or save as PDF</button></p></div>';
    ids.forEach(function (id) {
      var m = modById(id);
      h += '<section class="print-module-title"><h1>Module ' + m.num + ': ' + m.title + '</h1>' + sourceLine(m) + '<p>' + m.lede + '</p>';
      h += '<h2>Learning objectives</h2>' + CB.H.ul(m.objectives) + '</section>';
      m.topics.forEach(function (t) {
        h += '<section class="print-topic"><h2 style="font-size:1.6rem">' + t.title + '</h2>' + (t.pages ? '<p>' + CB.H.P(m.n, t.pages) + '</p>' : '') + t.html.replace(/<h2/g, '<h3').replace(/<\/h2>/g, '</h3>') + '</section>';
      });
    });
    return h;
  }

  function modById(id) { for (var i = 0; i < CB.modules.length; i++) if (CB.modules[i].id === id) return CB.modules[i]; return null; }
  function topicTitle(m, tid) { for (var i = 0; i < m.topics.length; i++) if (m.topics[i].id === tid) return m.topics[i].title; return tid; }

  /* ---------- Headings, TOC, pager ---------- */
  function decorateHeadings() {
    var used = {};
    var heads = $$('h2, h3', pageEl).filter(function (h) { return !h.closest('.answer') && !h.closest('.dgm') && !h.closest('.idx-sec') || h.classList.contains('idx-letter'); });
    heads.forEach(function (hd) {
      if (!hd.id) {
        var s = slug(hd.textContent), base = s, n = 2;
        while (used[s] || document.getElementById(s)) s = base + '-' + (n++);
        hd.id = s;
      }
      used[hd.id] = true;
    });
    return heads.filter(function (h) { return !h.classList.contains('idx-letter'); });
  }

  function buildToc(route, heads) {
    var h2s = heads.filter(function (h) { return h.tagName === 'H2'; });
    if (h2s.length < 2) { railEl.innerHTML = ''; var ti = $('.toc-inline', pageEl); if (ti) ti.remove(); return; }
    function link(hd) {
      return '<li><a class="' + (hd.tagName === 'H3' ? 'lvl3' : '') + '" href="#' + route + '?s=' + hd.id + '" data-target="' + hd.id + '">' + hd.textContent + '</a></li>';
    }
    railEl.innerHTML = '<h2>On this page</h2><ol>' + heads.map(link).join('') + '</ol>';
    var inline = $('.toc-inline', pageEl);
    if (inline) inline.innerHTML = '<details class="more"><summary>Contents of this page</summary><div class="more-body"><ol>' + h2s.map(link).join('') + '</ol></div></details>';
  }

  function buildPager(route) {
    var i = -1;
    for (var k = 0; k < pages.length; k++) if (pages[k].route === route) i = k;
    if (i < 0) return '';
    var prev = pages[i - 1], next = pages[i + 1];
    function label(p) { return p.kind === 'topic' ? 'Module ' + p.module.num + ' · ' + p.title : p.module ? 'Module ' + p.module.num + ' overview' : p.title; }
    var h = '<nav class="pager" aria-label="Previous and next">';
    if (prev) h += '<a class="prev glass" rel="prev" href="#' + prev.route + '"><small>Previous</small><span>' + label(prev) + '</span></a>';
    if (next) h += '<a class="next glass" rel="next" href="#' + next.route + '"><small>Next</small><span>' + label(next) + '</span></a>';
    return h + '</nav>';
  }

  function setCrumbs(page) {
    var parts = ['<a href="#/">Home</a>'];
    if (page.module) {
      parts.push('<a href="#/' + page.module.id + '">Module ' + page.module.num + '</a>');
      if (page.kind === 'topic') parts.push('<span aria-current="page">' + page.title + '</span>');
    } else if (page.kind !== 'home') parts.push('<span aria-current="page">' + page.title + '</span>');
    crumbsEl.innerHTML = parts.join('<span class="sep" aria-hidden="true">/</span>');
  }

  /* ---------- Router ---------- */
  var currentRoute = null;
  var spy = null;

  function parseHash() {
    var raw = decodeURIComponent((location.hash || '#/').slice(1)) || '/';
    var q = raw.indexOf('?');
    var path = q >= 0 ? raw.slice(0, q) : raw;
    var params = {};
    if (q >= 0) raw.slice(q + 1).split('&').forEach(function (kv) { var p = kv.split('='); params[p[0]] = p[1] || ''; });
    if (path.length > 1 && path.charAt(path.length - 1) === '/') path = path.slice(0, -1);
    if (path.charAt(0) !== '/') path = '/' + path;
    return { path: path, params: params };
  }

  function scrollToSection(id, smooth) {
    var el = id && document.getElementById(id);
    if (!el) return false;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: smooth && !reduce ? 'smooth' : 'auto', block: 'start' });
    return true;
  }

  function render() {
    var r = parseHash();
    var section = r.params.s;

    if (r.path === currentRoute && section) { scrollToSection(section, true); return; }

    var page = byRoute[r.path];
    var html, title;
    var isPrint = r.path.indexOf('/print/') === 0;

    if (isPrint) {
      var which = r.path.split('/')[2];
      var ids = which === 'all' ? CB.modules.map(function (m) { return m.id; }) : modById(which) ? [which] : null;
      if (!ids) { page = null; } else {
        html = renderPrint(ids);
        title = which === 'all' ? 'All modules — print view' : 'Module ' + modById(which).num + ' — print view';
        page = { route: r.path, title: title, kind: 'print', module: which === 'all' ? null : modById(which) };
      }
    }

    if (!page) {
      html = '<header class="page-head"><h1>That page does not exist</h1><p class="lede">The link may be mistyped or from an older version of these notes.</p></header><p><a class="btn primary" href="#/">Go to the home page</a> <a class="btn" href="#/index">Open the topic index</a></p>';
      page = { route: r.path, title: 'Not found', kind: 'missing' };
    } else if (!html) {
      if (page.kind === 'home') html = renderHome();
      else if (page.kind === 'module') html = renderModule(page.module);
      else if (page.kind === 'topic') html = renderTopic(page.module, page.topic);
      else if (page.kind === 'recap') html = renderRecap();
      else if (page.kind === 'index') html = renderIndex();
      else if (page.kind === 'coverage') html = renderCoverage();
    }

    currentRoute = r.path;
    pageEl.innerHTML = html + (page.kind !== 'print' && page.kind !== 'missing' ? buildPager(page.route) : '');
    document.title = (page.kind === 'home' ? 'Consumer Behaviour — Exam Prep' : page.title + (page.module ? ' · Module ' + page.module.num : '') + ' — CB Exam Prep');

    var heads = decorateHeadings();
    if (page.kind === 'print') { railEl.innerHTML = ''; } else buildToc(r.path, heads);
    setCrumbs(page);
    markNav(r.path, page);
    window.D.bind(pageEl);
    wirePage(page);
    closeNav();

    if (!section || !scrollToSection(section, false)) window.scrollTo(0, 0);
    // move focus to content for keyboard and screen-reader users (without scrolling)
    $('#main').focus({ preventScroll: true });
    setupSpy(heads);
    updateProgress();
  }

  function wirePage(page) {
    var f = $('#idx-filter');
    if (f) {
      f.addEventListener('input', function () {
        var q = f.value.trim().toLowerCase(), shown = 0;
        $$('.idx-list li', pageEl).forEach(function (li) { var ok = !q || li.getAttribute('data-k').indexOf(q) >= 0; li.hidden = !ok; if (ok) shown++; });
        $$('.idx-sec', pageEl).forEach(function (s) { s.hidden = !$$('li', s).some(function (li) { return !li.hidden; }); });
        $('#idx-empty').hidden = shown > 0;
      });
    }
    var pb = $('#do-print');
    if (pb) pb.addEventListener('click', function () { window.print(); });
  }

  function setupSpy(heads) {
    if (spy) spy.disconnect();
    if (!('IntersectionObserver' in window) || !railEl.innerHTML) return;
    var links = {};
    $$('a[data-target]', railEl).forEach(function (a) { links[a.getAttribute('data-target')] = a; });
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && links[e.target.id]) {
          $$('a.active', railEl).forEach(function (a) { a.classList.remove('active'); });
          links[e.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-15% 0px -70% 0px' });
    heads.forEach(function (h) { spy.observe(h); });
  }

  /* ---------- Search ---------- */
  var index = [];
  function buildIndex() {
    pages.forEach(function (p) {
      var text = '', title = p.title, sub = '';
      if (p.kind === 'topic') { text = stripHtml(p.topic.html); sub = 'Module ' + p.module.num + ' · ' + p.module.title; }
      else if (p.kind === 'module') { text = stripHtml((p.module.intro || '') + p.module.lede + ' ' + p.module.objectives.join(' ')); title = 'Module ' + p.module.num + ': ' + p.module.title; sub = 'Module overview'; }
      else if (p.kind === 'recap') { text = stripHtml(CB.recap.html); sub = 'Revision hub'; }
      else return;
      index.push({ href: '#' + p.route, title: title, sub: sub, text: text, lt: title.toLowerCase(), lx: text.toLowerCase() });
    });
    CB.terms.forEach(function (t) {
      var m = modById(t.module);
      index.push({ href: '#/' + t.module + '/' + t.topic, title: t.term, sub: 'Term · Module ' + m.num + ' · ' + topicTitle(m, t.topic), text: t.def, lt: t.term.toLowerCase(), lx: t.def.toLowerCase(), term: true });
    });
  }

  function hl(s, toks) {
    var out = escapeHtml(s);
    toks.forEach(function (t) {
      if (t.length < 2) return;
      out = out.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    });
    return out;
  }

  function search(q) {
    var toks = q.toLowerCase().split(/\s+/).filter(Boolean);
    var res = [];
    index.forEach(function (e) {
      var score = 0, all = true;
      toks.forEach(function (t) {
        var inT = e.lt.indexOf(t) >= 0, inX = e.lx.indexOf(t) >= 0;
        if (!inT && !inX) all = false;
        if (inT) score += e.term ? 12 : 10;
        if (inX) score += 1 + Math.min(4, e.lx.split(t).length - 1) * 0.5;
      });
      if (all) res.push({ e: e, score: score });
    });
    res.sort(function (a, b) { return b.score - a.score; });
    return res.slice(0, 14).map(function (r) {
      var e = r.e, snip = '';
      var first = toks.reduce(function (pos, t) { var i = e.lx.indexOf(t); return i >= 0 && (pos < 0 || i < pos) ? i : pos; }, -1);
      if (first >= 0) {
        var start = Math.max(0, first - 50);
        snip = (start > 0 ? '…' : '') + e.text.slice(start, start + 130) + (start + 130 < e.text.length ? '…' : '');
      }
      return { href: e.href, title: e.title, sub: e.sub, snip: snip, toks: toks };
    });
  }

  function setupSearch() {
    var input = $('#search-input'), box = $('#search-results');
    var active = -1;
    function close() { box.hidden = true; active = -1; input.setAttribute('aria-expanded', 'false'); }
    function draw() {
      var q = input.value.trim();
      if (q.length < 2) { close(); return; }
      var res = search(q);
      if (!res.length) box.innerHTML = '<p class="empty">No matches for “' + escapeHtml(q) + '”. Try a single key word such as “Maslow” or “perception”.</p>';
      else box.innerHTML = res.map(function (r, i) {
        return '<a role="option" id="sr-' + i + '" aria-selected="false" href="' + r.href + '">' + hl(r.title, r.toks) + '<small>' + escapeHtml(r.sub) + '</small>' + (r.snip ? '<small>' + hl(r.snip, r.toks) + '</small>' : '') + '</a>';
      }).join('');
      box.hidden = false; active = -1;
      input.setAttribute('aria-expanded', 'true');
    }
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-autocomplete', 'list');
    input.setAttribute('aria-expanded', 'false');
    input.addEventListener('input', draw);
    input.addEventListener('focus', function () { if (input.value.trim().length >= 2) draw(); });
    input.addEventListener('keydown', function (e) {
      var opts = $$('a[role="option"]', box);
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (!opts.length) return;
        e.preventDefault();
        active = e.key === 'ArrowDown' ? (active + 1) % opts.length : (active - 1 + opts.length) % opts.length;
        opts.forEach(function (o, i) { o.setAttribute('aria-selected', String(i === active)); });
        input.setAttribute('aria-activedescendant', opts[active].id);
        opts[active].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        if (opts.length) { e.preventDefault(); location.hash = opts[Math.max(0, active)].getAttribute('href'); input.value = ''; close(); }
      } else if (e.key === 'Escape') { input.value = ''; close(); }
    });
    box.addEventListener('click', function (e) { if (e.target.closest('a')) { input.value = ''; close(); } });
    document.addEventListener('click', function (e) { if (!e.target.closest('.side-search')) close(); });
  }

  /* ---------- Mobile nav ---------- */
  var menuBtn = $('#menu-btn');
  function isMobile() { return window.matchMedia('(max-width: 1023px)').matches; }
  function openNav() { document.body.classList.add('nav-open'); menuBtn.setAttribute('aria-expanded', 'true'); menuBtn.setAttribute('aria-label', 'Close navigation'); }
  function closeNav() { if (!document.body.classList.contains('nav-open')) return; document.body.classList.remove('nav-open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open navigation'); }
  menuBtn.addEventListener('click', function () { document.body.classList.contains('nav-open') ? closeNav() : openNav(); });
  $('.backdrop').addEventListener('click', closeNav);
  // Off-canvas sidebar should not be reachable by Tab while hidden on small screens
  function syncSidebarInert() {
    var sb = $('#sidebar');
    var hidden = isMobile() && !document.body.classList.contains('nav-open');
    if ('inert' in sb) sb.inert = hidden; else sb.setAttribute('aria-hidden', String(hidden));
  }
  new MutationObserver(syncSidebarInert).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  window.addEventListener('resize', syncSidebarInert);

  /* ---------- Theme ---------- */
  var themeBtn = $('#theme-btn');
  function applyThemeLabel() {
    var t = document.documentElement.getAttribute('data-theme');
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#0d1430' : '#eaf0fb');
  }
  themeBtn.addEventListener('click', function () {
    var t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
    store('cb-theme', t);
    applyThemeLabel();
  });

  /* ---------- Progress + back to top ---------- */
  var bar = $('#progress-bar'), topBtn = $('#to-top'), ticking = false;
  function updateProgress() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0;
    bar.style.width = pct + '%';
    topBtn.hidden = window.scrollY < 600;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { updateProgress(); ticking = false; }); }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  topBtn.addEventListener('click', function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    $('#main').focus({ preventScroll: true });
  });

  /* ---------- Print ---------- */
  var openedForPrint = [];
  window.addEventListener('beforeprint', function () {
    openedForPrint = $$('details:not([open])', pageEl);
    openedForPrint.forEach(function (d) { d.open = true; });
  });
  window.addEventListener('afterprint', function () { openedForPrint.forEach(function (d) { d.open = false; }); openedForPrint = []; });
  $('#print-btn').addEventListener('click', function () { window.print(); });

  /* ---------- Keyboard shortcuts ---------- */
  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    var typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
    if (e.key === 'Escape') closeNav();
    if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === '/') {
      e.preventDefault();
      if (isMobile()) openNav();
      setTimeout(function () { $('#search-input').focus(); }, isMobile() ? 280 : 0);
    } else if (e.key === '[' || e.key === ']') {
      var a = $(e.key === '[' ? '.pager a[rel="prev"]' : '.pager a[rel="next"]', pageEl);
      if (a) location.hash = a.getAttribute('href');
    }
  });
  $('#search-open').addEventListener('click', function () {
    if (isMobile()) openNav();
    setTimeout(function () { $('#search-input').focus(); }, isMobile() ? 280 : 0);
  });

  /* ---------- In-page anchor clicks (TOC) ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#/"]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (href === location.hash && href.indexOf('?s=') > 0) {
      e.preventDefault();
      scrollToSection(href.split('?s=')[1], true);
    }
  });

  /* ---------- Boot ---------- */
  buildNav();
  buildIndex();
  setupSearch();
  applyThemeLabel();
  syncSidebarInert();
  window.addEventListener('hashchange', render);
  render();
})();
