(function () {
  var I = window.I18N, lang = 'hant', svcKey = 'sea', filter = 'all';
  try { var saved = localStorage.getItem('draco-lang'); if (saved && I[saved]) lang = saved; } catch (e) {}

  // 集團公司：成立時間、品牌、城市代碼（nameCity 為公司名稱用的地名）
  var COS = [
    ['2010.04', 'draco', 'dg'], ['2011.07', 'draco', 'hk'], ['2012.02', 'draco', 'khh', 'tw'], ['2021.09', 'draco', 'gz'],
    ['2022.10', 'draco', 'ny'], ['2023.12', 'seal', 'sz'], ['2024.03', 'seal', 'dg'], ['2025.03', 'rhino', 'jn'],
    ['2025.04', 'seal', 'gz'], ['2025.08', 'draco', 'sg'], ['2025.12', 'draco', 'sz'], ['2026.05', 'seal', 'txg'],
    ['2026.07', 'seal', 'bn'], ['2026', 'draco', 'th']
  ];
  var COLOR = { draco: 'var(--crimson)', seal: 'var(--seal)', rhino: 'var(--gold)' };
  var SVC_KEYS = ['sea', 'air', 'land', 'wh', 'cus'];
  var SVC_EN = { sea: 'OCEAN', air: 'AIR', land: 'TRUCKING & RAIL', wh: 'WAREHOUSING', cus: 'CUSTOMS' };

  function el(tag, text, cls) { var e = document.createElement(tag); if (text != null) e.textContent = text; if (cls) e.className = cls; return e; }
  function fill(node, kids) { node.textContent = ''; kids.forEach(function (k) { node.appendChild(k); }); }

  function txt(id, t) { document.getElementById(id).textContent = t; }
  function pair(x) { var d = el('div'); d.appendChild(el('b', x[0])); d.appendChild(el('span', x[1])); return d; }
  function stepLi(x) { var li = el('li'); li.appendChild(el('b', x[0])); li.appendChild(el('span', x[1])); return li; }

  function renderSvc() {
    var T = I[lang], d = T.svc[svcKey];
    document.getElementById('svc-title').textContent = d.t;
    fill(document.getElementById('svc-list'), d.l.map(function (x) { return el('li', x); }));
    document.getElementById('svc-note').textContent = d.n;
    document.getElementById('svc-pitch').textContent = T.copy.pitch[svcKey];
    document.getElementById('svc-panel').setAttribute('aria-labelledby', 't-' + svcKey);
    [].forEach.call(document.querySelectorAll('.tab'), function (t) { t.setAttribute('aria-selected', t.dataset.k === svcKey ? 'true' : 'false'); });
  }

  function renderTimeline() {
    var T = I[lang];
    fill(document.getElementById('tl'), COS.filter(function (c) { return filter === 'all' || c[1] === filter; }).map(function (c) {
      var li = el('li'); li.style.setProperty('--b', COLOR[c[1]]);
      li.appendChild(el('time', c[0]));
      li.appendChild(el('strong', T.coName(T.city[c[3] || c[2]], T.brandShort[c[1]])));
      li.appendChild(el('span', T.place[c[2]]));
      return li;
    }));
    [].forEach.call(document.querySelectorAll('.chip'), function (b) { b.setAttribute('aria-pressed', b.dataset.f === filter ? 'true' : 'false'); });
  }

  function render() {
    var T = I[lang];
    document.documentElement.lang = T.htmlLang;
    [].forEach.call(document.querySelectorAll('[data-i]'), function (n) { n.textContent = T[n.dataset.i]; });
    [].forEach.call(document.querySelectorAll('[data-h]'), function (n) { n.innerHTML = T[n.dataset.h]; });
    [].forEach.call(document.querySelectorAll('.lang button'), function (b) { b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false'); });

    // 品牌據點
    [].forEach.call(document.querySelectorAll('[data-cities]'), function (ul) {
      var seen = {}, kids = [];
      COS.forEach(function (c) { if (c[1] === ul.dataset.cities && !seen[c[2]]) { seen[c[2]] = 1; kids.push(el('li', T.city[c[2]])); } });
      fill(ul, kids);
    });

    // 服務分頁
    fill(document.getElementById('tabs'), SVC_KEYS.map(function (k) {
      var b = el('button', T.svc[k].t, 'tab'); b.type = 'button'; b.id = 't-' + k; b.dataset.k = k;
      b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'svc-panel');
      if (lang !== 'en') b.appendChild(el('small', SVC_EN[k]));
      b.addEventListener('click', function () { svcKey = k; renderSvc(); });
      return b;
    }));
    renderSvc();
    fill(document.getElementById('extra'), [el('b', T.extraLabel)].concat(T.extra.map(function (x) { return el('span', x); })));

    // 據點篩選
    var counts = { all: COS.length, draco: 0, seal: 0, rhino: 0 };
    COS.forEach(function (c) { counts[c[1]]++; });
    fill(document.getElementById('filters'), ['all', 'draco', 'seal', 'rhino'].map(function (f) {
      var b = el('button', (f === 'all' ? T.all : T.brandShort[f]) + ' ' + counts[f], 'chip'); b.type = 'button'; b.dataset.f = f; b.id = 'f-' + f;
      b.addEventListener('click', function () { filter = f; renderTimeline(); });
      return b;
    }));
    renderTimeline();

    fill(document.getElementById('certs'), T.certs.map(function (c) { var li = el('li'); li.appendChild(el('b', c[0])); li.appendChild(el('span', c[1])); return li; }));

    fill(document.getElementById('esgGrid'), T.esg.map(function (g) {
      var a = el('article'), k = el('div', g[0], 'k'); k.setAttribute('aria-hidden', 'true');
      var ul = el('ul'); g[2].forEach(function (x) { ul.appendChild(el('li', x)); });
      if (g[3]) { var li = el('li'); li.appendChild(el('span', g[3], 'ph')); ul.appendChild(li); }
      a.appendChild(k); a.appendChild(el('h3', g[1])); a.appendChild(ul); return a;
    }));


    // 文案
    var K = T.copy;
    txt('slogan', K.slogan); txt('whyH2', K.whyH2); txt('svLead', K.svLead); txt('abH2', K.abH2); txt('abP', K.abP);
    fill(document.getElementById('why-list'), K.why.map(pair));
    fill(document.getElementById('vals'), K.vals.map(function (v) { var d = el('div'); d.appendChild(el('span', v[0])); d.appendChild(el('b', v[1])); return d; }));
    [].forEach.call(document.querySelectorAll('[data-cta]'), function (h) { var c = K.cta[h.dataset.cta]; h.textContent = c[0]; h.nextElementSibling.textContent = c[1]; });

    // 首頁入口卡
    var HREF = ['#services', '#warehousing', '#draco-one', '#about', '#tools'];
    var TX = window.renderTool(lang, T.modes); txt('navTool', TX.navTools);
    [].forEach.call(document.querySelectorAll('.js-quote'), function (a) { a.textContent = TX.navQuote; });
    var QH = ['#draco-one', '#tools', '#quote'];
    fill(document.getElementById('quick'), TX.tiles.map(function (x, i) { var a = el('a'); a.href = QH[i]; a.appendChild(el('b', x[0])); a.appendChild(el('span', x[1])); return a; }));
    fill(document.getElementById('entryGrid'), T.entries.concat([TX.card]).map(function (x, i) { var a = el('a'); a.href = HREF[i]; a.appendChild(el('b', x[0])); a.appendChild(el('span', x[1])); var ar = el('i', '→'); ar.setAttribute('aria-hidden', 'true'); a.appendChild(ar); return a; }));

    // 倉儲據點
    var W = T.wh;
    txt('whH2', W.h2); txt('whLead', W.lead); txt('vasH', W.vasH); txt('hubH', W.hubH); txt('hubLead', W.hubLead); txt('bondH', W.bondH); txt('bondNote', W.bondNote);
    fill(document.getElementById('sites'), W.sites.map(function (s) {
      var a = el('article', null, 'site'), info = el('div', null, 'site-info'), sp = el('div', null, 'specs'), ul = el('ul'), pics = el('div', null, 'site-pics');
      info.appendChild(el('h3', s.name)); info.appendChild(el('div', s.tag, 'tag')); info.appendChild(el('div', s.loc, s.loc.charAt(0) === '[' ? 'loc todo' : 'loc'));
      s.specs.forEach(function (x) { var d = el('div'); d.appendChild(el('b', x[0])); d.appendChild(el('span', x[1])); sp.appendChild(d); });
      s.pts.forEach(function (x) { ul.appendChild(el('li', x)); });
      if (s.desc) info.appendChild(el('p', s.desc));
      info.appendChild(sp); info.appendChild(ul);
      s.img.forEach(function (src, i) { var im = el('img'); im.src = 'assets/' + src; im.alt = i ? '' : s.alt; im.loading = 'lazy'; pics.appendChild(im); });
      a.appendChild(info); if (s.img.length) a.appendChild(pics); else a.className = 'site nopic'; return a;
    }));
    fill(document.getElementById('moreSites'), [el('b', W.moreH)].concat(W.more.map(function (m) { var d = el('div'); d.appendChild(el('b', m[0])); d.appendChild(el('span', m[1])); return d; })));
    fill(document.getElementById('vas'), W.vas.map(pair));
    fill(document.getElementById('bond'), W.bond.map(pair));
    var thead = el('thead'), htr = el('tr'), tbody = el('tbody');
    W.hubCols.forEach(function (c) { var th = el('th', c); th.scope = 'col'; htr.appendChild(th); }); thead.appendChild(htr);
    W.hubRows.forEach(function (r) { var tr = el('tr'); r.forEach(function (c) { tr.appendChild(el('td', c)); }); tbody.appendChild(tr); });
    fill(document.getElementById('hubTable'), [thead, tbody]);

    // DRACO ONE 與 WMS 線上查詢
    var S = T.wms;
    txt('wmsH2', S.h2); txt('wmsLead', S.lead); txt('qH', S.formH); txt('qLead', S.formLead); txt('qL1', S.f1); txt('qL2', S.f2); txt('qBtn', S.btn); txt('qLogin', S.login);
    txt('stepsH', S.stepsH); txt('qcH', S.qcH); txt('wmsLangs', S.langs); txt('qMsg', '');
    fill(document.getElementById('qCan'), S.can.map(function (x) { return el('li', x); }));
    fill(document.getElementById('wmsSteps'), S.steps.map(stepLi));
    fill(document.getElementById('qc'), S.qc.map(pair));

    // 合作流程
    txt('onbH2', T.onb.h2);
    fill(document.getElementById('onbSteps'), T.onb.steps.map(stepLi));

    cv.setAttribute('aria-label', T.mapLabel);
    if (still) draw(0);
  }

  // 首頁動畫：海、空、陸三種路線從珠三角出發，依序畫出後，飛機、貨輪、卡車來回行駛
  var cv = document.getElementById('routes'), ctx = cv.getContext('2d');
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hub = { lon: 113.8, lat: 22.8 };
  var COL = { air: '#E2BE4B', sea: '#7FD1E0', land: '#FF9A8B' };
  var DASH = { air: [], sea: [9, 6], land: [2, 6] };
  var pts = [
    { c: 'ny', m: 'air', fx: .9, fy: .13, dx: -14, dy: 5, a: 'right', T: 5200 },
    { c: 'jn', m: 'land', lon: 117, lat: 36.6, dx: 14, dy: 5, T: 6400 },
    { c: 'txg', m: 'sea', lon: 121.6, lat: 25.4, dx: 14, dy: 0, T: 7600 },
    { c: 'khh', m: 'sea', lon: 121.2, lat: 20.6, dx: 14, dy: 14, T: 8200 },
    { c: 'bn', m: 'land', lon: 105.5, lat: 21.2, dx: -14, dy: -8, a: 'right', T: 5600 },
    { c: 'th', m: 'land', lon: 100.5, lat: 13.7, dx: -14, dy: 5, a: 'right', T: 7200 },
    { c: 'sg', m: 'sea', lon: 103.8, lat: 1.4, dx: 14, dy: 5, T: 9000 }
  ];
  var ICON = null;
  try {
    ICON = {
      air: new Path2D('M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'),
      sea: new Path2D('M2 14h20l-3 6H5zM6 13V9h5v4zM12 13V6h5v7z'),
      land: new Path2D('M1 7h13v9H1zM15 10h4l3 4v2h-7zM3 17.5a2 2 0 104 0 2 2 0 10-4 0M16 17.5a2 2 0 104 0 2 2 0 10-4 0')
    };
  } catch (e) {}
  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function pos(p, w, h) {
    if (p.fx) return [p.fx * w, p.fy * h];
    return [(p.lon - 94) / (126 - 94) * .6 * w + .06 * w, (40 - p.lat) / 42 * .76 * h + .1 * h];
  }
  function ctrl(H, P, m) {
    var mx = (H[0] + P[0]) / 2, my = (H[1] + P[1]) / 2, dx = P[0] - H[0], dy = P[1] - H[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
    if (m === 'air') return [mx, Math.min(H[1], P[1]) - len * .32 - 10];
    var nx = -dy / len, ny = dx / len; if (nx < 0) { nx = -nx; ny = -ny; }
    var k = m === 'sea' ? .28 : .07;
    return [mx + nx * len * k, my + ny * len * k];
  }
  function bez(H, C, P, u) { var v = 1 - u; return [v * v * H[0] + 2 * v * u * C[0] + u * u * P[0], v * v * H[1] + 2 * v * u * C[1] + u * u * P[1]]; }
  function strokeTo(H, C, P, u0, u1) {
    ctx.beginPath();
    for (var i = 0; i <= 24; i++) { var q = bez(H, C, P, u0 + (u1 - u0) * i / 24); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); }
    ctx.stroke();
  }
  var t0 = null;
  function draw(t) {
    if (t0 === null) t0 = t;
    var e = still ? 1e6 : t - t0, T = I[lang], r = cv.getBoundingClientRect(), d = window.devicePixelRatio || 1, w = r.width, h = r.height;
    if (w < 10) { if (!still) requestAnimationFrame(draw); return; }
    if (cv.width !== Math.round(w * d) || cv.height !== Math.round(h * d)) { cv.width = Math.round(w * d); cv.height = Math.round(h * d); }
    ctx.setTransform(d, 0, 0, d, 0, 0); ctx.clearRect(0, 0, w, h);
    var H = pos(hub, w, h), fs = Math.max(13, Math.min(16, w / 32)), font = 'px "Noto Sans TC","Noto Sans Thai",sans-serif';

    // 背景：點陣與樞紐光暈
    ctx.fillStyle = 'rgba(255,255,255,.08)';
    for (var gx = 12; gx < w; gx += 24) for (var gy = 12; gy < h; gy += 24) ctx.fillRect(gx, gy, 2, 2);
    var g = ctx.createRadialGradient(H[0], H[1], 0, H[0], H[1], w * .45);
    g.addColorStop(0, 'rgba(181,24,47,.38)'); g.addColorStop(1, 'rgba(181,24,47,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

    pts.forEach(function (p, i) {
      var P = pos(p, w, h), C = ctrl(H, P, p.m), col = COL[p.m];
      var rev = clamp((e - 300 - i * 240) / 900), shown = clamp((e - 1200 - i * 240) / 400);
      ctx.strokeStyle = col; ctx.globalAlpha = .6; ctx.lineWidth = 1.6; ctx.setLineDash(DASH[p.m]);
      strokeTo(H, C, P, 0, rev); ctx.setLineDash([]); ctx.globalAlpha = 1;
      if (shown <= 0) return;

      // 據點：脈動光圈與地名
      if (!still) { var ph = (e / 2000 + i * .31) % 1; ctx.strokeStyle = col; ctx.globalAlpha = (1 - ph) * .6 * shown; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(P[0], P[1], 5 + ph * 18, 0, 7); ctx.stroke(); }
      ctx.globalAlpha = shown; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(P[0], P[1], 5 * shown, 0, 7); ctx.fill();
      ctx.font = '700 ' + fs + font; ctx.textAlign = p.a || 'left'; ctx.fillText(T.city[p.c], P[0] + p.dx, P[1] + p.dy);
      ctx.globalAlpha = 1;

      // 運具：去程、回程交替，帶光尾
      var cyc = still ? .28 : (e - 1600 - i * 240) / p.T; if (cyc < 0) return;
      var k = Math.floor(cyc), f = cyc - k, ez = f < .5 ? 2 * f * f : 1 - 2 * (1 - f) * (1 - f), out = k % 2 === 0, u = out ? ez : 1 - ez;
      var tail = out ? Math.max(0, u - .16) : Math.min(1, u + .16);
      for (var s = 0; s < 8; s++) { ctx.strokeStyle = col; ctx.globalAlpha = (s + 1) / 8 * .9; ctx.lineWidth = 1 + s * .35; strokeTo(H, C, P, tail + (u - tail) * s / 8, tail + (u - tail) * (s + 1) / 8); }
      ctx.globalAlpha = 1;
      var q = bez(H, C, P, u), q2 = bez(H, C, P, clamp(u + (out ? .01 : -.01))), ang = Math.atan2(q2[1] - q[1], q2[0] - q[0]);
      ctx.save(); ctx.translate(q[0], q[1]); ctx.shadowColor = col; ctx.shadowBlur = 14; ctx.fillStyle = '#fff';
      if (ICON) {
        if (p.m === 'air') ctx.rotate(ang + Math.PI / 2); else if (Math.cos(ang) < 0) ctx.scale(-1, 1);
        var sc = fs / 16 * (p.m === 'air' ? 1 : .9); ctx.scale(sc, sc); ctx.translate(-12, -12); ctx.fill(ICON[p.m]);
      } else { ctx.beginPath(); ctx.arc(0, 0, 4, 0, 7); ctx.fill(); }
      ctx.restore();
    });

    // 樞紐
    ctx.strokeStyle = '#E2BE4B'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 6]); ctx.lineDashOffset = still ? 0 : -e / 70;
    ctx.beginPath(); ctx.arc(H[0], H[1], 22, 0, 7); ctx.stroke(); ctx.setLineDash([]); ctx.lineDashOffset = 0;
    ctx.fillStyle = '#B5182F'; ctx.beginPath(); ctx.arc(H[0], H[1], 10, 0, 7); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.textAlign = 'center';
    ctx.font = '900 ' + (fs + 3) + font; ctx.fillText(T.hub, H[0], H[1] + 44);
    if (w >= 420) { ctx.fillStyle = '#C9D2DF'; ctx.font = '500 ' + (fs - 2) + font; ctx.fillText(T.hubSub, H[0], H[1] + 64); }

    // 圖例
    var lx = 4, ly = h - 10; ctx.textAlign = 'left'; ctx.font = '500 ' + (fs - 2) + font;
    [['sea', T.modes[0]], ['air', T.modes[1]], ['land', T.modes[2]]].forEach(function (L) {
      ctx.strokeStyle = COL[L[0]]; ctx.lineWidth = 2; ctx.setLineDash(DASH[L[0]]); ctx.beginPath(); ctx.moveTo(lx, ly - 4); ctx.lineTo(lx + 26, ly - 4); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#C9D2DF'; ctx.fillText(L[1], lx + 32, ly); lx += 32 + ctx.measureText(L[1]).width + 18;
    });
    if (!still) requestAnimationFrame(draw);
  }

  // 首頁數字跳動
  var counted = false;
  function countUp() {
    if (counted || still) return; counted = true;
    var els = [].slice.call(document.querySelectorAll('[data-count]')), s0 = null;
    function step(t) {
      if (s0 === null) s0 = t; var k = clamp((t - s0) / 1400), ez = 1 - Math.pow(1 - k, 3);
      els.forEach(function (b) { b.textContent = Math.round(+b.dataset.count * ez) + (b.dataset.suffix || ''); });
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  [].forEach.call(document.querySelectorAll('.lang button'), function (b) {
    b.addEventListener('click', function () {
      lang = b.dataset.l;
      try { localStorage.setItem('draco-lang', lang); } catch (e) {}
      render();
    });
  });

  // WMS 線上查詢：初稿尚未串接系統，只顯示說明
  function wmsNotice(e) { if (e) e.preventDefault(); document.getElementById('qMsg').textContent = I[lang].wms.notice; }
  document.getElementById('qForm').addEventListener('submit', wmsNotice);
  document.getElementById('qLogin').addEventListener('click', wmsNotice);

  // 分頁：依網址 # 後的名稱只顯示該頁的區塊
  var PAGES = { home: 1, services: 1, warehousing: 1, 'draco-one': 1, tools: 1, quote: 1, about: 1, contact: 1 };
  function route() {
    var p = location.hash.slice(1); if (!PAGES[p]) p = 'home';
    [].forEach.call(document.querySelectorAll('[data-page]'), function (s) { s.hidden = s.dataset.page !== p; });
    [].forEach.call(document.querySelectorAll('nav a, .actions a, .topbar a'), function (a) { if (a.getAttribute('href') === '#' + p) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    setMenu(false);
    window.scrollTo(0, 0);
    if (p === 'home') { if (still) draw(0); else { t0 = null; countUp(); } }
  }
  var bar = document.querySelector('.bar'), menuBtn = document.getElementById('menuBtn');
  function setMenu(open) { bar.classList.toggle('open', open); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  menuBtn.addEventListener('click', function () { setMenu(!bar.classList.contains('open')); });
  [].forEach.call(document.querySelectorAll('#mainNav a'), function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  window.addEventListener('hashchange', route);

  render();
  route();
  if (still) window.addEventListener('resize', function () { draw(0); }); else requestAnimationFrame(draw);
  if (still && document.fonts && document.fonts.ready) document.fonts.ready.then(function () { draw(0); });
})();
