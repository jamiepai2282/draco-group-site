// 裝櫃試算：輸入單箱尺寸、重量、箱數，估算 20 呎、40 呎、40 呎高櫃哪一種裝得下
(function () {
  var TXT = {
    hant: { tabs: ['裝櫃試算', 'CBM 與棧板試算'], navTools: '小工具', navQuote: '線上詢價', toQuote: '帶著試算結果去詢價', tiles: [['WMS 線上查詢', '查庫存、單據與簽收'], ['裝櫃試算', '大櫃還是小櫃，算了就知道'], ['線上詢價', '填好貨物資料，取得報價']],
      m: { h2: '多種箱型一起算', lead: '逐列輸入每種箱型，加總體積、重量與所需棧板數。', name: '品名', l: '長', w: '寬', h: '高', wt: '單箱重 kg', qty: '箱數', add: '新增一列', del: '刪除', pal: '棧板尺寸 (cm)', maxH: '貨物堆疊限高 (cm)', maxW: '單板限重 (kg)', cartons: '總箱數', pallets: '所需棧板', byVol: '依體積估算，建議 {c}（以 85% 裝載率計）。', byVolMulti: '依體積估算，約需 {n} 個 40 呎高櫃（以 85% 裝載率計）。', perPal: '{name}：每板 {n} 箱，需 {p} 板', noPal: '{name}：尺寸或重量超過單一棧板', item: '品項 {i}', note: '棧板數以每種箱型各自打板估算，未計入混板；貨櫃建議只看總體積，實際仍須確認單件尺寸與重量。' },
      q: { h2: '線上詢價', lead: '填好下面的資料，我們會依你的貨物安排報價。', name: '聯絡人', company: '公司名稱', email: 'Email', phone: '電話', service: '需要的服務', from: '起運地', to: '目的地', cargo: '貨物內容', cartons: '件數', kg: '總毛重 (kg)', cbm: '總體積 (CBM)', note: '其他說明', submit: '產生詢價內容', req: '請填寫聯絡人、Email 或電話，以及起運地與目的地。', done: '這是網站初稿，表單還沒有連接收件信箱。下面是整理好的詢價內容，可以複製後寄給我們。', copy: '複製內容', copied: '已複製', title: '詢價單' },
      nav: '裝櫃試算', h2: '我的貨要用大櫃還是小櫃？', lead: '輸入單箱尺寸、重量與箱數，馬上估算需要的櫃型。',
      L: '長 (cm)', W: '寬 (cm)', H: '高 (cm)', wt: '單箱毛重 (kg)', qty: '箱數', up: '貨物不可倒置或側放',
      vol: '總體積', wgt: '總毛重', air: '空運材積重', chg: '空運計費重',
      names: ['20 呎櫃（小櫃）', '40 呎櫃（大櫃）', '40 呎高櫃'], fit: '最多約可裝 {n} 箱', volUse: '體積使用 {p}%', wtUse: '載重使用 {p}%',
      ok: '裝得下', no: '裝不下', over: '超重',
      rec: '建議使用 {c}。', lcl: '體積不到小櫃的一半，可以考慮併櫃（LCL），請洽詢報價比較。', multi: '一個 40 呎高櫃裝不下，約需 {n} 個 40 呎高櫃。',
      big: '單箱尺寸超過貨櫃內部尺寸，需要特種櫃或其他運送方式，請聯絡我們。', invalid: '請輸入大於 0 的尺寸、重量與箱數。',
      note: '試算以整齊堆疊的同尺寸紙箱估算，未計入棧板、墊材與裝卸空隙；載重以常見貨櫃限重計，實際以船公司與各地道路限重為準。',
      ask: '把貨物資料給我們，取得正式報價', card: ['裝櫃試算', '輸入箱數與尺寸，估算該用大櫃還是小櫃'] },
    hans: { tabs: ['装柜试算', 'CBM 与托盘试算'], navTools: '小工具', navQuote: '在线询价', toQuote: '带着试算结果去询价', tiles: [['WMS 在线查询', '查库存、单据与签收'], ['装柜试算', '大柜还是小柜，算了就知道'], ['在线询价', '填好货物资料，获取报价']],
      m: { h2: '多种箱型一起算', lead: '逐行输入每种箱型，汇总体积、重量与所需托盘数。', name: '品名', l: '长', w: '宽', h: '高', wt: '单箱重 kg', qty: '箱数', add: '新增一行', del: '删除', pal: '托盘尺寸 (cm)', maxH: '货物堆叠限高 (cm)', maxW: '单板限重 (kg)', cartons: '总箱数', pallets: '所需托盘', byVol: '按体积估算，建议 {c}（按 85% 装载率计）。', byVolMulti: '按体积估算，约需 {n} 个 40 尺高柜（按 85% 装载率计）。', perPal: '{name}：每板 {n} 箱，需 {p} 板', noPal: '{name}：尺寸或重量超过单个托盘', item: '品项 {i}', note: '托盘数按每种箱型各自打板估算，未计入混板；集装箱建议只看总体积，实际仍须确认单件尺寸与重量。' },
      q: { h2: '在线询价', lead: '填好下面的资料，我们会按你的货物安排报价。', name: '联系人', company: '公司名称', email: '邮箱', phone: '电话', service: '需要的服务', from: '起运地', to: '目的地', cargo: '货物内容', cartons: '件数', kg: '总毛重 (kg)', cbm: '总体积 (CBM)', note: '其他说明', submit: '生成询价内容', req: '请填写联系人、邮箱或电话，以及起运地与目的地。', done: '这是网站初稿，表单尚未连接收件邮箱。下面是整理好的询价内容，可以复制后发给我们。', copy: '复制内容', copied: '已复制', title: '询价单' },
      nav: '装柜试算', h2: '我的货要用大柜还是小柜？', lead: '输入单箱尺寸、重量与箱数，马上估算需要的柜型。',
      L: '长 (cm)', W: '宽 (cm)', H: '高 (cm)', wt: '单箱毛重 (kg)', qty: '箱数', up: '货物不可倒置或侧放',
      vol: '总体积', wgt: '总毛重', air: '空运体积重', chg: '空运计费重',
      names: ['20 尺柜（小柜）', '40 尺柜（大柜）', '40 尺高柜'], fit: '最多约可装 {n} 箱', volUse: '体积使用 {p}%', wtUse: '载重使用 {p}%',
      ok: '装得下', no: '装不下', over: '超重',
      rec: '建议使用 {c}。', lcl: '体积不到小柜的一半，可以考虑拼箱（LCL），请咨询报价比较。', multi: '一个 40 尺高柜装不下，约需 {n} 个 40 尺高柜。',
      big: '单箱尺寸超过集装箱内部尺寸，需要特种柜或其他运输方式，请联系我们。', invalid: '请输入大于 0 的尺寸、重量与箱数。',
      note: '试算按整齐堆叠的同尺寸纸箱估算，未计入托盘、垫材与装卸空隙；载重按常见集装箱限重计，实际以船公司与各地道路限重为准。',
      ask: '把货物资料给我们，获取正式报价', card: ['装柜试算', '输入箱数与尺寸，估算该用大柜还是小柜'] },
    en: { tabs: ['Container calculator', 'CBM and pallet calculator'], navTools: 'Tools', navQuote: 'Get a quote', toQuote: 'Use these figures in a quote request', tiles: [['WMS tracking', 'Stock, documents and proof of delivery'], ['Container calculator', 'Find out if you need a 20′ or a 40′'], ['Get a quote', 'Send your cargo details for a price']],
      m: { h2: 'Add up several carton sizes', lead: 'Enter each carton type on its own row to total the volume, weight and pallets needed.', name: 'Item', l: 'L', w: 'W', h: 'H', wt: 'kg per carton', qty: 'Cartons', add: 'Add a row', del: 'Remove', pal: 'Pallet size (cm)', maxH: 'Max stacking height of cargo (cm)', maxW: 'Max weight per pallet (kg)', cartons: 'Total cartons', pallets: 'Pallets needed', byVol: 'By volume, suggested: {c} (assuming 85% fill).', byVolMulti: 'By volume, you need about {n} 40′ HQ containers (assuming 85% fill).', perPal: '{name}: {n} cartons per pallet, {p} pallets', noPal: '{name}: too large or heavy for one pallet', item: 'Item {i}', note: 'Pallets are estimated per carton type, without mixing types on one pallet. The container suggestion looks at total volume only, so single-piece size and weight still need checking.' },
      q: { h2: 'Request a quote', lead: 'Fill in the details below and we will prepare a quote for your cargo.', name: 'Contact name', company: 'Company', email: 'Email', phone: 'Phone', service: 'Service needed', from: 'Origin', to: 'Destination', cargo: 'Cargo description', cartons: 'Pieces', kg: 'Total gross weight (kg)', cbm: 'Total volume (CBM)', note: 'Other notes', submit: 'Create quote request', req: 'Please enter a contact name, an email or phone number, and the origin and destination.', done: 'This is a draft of the website and the form is not yet connected to an inbox. Here is your request, ready to copy and send to us.', copy: 'Copy', copied: 'Copied', title: 'Quote request' },
      nav: 'Container calculator', h2: 'Does my cargo need a 20-foot or a 40-foot container?', lead: 'Enter the carton size, weight and quantity to estimate the container you need.',
      L: 'Length (cm)', W: 'Width (cm)', H: 'Height (cm)', wt: 'Gross weight per carton (kg)', qty: 'Number of cartons', up: 'This side up (cannot be tipped or laid on its side)',
      vol: 'Total volume', wgt: 'Total gross weight', air: 'Air volumetric weight', chg: 'Air chargeable weight',
      names: ['20′ GP', '40′ GP', '40′ HQ'], fit: 'Holds about {n} cartons', volUse: 'Volume used {p}%', wtUse: 'Payload used {p}%',
      ok: 'Fits', no: 'Does not fit', over: 'Over weight',
      rec: 'Suggested: {c}.', lcl: 'The volume is less than half a 20-foot container, so LCL may be worth comparing. Ask us for a quote.', multi: 'One 40′ HQ is not enough. You need about {n} 40′ HQ containers.',
      big: 'One carton is larger than the inside of a standard container. It needs special equipment or another mode, so please contact us.', invalid: 'Enter a size, weight and quantity greater than zero.',
      note: 'This estimate assumes identical cartons stacked neatly. It does not allow for pallets, dunnage or loading gaps. Payload uses typical container limits; the carrier and local road limits decide the real figure.',
      ask: 'Send us your cargo details for a formal quote', card: ['Container calculator', 'Enter carton size and quantity to estimate the container you need'] },
    th: { tabs: ['คำนวณตู้สินค้า', 'คำนวณ CBM และพาเลต'], navTools: 'เครื่องมือ', navQuote: 'ขอใบเสนอราคา', toQuote: 'นำผลคำนวณไปขอใบเสนอราคา', tiles: [['ตรวจสอบ WMS', 'สต็อก เอกสาร และใบเซ็นรับ'], ['คำนวณตู้สินค้า', 'ดูว่าต้องใช้ตู้ 20 หรือ 40 ฟุต'], ['ขอใบเสนอราคา', 'ส่งรายละเอียดสินค้าเพื่อรับราคา']],
      m: { h2: 'คำนวณหลายขนาดกล่องพร้อมกัน', lead: 'กรอกกล่องแต่ละขนาดทีละแถว เพื่อรวมปริมาตร น้ำหนัก และจำนวนพาเลตที่ต้องใช้', name: 'รายการ', l: 'ยาว', w: 'กว้าง', h: 'สูง', wt: 'กก./กล่อง', qty: 'กล่อง', add: 'เพิ่มแถว', del: 'ลบ', pal: 'ขนาดพาเลต (ซม.)', maxH: 'ความสูงซ้อนสินค้าสูงสุด (ซม.)', maxW: 'น้ำหนักสูงสุดต่อพาเลต (กก.)', cartons: 'จำนวนกล่องรวม', pallets: 'พาเลตที่ต้องใช้', byVol: 'ประเมินตามปริมาตร แนะนำ: {c} (คิดอัตราบรรจุ 85%)', byVolMulti: 'ประเมินตามปริมาตร ต้องใช้ตู้ 40 ฟุต ไฮคิวบ์ประมาณ {n} ตู้ (คิดอัตราบรรจุ 85%)', perPal: '{name}: {n} กล่องต่อพาเลต ใช้ {p} พาเลต', noPal: '{name}: ขนาดหรือน้ำหนักเกินหนึ่งพาเลต', item: 'รายการ {i}', note: 'จำนวนพาเลตประเมินแยกตามขนาดกล่อง ไม่รวมการวางคละ คำแนะนำตู้ดูจากปริมาตรรวมเท่านั้น ยังต้องตรวจขนาดและน้ำหนักต่อชิ้น' },
      q: { h2: 'ขอใบเสนอราคา', lead: 'กรอกรายละเอียดด้านล่าง เราจะจัดทำใบเสนอราคาสำหรับสินค้าของคุณ', name: 'ชื่อผู้ติดต่อ', company: 'บริษัท', email: 'อีเมล', phone: 'โทรศัพท์', service: 'บริการที่ต้องการ', from: 'ต้นทาง', to: 'ปลายทาง', cargo: 'รายละเอียดสินค้า', cartons: 'จำนวน', kg: 'น้ำหนักรวม (กก.)', cbm: 'ปริมาตรรวม (CBM)', note: 'หมายเหตุอื่น', submit: 'สร้างคำขอใบเสนอราคา', req: 'กรุณากรอกชื่อผู้ติดต่อ อีเมลหรือโทรศัพท์ และต้นทางกับปลายทาง', done: 'นี่คือเว็บไซต์ฉบับร่าง แบบฟอร์มยังไม่ได้เชื่อมต่อกับอีเมลรับเรื่อง ด้านล่างคือคำขอของคุณ คัดลอกแล้วส่งให้เราได้', copy: 'คัดลอก', copied: 'คัดลอกแล้ว', title: 'คำขอใบเสนอราคา' },
      nav: 'คำนวณตู้สินค้า', h2: 'สินค้าของฉันต้องใช้ตู้ 20 ฟุตหรือ 40 ฟุต?', lead: 'กรอกขนาดกล่อง น้ำหนัก และจำนวน เพื่อประเมินขนาดตู้ที่ต้องใช้',
      L: 'ยาว (ซม.)', W: 'กว้าง (ซม.)', H: 'สูง (ซม.)', wt: 'น้ำหนักรวมต่อกล่อง (กก.)', qty: 'จำนวนกล่อง', up: 'ห้ามคว่ำหรือวางตะแคง',
      vol: 'ปริมาตรรวม', wgt: 'น้ำหนักรวม', air: 'น้ำหนักปริมาตรทางอากาศ', chg: 'น้ำหนักคิดค่าระวางทางอากาศ',
      names: ['ตู้ 20 ฟุต', 'ตู้ 40 ฟุต', 'ตู้ 40 ฟุต ไฮคิวบ์'], fit: 'บรรจุได้ประมาณ {n} กล่อง', volUse: 'ใช้ปริมาตร {p}%', wtUse: 'ใช้น้ำหนักบรรทุก {p}%',
      ok: 'บรรจุได้', no: 'บรรจุไม่พอ', over: 'น้ำหนักเกิน',
      rec: 'แนะนำ: {c}', lcl: 'ปริมาตรไม่ถึงครึ่งตู้ 20 ฟุต ลองเปรียบเทียบกับ LCL ได้ สอบถามราคาจากเรา', multi: 'ตู้ 40 ฟุต ไฮคิวบ์ 1 ตู้ไม่พอ ต้องใช้ประมาณ {n} ตู้',
      big: 'ขนาดกล่องใหญ่กว่าภายในตู้มาตรฐาน ต้องใช้ตู้พิเศษหรือวิธีขนส่งอื่น โปรดติดต่อเรา', invalid: 'กรุณากรอกขนาด น้ำหนัก และจำนวนที่มากกว่า 0',
      note: 'การประเมินนี้คิดจากกล่องขนาดเดียวกันที่เรียงซ้อนเรียบร้อย ไม่รวมพาเลต วัสดุกันกระแทก และช่องว่างในการขนถ่าย น้ำหนักบรรทุกใช้ค่าทั่วไปของตู้ น้ำหนักจริงขึ้นกับสายเรือและข้อจำกัดถนนในแต่ละพื้นที่',
      ask: 'ส่งรายละเอียดสินค้าให้เราเพื่อรับใบเสนอราคา', card: ['คำนวณตู้สินค้า', 'กรอกขนาดและจำนวนกล่องเพื่อประเมินขนาดตู้'] }
  };
  // 常見乾貨櫃內部尺寸 (cm)、容積 (CBM)、載重 (kg)
  var BOX = [
    { L: 589.8, W: 235.2, H: 239.3, cbm: 33.2, pay: 28200 },
    { L: 1203.2, W: 235.2, H: 239.3, cbm: 67.7, pay: 26700 },
    { L: 1203.2, W: 235.2, H: 269.8, cbm: 76.3, pay: 26500 }
  ];
  var X = TXT.hant;
  function $(id) { return document.getElementById(id); }
  function el(tag, text, cls) { var e = document.createElement(tag); if (text != null) e.textContent = text; if (cls) e.className = cls; return e; }
  function num(n, d) { return n.toLocaleString('en-US', { maximumFractionDigits: d == null ? 0 : d, minimumFractionDigits: d || 0 }); }

  // 一層最多幾箱：把櫃底切成兩區，兩區各用一種擺向（直放或橫放），取最多的切法
  function layer(L, W, a, b) {
    var best = 0, i, n;
    for (i = 0; i <= Math.floor(L / a); i++) { n = i * Math.floor(W / b) + Math.floor((L - i * a) / b) * Math.floor(W / a); if (n > best) best = n; }
    for (i = 0; i <= Math.floor(W / b); i++) { n = i * Math.floor(L / a) + Math.floor((W - i * b) / a) * Math.floor(L / b); if (n > best) best = n; }
    return best;
  }
  // 可倒置時，三個邊都試著當高度
  function fitCount(c, l, w, h, upright) {
    var o = upright ? [[l, w, h]] : [[l, w, h], [l, h, w], [w, h, l]], best = 0;
    o.forEach(function (d) { var n = Math.floor(c.H / d[2]) * Math.max(layer(c.L, c.W, d[0], d[1]), layer(c.L, c.W, d[1], d[0])); if (n > best) best = n; });
    return best;
  }
  function estimate(l, w, h, wt, qty, upright) {
    var cbm = l * w * h / 1e6 * qty, kg = wt * qty, volKg = l * w * h / 6000 * qty;
    var rows = BOX.map(function (c) {
      var n = fitCount(c, l, w, h, upright), over = kg > c.pay;
      return { fit: n, cap: Math.min(n, Math.floor(c.pay / wt)), vol: cbm / c.cbm, wt: kg / c.pay, state: qty > n ? 'no' : over ? 'over' : 'ok' };
    });
    var pick = -1; rows.forEach(function (r, i) { if (pick < 0 && r.state === 'ok') pick = i; });
    return { cbm: cbm, kg: kg, volKg: volKg, chg: Math.max(kg, volKg), rows: rows, pick: pick, lcl: cbm < BOX[0].cbm / 2, big: rows[2].fit === 0, need: rows[2].cap > 0 ? Math.ceil(qty / rows[2].cap) : 0 };
  }
  window.dracoEstimate = estimate;

  var last = null;   // 最近一次試算結果，可帶去詢價單
  function calc() {
    var out = $('toolOut'); if (!out) return;
    var l = +$('t-l').value, w = +$('t-w').value, h = +$('t-h').value, wt = +$('t-wt').value, qty = Math.floor(+$('t-qty').value), up = $('t-up').checked;
    out.textContent = '';
    if (!(l > 0 && w > 0 && h > 0 && wt > 0 && qty > 0)) { out.appendChild(el('p', X.invalid, 'verdict warn')); return; }
    var r = estimate(l, w, h, wt, qty, up);
    last = { cartons: qty, kg: r.kg, cbm: r.cbm };
    var v = r.big ? X.big : r.pick >= 0 ? X.rec.replace('{c}', X.names[r.pick]) : X.multi.replace('{n}', num(r.need));
    out.appendChild(el('p', v, 'verdict' + (r.pick >= 0 ? '' : ' warn')));
    if (r.lcl && !r.big) out.appendChild(el('p', X.lcl, 'hint'));
    out.appendChild(totals([[X.vol, num(r.cbm, 2) + ' CBM'], [X.wgt, num(r.kg) + ' kg'], [X.air, num(r.volKg) + ' kg'], [X.chg, num(r.chg) + ' kg']]));
    r.rows.forEach(function (row, i) {
      var c = BOX[i], box = el('div', null, 'cbox ' + row.state + (i === r.pick ? ' pick' : '')), top = el('div', null, 'cbox-top');
      top.appendChild(el('b', X.names[i])); top.appendChild(el('span', X[row.state], 'pill'));
      box.appendChild(top);
      box.appendChild(el('div', (c.L / 100).toFixed(2) + ' × ' + (c.W / 100).toFixed(2) + ' × ' + (c.H / 100).toFixed(2) + ' m · ' + c.cbm + ' CBM · ' + num(c.pay) + ' kg', 'cspec'));
      box.appendChild(el('div', X.fit.replace('{n}', num(row.fit)), 'cfit'));
      [[X.volUse, row.vol], [X.wtUse, row.wt]].forEach(function (b) {
        var wrap = el('div', null, 'ubar'), fill = el('i'); fill.style.width = Math.min(100, b[1] * 100) + '%'; if (b[1] > 1) fill.className = 'full';
        wrap.appendChild(fill); box.appendChild(el('div', b[0].replace('{p}', num(b[1] * 100)), 'blabel')); box.appendChild(wrap);
      });
      out.appendChild(box);
    });
  }
  function totals(pairs) {
    var tot = el('dl', null, 'totals');
    pairs.forEach(function (p) { var d = el('div'); d.appendChild(el('dt', p[0])); d.appendChild(el('dd', p[1])); tot.appendChild(d); });
    return tot;
  }

  // 多品項 CBM 與棧板試算
  var rows = [{ n: '', l: 60, w: 40, h: 40, wt: 15, q: 120 }, { n: '', l: 45, w: 35, h: 30, wt: 8, q: 200 }];
  var PAL = [[120, 100], [120, 80], [110, 110]];
  function multi(items, pal, maxH, maxW) {
    var cartons = 0, cbm = 0, kg = 0, pallets = 0, lines = [];
    items.forEach(function (it) {
      if (!(it.l > 0 && it.w > 0 && it.h > 0 && it.wt > 0 && it.q > 0)) return;
      var q = Math.floor(it.q); cartons += q; cbm += it.l * it.w * it.h / 1e6 * q; kg += it.wt * q;
      var per = Math.max(layer(pal[0], pal[1], it.l, it.w), layer(pal[0], pal[1], it.w, it.l)) * Math.floor(maxH / it.h);
      per = Math.min(per, Math.floor(maxW / it.wt));
      var p = per > 0 ? Math.ceil(q / per) : 0; pallets += p; lines.push({ name: it.n, per: per, p: p });
    });
    var cap = BOX.map(function (c) { return c.cbm * .85; }), pick = -1;
    cap.forEach(function (c, i) { if (pick < 0 && cbm <= c && kg <= BOX[i].pay) pick = i; });
    return { cartons: cartons, cbm: cbm, kg: kg, volKg: cbm * 1e6 / 6000, pallets: pallets, lines: lines, pick: pick, need: Math.max(Math.ceil(cbm / cap[2]), Math.ceil(kg / BOX[2].pay)) };
  }
  window.dracoMulti = multi;
  function calcMulti() {
    var out = $('multiOut'); if (!out) return;
    var M = X.m, pal = PAL[+$('m-pal').value] || PAL[0], maxH = +$('m-maxh').value, maxW = +$('m-maxw').value;
    out.textContent = '';
    var items = rows.map(function (r, i) { return { n: r.n || M.item.replace('{i}', i + 1), l: +r.l, w: +r.w, h: +r.h, wt: +r.wt, q: +r.q }; });
    var r = multi(items, pal, maxH > 0 ? maxH : 0, maxW > 0 ? maxW : 0);
    if (!r.cartons) { out.appendChild(el('p', X.invalid, 'verdict warn')); return; }
    last = { cartons: r.cartons, kg: r.kg, cbm: r.cbm };
    out.appendChild(el('p', r.pick >= 0 ? M.byVol.replace('{c}', X.names[r.pick]) : M.byVolMulti.replace('{n}', num(r.need)), 'verdict' + (r.pick >= 0 ? '' : ' warn')));
    out.appendChild(totals([[M.cartons, num(r.cartons)], [X.vol, num(r.cbm, 2) + ' CBM'], [X.wgt, num(r.kg) + ' kg'], [M.pallets, num(r.pallets)], [X.chg, num(Math.max(r.kg, r.volKg)) + ' kg']]));
    var ul = el('ul', null, 'pal-lines');
    r.lines.forEach(function (ln) { ul.appendChild(el('li', (ln.per > 0 ? M.perPal : M.noPal).replace('{name}', ln.name).replace('{n}', num(ln.per)).replace('{p}', num(ln.p)))); });
    out.appendChild(ul);
  }
  function drawRows() {
    var box = $('multiRows'); if (!box) return; var M = X.m; box.textContent = '';
    var head = el('div', null, 'mrow mhead');
    [M.name, M.l, M.w, M.h, M.wt, M.qty, ''].forEach(function (t) { head.appendChild(el('span', t)); });
    box.appendChild(head);
    rows.forEach(function (r, i) {
      var row = el('div', null, 'mrow');
      [['n', 'text', M.name], ['l', 'number', M.l], ['w', 'number', M.w], ['h', 'number', M.h], ['wt', 'number', M.wt], ['q', 'number', M.qty]].forEach(function (f) {
        var inp = el('input'); inp.type = f[1]; inp.value = r[f[0]]; inp.id = 'm-' + f[0] + '-' + i; inp.setAttribute('aria-label', f[2] + ' ' + (i + 1));
        if (f[1] === 'number') { inp.min = '0'; inp.step = 'any'; inp.inputMode = 'decimal'; } else inp.placeholder = M.item.replace('{i}', i + 1);
        inp.addEventListener('input', function () { r[f[0]] = inp.value; calcMulti(); });
        row.appendChild(inp);
      });
      var del = el('button', '×', 'mdel'); del.type = 'button'; del.setAttribute('aria-label', M.del + ' ' + (i + 1)); del.disabled = rows.length < 2;
      del.addEventListener('click', function () { rows.splice(i, 1); drawRows(); calcMulti(); });
      row.appendChild(del); box.appendChild(row);
    });
  }

  // 工具分頁
  var tab = 0;
  function showTab(i) {
    tab = i;
    ['toolPane0', 'toolPane1'].forEach(function (id, k) { var p = $(id); if (p) p.hidden = k !== i; });
    ['toolTab0', 'toolTab1'].forEach(function (id, k) { var b = $(id); if (b) b.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
    if (i === 0) calc(); else calcMulti();
  }

  // 線上詢價：初稿尚未連接收件信箱，送出後整理成文字供複製
  var QF = ['name', 'company', 'email', 'phone', 'service', 'from', 'to', 'cargo', 'cartons', 'kg', 'cbm', 'note'];
  function fillQuote() {
    if (!last) return;
    $('q-cartons').value = last.cartons; $('q-kg').value = Math.round(last.kg); $('q-cbm').value = last.cbm.toFixed(2);
  }
  function submitQuote(e) {
    e.preventDefault();
    var Q = X.q, v = {}; QF.forEach(function (k) { v[k] = ($('q-' + k).value || '').trim(); });
    var msg = $('quoteMsg'), res = $('quoteResult');
    if (!v.name || !(v.email || v.phone) || !v.from || !v.to) { msg.textContent = Q.req; res.hidden = true; return; }
    var lines = [Q.title + ' — DRACO GROUP'];
    QF.forEach(function (k) { if (v[k]) lines.push(Q[k] + '：' + v[k]); });
    msg.textContent = Q.done; $('quoteText').value = lines.join('\n'); res.hidden = false; $('quoteCopy').textContent = Q.copy;
  }

  window.renderTool = function (lang, modes) {
    X = TXT[lang] || TXT.hant;
    if (!$('toolOut')) return X;
    var M = X.m, Q = X.q, set = function (id, t) { var n = $(id); if (n) n.textContent = t; };
    set('toolH2', X.h2); set('toolLead', X.lead); set('toolNote', X.note); set('toolAsk', X.toQuote); set('toolAsk2', X.toQuote);
    set('toolTab0', X.tabs[0]); set('toolTab1', X.tabs[1]);
    [['t-l', X.L], ['t-w', X.W], ['t-h', X.H], ['t-wt', X.wt], ['t-qty', X.qty], ['t-up', X.up], ['m-pal', M.pal], ['m-maxh', M.maxH], ['m-maxw', M.maxW]].forEach(function (p) { document.querySelector('label[for="' + p[0] + '"]').textContent = p[1]; });
    set('multiH3', M.h2); set('multiLead', M.lead); set('multiAdd', '＋ ' + M.add); set('multiNote', M.note);
    set('quoteH2', Q.h2); set('quoteLead', Q.lead); set('quoteSubmit', Q.submit);
    QF.forEach(function (k) { document.querySelector('label[for="q-' + k + '"]').textContent = Q[k]; });
    var sel = $('q-service'), keep = sel.selectedIndex; sel.textContent = '';
    (modes || []).forEach(function (m) { var o = el('option', m); o.value = m; sel.appendChild(o); }); sel.selectedIndex = keep < 0 ? 0 : keep;
    if (!$('quoteResult').hidden) { $('quoteResult').hidden = true; set('quoteMsg', ''); }
    drawRows(); showTab(tab);
    return X;
  };

  document.addEventListener('input', function (e) {
    var id = e.target && e.target.id || '';
    if (id.indexOf('t-') === 0) calc();
    if (id === 'm-pal' || id === 'm-maxh' || id === 'm-maxw') calcMulti();
  });
  document.addEventListener('click', function (e) {
    var id = e.target && e.target.id || '';
    if (id === 'toolTab0') showTab(0);
    if (id === 'toolTab1') showTab(1);
    if (id === 'multiAdd') { rows.push({ n: '', l: '', w: '', h: '', wt: '', q: '' }); drawRows(); calcMulti(); }
    if (id === 'toolAsk' || id === 'toolAsk2') fillQuote();
    if (id === 'quoteCopy') {
      var t = $('quoteText'), b = $('quoteCopy');
      try { navigator.clipboard.writeText(t.value).then(function () { b.textContent = X.q.copied; }, function () { t.select(); }); } catch (err) { t.select(); }
    }
  });
  document.addEventListener('submit', function (e) { if (e.target && e.target.id === 'quoteForm') submitQuote(e); });
})();
