/* =========================================================
   Diagram builders — return HTML strings; D.bind() wires up
   interactivity after a page renders. No dependencies.
   Every diagram node is a real <button>, so diagrams work
   with keyboard and screen readers. Clicking a node shows
   its explanation in the panel beneath the diagram.
   ========================================================= */
(function () {
  'use strict';

  var uid = 0;
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function node(it, extraClass, style) {
    var tone = it.tone ? ' t-' + it.tone : '';
    var st = style ? ' style="' + style + '"' : '';
    return '<button type="button" class="node' + tone + (extraClass ? ' ' + extraClass : '') + '"' + st +
      ' aria-pressed="false" data-t="' + esc(it.t) + '" data-d="' + esc(it.d || '') + '">' +
      (it.n != null ? '<span class="num" aria-hidden="true">' + it.n + '</span>' : '') +
      '<span>' + it.t + '</span>' + (it.s ? '<small>' + it.s + '</small>' : '') + '</button>';
  }

  function printList(items) {
    var out = '<dl class="dgm-print">';
    items.forEach(function (it) { if (it.d) out += '<dt>' + it.t + '</dt><dd>' + it.d + '</dd>'; });
    return out + '</dl>';
  }

  function frame(o, inner, items, kind) {
    var id = 'dgm-' + (++uid);
    var hasInfo = items && items.some(function (i) { return i.d; });
    return '<figure class="dgm dgm-' + kind + '" id="' + id + '">' +
      '<figcaption class="dgm-cap"><span class="dt">' + (o.title || '') + '</span>' +
      (hasInfo ? '<span class="dh">' + (o.hint || 'Select any part to see what it means') + '</span>' : '') +
      (o.src ? '<span class="dsrc">' + o.src + '</span>' : '') + '</figcaption>' +
      inner +
      (hasInfo ? '<div class="dgm-info" aria-live="polite"><p class="ph">' + (o.placeholder || 'Choose a box above to read its explanation.') + '</p></div>' + printList(items) : '') +
      '</figure>';
  }

  var ARROW_H = '<span class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  var ARROW_V = '<span class="arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 4v15M6 13l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';

  var D = {};

  /* Sequential flow. o.items: [{t, s, d, tone}], o.dir: 'h' | 'v', o.numbered, o.ops (array of symbols between items), o.loop */
  D.flow = function (o) {
    var v = o.dir === 'v';
    var html = '<div class="flow' + (v ? ' v' : '') + '">';
    o.items.forEach(function (it, i) {
      var copy = Object.assign({}, it);
      if (o.numbered) copy.n = i + 1;
      html += node(copy);
      if (i < o.items.length - 1) {
        if (o.ops) html += '<span class="op" aria-hidden="true">' + o.ops[i] + '</span>';
        else html += v ? ARROW_V : ARROW_H;
      }
    });
    html += '</div>';
    if (o.loop) html += '<p class="loop">↺ ' + o.loop + '</p>';
    return frame(o, html, o.items, 'flow');
  };

  /* Hub-and-spoke concept map: a core idea with up to 8 surrounding nodes */
  D.hub = function (o) {
    // grid positions around the centre (3x3, centre = core)
    var pos = [[1, 1], [1, 2], [1, 3], [2, 3], [3, 3], [3, 2], [3, 1], [2, 1]];
    var order = o.items.length <= 4 ? [1, 3, 5, 7] : o.items.length <= 6 ? [0, 2, 3, 4, 6, 7] : [0, 1, 2, 3, 4, 5, 6, 7];
    var html = '<div class="hub"><div class="core" aria-hidden="false">' + o.core + '</div>';
    o.items.forEach(function (it, i) {
      var p = pos[order[i]];
      html += node(it, '', 'grid-row:' + p[0] + ';grid-column:' + p[1]);
    });
    html += '</div>';
    return frame(o, html, o.items, 'hub');
  };

  /* Pyramid, top level first. o.levels: [{t, s, d, c}] ; o.brackets: [{t, span}] (top-down) */
  D.pyramid = function (o) {
    var n = o.levels.length;
    var html = '<div class="pyr-wrap"><div class="pyr">';
    var prev = 0;
    o.levels.forEach(function (lv, i) {
      // width grows linearly; the clip inset makes each slice's top edge meet the slice above
      var w = 40 + (60 * i / Math.max(1, n - 1));
      var inset = i === 0 ? 50 : ((w - prev) / (2 * w)) * 100;
      prev = w;
      var cls = 'lvl' + (i === 0 ? ' top' : '');
      html += node(lv, cls, '--w:' + w.toFixed(1) + '%;--inset:' + inset.toFixed(2) + '%;--c:' + (lv.c || 'var(--accent-soft)'));
    });
    html += '</div>';
    if (o.brackets) {
      html += '<div class="pyr-brackets" aria-hidden="true">';
      o.brackets.forEach(function (b) { html += '<span style="flex:' + b.span + '">' + b.t + '</span>'; });
      html += '</div>';
    }
    html += '</div>';
    return frame(o, html, o.levels, 'pyramid');
  };

  /* 2x2 matrix. o.cols: [left, right], o.rows: [top, bottom], o.cells: [[tl, tr], [bl, br]] */
  D.matrix = function (o) {
    var items = [];
    var html = '<div class="matrix"><span class="ax corner"></span>';
    html += '<span class="ax">' + o.cols[0] + '</span><span class="ax">' + o.cols[1] + '</span>';
    o.rows.forEach(function (r, ri) {
      html += '<span class="ax row">' + r + '</span>';
      o.cells[ri].forEach(function (c) { items.push(c); html += node(c); });
    });
    html += '</div>';
    return frame(o, html, items, 'matrix');
  };

  /* Iceberg. o.tip: nodes above water, o.deep: nodes below, o.tipChips / o.deepChips: plain tags, o.waterLabel */
  D.iceberg = function (o) {
    var items = (o.tip || []).concat(o.deep || []);
    var html = '<div class="berg">';
    html += '<div class="tip-zone"><span class="zone-l">' + (o.tipLabel || 'Visible') + '</span>';
    (o.tip || []).forEach(function (it) { html += node(it, '', '--w:' + (it.w || '46%')); });
    if (o.tipChips) html += '<div class="chips" style="--w:52%">' + o.tipChips.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div>';
    html += '</div><div class="deep-zone"><span class="water" aria-hidden="true">' + (o.waterLabel || 'Waterline') + '</span><span class="zone-l">' + (o.deepLabel || 'Hidden') + '</span>';
    (o.deep || []).forEach(function (it, i) { html += node(it, '', '--w:' + (it.w || (62 + i * 10) + '%')); });
    if (o.deepChips) html += '<div class="chips" style="--w:92%">' + o.deepChips.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div>';
    html += '</div></div>';
    return frame(o, html, items, 'iceberg');
  };

  /* Three parts with labelled bridges (e.g. Id – Ego – Superego) */
  D.triad = function (o) {
    var html = '<div class="triad">' + node(o.items[0]) + '<span class="bridge">' + (o.bridges ? o.bridges[0] : '⟷') + '</span>' +
      node(o.items[1]) + '<span class="bridge">' + (o.bridges ? o.bridges[1] : '⟷') + '</span>' + node(o.items[2]) + '</div>';
    return frame(o, html, o.items, 'triad');
  };

  /* Narrowing funnel (top widest) */
  D.funnel = function (o) {
    var n = o.items.length;
    var html = '<div class="funnel">';
    o.items.forEach(function (it, i) {
      var w = 100 - i * (55 / Math.max(1, n - 1));
      html += node(it, '', '--w:' + w.toFixed(0) + '%');
      if (i < n - 1) html += ARROW_V;
    });
    html += '</div>';
    return frame(o, html, o.items, 'funnel');
  };

  /* Horizontal timeline that scrolls on narrow screens */
  D.timeline = function (o) {
    var html = '<div class="timeline" tabindex="0" aria-label="Timeline, scroll sideways on small screens">';
    o.items.forEach(function (it, i) { var c = Object.assign({}, it); c.n = i + 1; html += node(c); });
    html += '</div>';
    return frame(o, html, o.items, 'timeline');
  };

  /* Grid of nodes (no centre). o.cols */
  D.grid = function (o) {
    var html = '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(' + (o.min || '9rem') + ',1fr));margin:0">';
    o.items.forEach(function (it) { html += node(it); });
    html += '</div>';
    return frame(o, html, o.items, 'gridd');
  };

  /* Side-by-side columns, each with a heading and a stack of nodes. o.cols: [{h, items}] */
  D.columns = function (o) {
    var items = [];
    var html = '<div class="cols" style="grid-template-columns:repeat(' + o.cols.length + ',1fr)">';
    o.cols.forEach(function (c) {
      html += '<div class="col"><span class="col-h">' + c.h + '</span>';
      c.items.forEach(function (it) { items.push(it); html += node(it); });
      html += '</div>';
    });
    html += '</div>';
    return frame(o, html, items, 'columns');
  };

  /* Mode switcher showing a different ordered sequence per mode.
     o.modes: [{label, seq:[{k, t}], note}] */
  D.toggle = function (o) {
    var html = '<div class="seg" role="group" aria-label="' + esc(o.groupLabel || 'Choose a view') + '">';
    o.modes.forEach(function (m, i) {
      html += '<button type="button" data-mode="' + i + '" aria-pressed="' + (i === 0) + '">' + m.label + '</button>';
    });
    html += '</div>';
    o.modes.forEach(function (m, i) {
      html += '<div class="mode" data-mode-panel="' + i + '"' + (i === 0 ? '' : ' hidden') + '><div class="seq">';
      m.seq.forEach(function (c, j) {
        html += '<div class="chip">' + (c.k ? '<b>' + c.k + '</b>' : '') + c.t + '</div>';
        if (j < m.seq.length - 1) html += '<span class="ar" aria-hidden="true">→</span>';
      });
      html += '</div><p class="seq-note">' + (m.note || '') + '</p></div>';
    });
    return frame(o, html, null, 'toggle');
  };

  /* Adams' equity comparison */
  D.equity = function (o) {
    var modes = [
      { label: 'Equity', me: '10 ÷ 10', other: '10 ÷ 10', sym: '=', note: 'Ratios match. The consumer feels the deal was fair and is satisfied: e.g. you and a friend paid the same fare for the same seat.' },
      { label: 'Under-reward', me: '6 ÷ 10', other: '10 ÷ 10', sym: '<', note: 'You got less for the same input. Felt as unfair: anger, complaints, negative reviews, switching. E.g. you paid full price; a friend got the same phone at a festive sale discount a week later.' },
      { label: 'Over-reward', me: '12 ÷ 10', other: '10 ÷ 10', sym: '>', note: 'You got more than the comparison person. Usually mild guilt or delight; consumers rarely complain, but it can raise future expectations (e.g. a free upgrade).' }
    ];
    var html = '<div class="seg" role="group" aria-label="Choose an equity situation">';
    modes.forEach(function (m, i) { html += '<button type="button" data-mode="' + i + '" aria-pressed="' + (i === 0) + '">' + m.label + '</button>'; });
    html += '</div>';
    modes.forEach(function (m, i) {
      html += '<div class="mode" data-mode-panel="' + i + '"' + (i === 0 ? '' : ' hidden') + '><div class="scale">' +
        '<div class="side">Me: outcomes ÷ inputs<span class="ratio">' + m.me + '</span></div>' +
        '<div class="sym" aria-label="compared with">' + m.sym + '</div>' +
        '<div class="side">Referent other: outcomes ÷ inputs<span class="ratio">' + m.other + '</span></div>' +
        '</div><p class="seq-note">' + m.note + '</p></div>';
    });
    return frame(o, html, null, 'equity');
  };

  /* Wire up interactions within a root element */
  D.bind = function (root) {
    root.querySelectorAll('.dgm').forEach(function (fig) {
      var info = fig.querySelector('.dgm-info');
      fig.querySelectorAll('.node').forEach(function (btn) {
        btn.addEventListener('click', function () {
          fig.querySelectorAll('.node[aria-pressed="true"]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
          btn.setAttribute('aria-pressed', 'true');
          if (info) {
            var d = btn.getAttribute('data-d');
            info.innerHTML = '<b>' + btn.getAttribute('data-t') + '</b><p>' + (d || 'No further detail for this item.') + '</p>';
          }
        });
      });
      fig.querySelectorAll('.seg button[data-mode]').forEach(function (b) {
        b.addEventListener('click', function () {
          var m = b.getAttribute('data-mode');
          fig.querySelectorAll('.seg button[data-mode]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          fig.querySelectorAll('[data-mode-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-mode-panel') !== m; });
        });
      });
    });
  };

  window.D = D;
})();
