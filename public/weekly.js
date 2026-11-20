// 登泰週報：讀取 weekly/index.json 的期數清單，把選定那一期的 HTML 嵌進本頁顯示。
// 新增一期的做法：把週報 HTML 放進 weekly/ 資料夾，並在 weekly/index.json 最上面加一筆。
(function () {
  var TXT = {
    hant: { nav: '登泰週報', h2: '登泰週報', lead: '每週整理航線、運價、艙位與通關動態。', only: '', load: '載入中…', fail: '週報載入失敗，請用下方連結開啟。', open: '在新分頁開啟這一期', card: ['登泰週報', '每週航線、運價與艙位動態'] },
    hans: { nav: '登泰周报', h2: '登泰周报', lead: '每周整理航线、运价、舱位与通关动态。', only: '周报目前仅提供繁体中文版。', load: '加载中…', fail: '周报加载失败，请用下方链接打开。', open: '在新标签页打开这一期', card: ['登泰周报', '每周航线、运价与舱位动态'] },
    en: { nav: 'Weekly report', h2: 'Draco weekly report', lead: 'Routes, rates, space and customs updates, every week.', only: 'The weekly report is currently published in Traditional Chinese only.', load: 'Loading…', fail: 'The report could not be loaded. Use the link below to open it.', open: 'Open this issue in a new tab', card: ['Weekly report', 'Routes, rates and space, updated weekly'] },
    th: { nav: 'รายงานประจำสัปดาห์', h2: 'รายงานประจำสัปดาห์ของ Draco', lead: 'สรุปเส้นทาง ค่าระวาง พื้นที่ระวาง และข่าวศุลกากรทุกสัปดาห์', only: 'ขณะนี้รายงานประจำสัปดาห์มีเฉพาะภาษาจีนตัวเต็ม', load: 'กำลังโหลด…', fail: 'โหลดรายงานไม่สำเร็จ โปรดเปิดจากลิงก์ด้านล่าง', open: 'เปิดฉบับนี้ในแท็บใหม่', card: ['รายงานประจำสัปดาห์', 'เส้นทาง ค่าระวาง และพื้นที่ระวาง อัปเดตทุกสัปดาห์'] }
  };
  var X = TXT.hant, issues = null, current = null, started = false;
  function $(id) { return document.getElementById(id); }

  // 週報裡各區塊的收合按鈕會呼叫這個函式
  window.tog = function (hd) { var bd = hd.nextElementSibling; if (!bd) return; var hidden = bd.classList.toggle('hide'); hd.classList.toggle('closed', hidden); };

  function show(issue) {
    current = issue;
    var host = $('weeklyHost'), msg = $('weeklyMsg'), open = $('weeklyOpen');
    open.href = 'weekly/' + issue.file; open.hidden = false;
    [].forEach.call(document.querySelectorAll('#weeklyIssues button'), function (b) { b.setAttribute('aria-pressed', b.dataset.id === issue.id ? 'true' : 'false'); });
    msg.textContent = X.load;
    fetch('weekly/' + issue.file).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, 'text/html');
      var css = [].map.call(doc.querySelectorAll('style'), function (s) { return s.textContent; }).join('\n')
        .replace(/:root\s*\{/g, ':host{').replace(/(^|\})\s*body\s*\{/g, '$1.wk-body{');
      [].forEach.call(doc.querySelectorAll('script'), function (s) { s.parentNode.removeChild(s); });
      var root = host.shadowRoot || host.attachShadow({ mode: 'open' });
      root.innerHTML = '<style>:host{display:block}' + css + '</style><div class="wk-body">' + doc.body.innerHTML + '</div>';
      msg.textContent = '';
    }).catch(function () { msg.textContent = X.fail; });
  }
  function start() {
    if (started) return; started = true;
    $('weeklyMsg').textContent = X.load;
    fetch('weekly/index.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); }).then(function (list) {
      issues = list; var box = $('weeklyIssues'); box.textContent = '';
      list.forEach(function (it) {
        var b = document.createElement('button'); b.type = 'button'; b.className = 'chip'; b.dataset.id = it.id; b.textContent = it.week + '　' + it.date;
        b.addEventListener('click', function () { show(it); }); box.appendChild(b);
      });
      if (list.length) show(list[0]);
    }).catch(function () { started = false; $('weeklyMsg').textContent = X.fail; });
  }
  window.renderWeekly = function (lang) {
    X = TXT[lang] || TXT.hant;
    if ($('weeklyH2')) { $('weeklyH2').textContent = X.h2; $('weeklyLead').textContent = X.lead; $('weeklyOnly').textContent = X.only; $('weeklyOpen').textContent = X.open; }
    return X;
  };
  function check() { if (location.hash === '#weekly') start(); }
  window.addEventListener('hashchange', check); check();
})();
