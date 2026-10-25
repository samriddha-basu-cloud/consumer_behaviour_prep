/* =========================================================
   Content registry + authoring helpers.
   Attribution rule used everywhere:
     P(m, pages)  -> content taken from a PDF slide
     A            -> Additional Explanation (not in the PDFs)
     E            -> Real-Life Example (not in the PDFs)
   ========================================================= */
(function () {
  'use strict';

  var FILES = {
    1: 'CB_MODULE I.pdf',
    2: 'CB_Module II.pdf',
    3: 'CB_MODULE III.pdf',
    4: 'CB_MODULE IV.pdf',
    5: 'CB_MODULE V.pdf'
  };

  var CB = window.CB = { files: FILES, modules: [], terms: [], recap: null, coverage: null };

  CB.addModule = function (m) { CB.modules.push(m); };
  CB.addTerms = function (moduleId, list) {
    list.forEach(function (t) { CB.terms.push({ term: t[0], module: moduleId, topic: t[1], def: t[2] }); });
  };

  /* ---- Tags ---- */
  var P = function (m, pages) {
    var multi = /[,–-]/.test(String(pages));
    return '<span class="tag pdf">PDF Source: ' + FILES[m] + ', ' + (multi ? 'pp. ' : 'p. ') + pages + '</span>';
  };
  var A = '<span class="tag add">Additional Explanation</span>';
  var E = '<span class="tag ex">Real-Life Example</span>';

  /* ---- Blocks ---- */
  var H = {
    P: P, A: A, E: E,
    pdf: function (m, pages, html) { return '<div class="b pdf">' + P(m, pages) + html + '</div>'; },
    add: function (html) { return '<div class="b add">' + A + html + '</div>'; },
    ex: function (html) { return '<div class="b ex">' + E + html + '</div>'; },
    tip: function (t, html) { return '<aside class="call tip"><span class="call-t">' + t + '</span>' + html + '</aside>'; },
    warn: function (t, html) { return '<aside class="call warn"><span class="call-t">' + t + '</span>' + html + '</aside>'; },
    link: function (t, html) { return '<aside class="call link"><span class="call-t">' + t + '</span>' + html + '</aside>'; },
    more: function (summary, html) { return '<details class="more"><summary>' + summary + '</summary><div class="more-body">' + html + '</div></details>'; },
    table: function (head, rows, caption, narrow) {
      var h = '<div class="tbl' + (narrow ? ' narrow' : '') + '" tabindex="0"><table>' + (caption ? '<caption>' + caption + '</caption>' : '') + '<thead><tr>';
      head.forEach(function (c) { h += '<th scope="col">' + c + '</th>'; });
      h += '</tr></thead><tbody>';
      rows.forEach(function (r) { h += '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; });
      return h + '</tbody></table></div>';
    },
    terms: function (list) {
      return '<dl class="terms">' + list.map(function (t) { return '<dt>' + t[0] + '</dt><dd>' + t[1] + '</dd>'; }).join('') + '</dl>';
    },
    answer: function (marks, q, html) {
      return '<section class="answer"><div class="answer-h"><span class="marks">' + marks + ' marks</span><span class="q">' + q + '</span></div><div class="answer-b">' + html + '</div></section>';
    },
    qs: function (list) {
      return '<ol class="qlist">' + list.map(function (q) { return '<li>' + q[0] + (q[1] ? '<span class="m">(' + q[1] + ')</span>' : '') + '</li>'; }).join('') + '</ol>';
    },
    ul: function (items) { return '<ul>' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>'; },
    ol: function (items) { return '<ol>' + items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ol>'; },
    /* Link to another topic: go('m1', 'buying-process', 'label') */
    go: function (mod, topic, label) { return '<a href="#/' + mod + (topic ? '/' + topic : '') + '">' + label + '</a>'; }
  };

  CB.H = H;
})();
