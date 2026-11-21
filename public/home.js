// 首頁：開場影片 + 查詢中心（四語系）
(function () {
  var TXT = {
    hant: {
      scenes: ['碼頭作業', '海運', '空運', '倉儲', '運輸'], skip: '略過', reel: '開場影片',
      h1: '要查什麼，<br>從這裡開始。', lead: '貨櫃動態、船期、庫存、裝櫃試算與詢價，一個入口全部處理。',
      hk: '香港', kh: '高雄', more: '其他據點',
      tabs: ['貨櫃追蹤', '船期查詢', 'DRACO ONE', '裝櫃試算', '線上詢價'],
      tr: { h: '輸入櫃號，看貨在哪裡', label: '貨櫃號碼', ph: '例如 CSQU3054383', btn: '查詢', note: '目前會檢查櫃號是否正確、辨識船公司並帶你到官網查詢；即時動態串接後會直接顯示在這裡。', bad: '櫃號格式是 4 個英文字母加 7 個數字，例如 CSQU3054383。', ok: '櫃號正確', chk: '檢查碼不符，請再核對一次', owner: '箱主代碼', carrier: '船公司', unknown: '未能辨識，可能是租賃櫃', go: '到 {n} 官網查詢動態', ask: '可以把櫃號交給我們的客服代查。' },
      sc: { h: '查船期', pol: '起運港', pod: '目的港', podPh: '例如 洛杉磯', wk: '預計出貨週', btn: '查詢船期', note: '船期資料庫串接中，這版還不會即時列出班次。先把需求給業務，會回覆可訂的船期與截關時間。', title: '船期查詢', empty: '（未填）', to: ' 到 ', ports: ['香港', '深圳鹽田', '深圳蛇口', '廣州南沙', '高雄', '台中', '胡志明市', '林查班'] },
      one: { h: 'DRACO ONE 客戶專區', p: '登泰的倉儲管理系統。登入後可以看到：', list: ['即時庫存，板、箱、件三層', '入庫與出庫紀錄、單據下載', '入庫照片與異常紀錄', '派送簽收單'], login: '登入 DRACO ONE', apply: '申請帳號', pending: '登入網址待提供' },
      ca: { h: '大櫃還是小櫃？先算一下', l: ['長 cm', '寬 cm', '高 cm', '單箱 kg', '箱數'], note: '以體積 85% 裝載率粗估；完整的逐層堆疊試算在「線上試算」頁。', pick: '建議用{n}。', over: '超過一個 40 呎高櫃，需要分櫃或改走併櫃。', cbm: '總體積', kg: '總毛重', fit: '裝得下，體積約用 {p}%', nofit: '裝不下', box: ['20 呎櫃', '40 呎櫃', '40 呎高櫃'] },
      qu: { h: '告訴我們要運什麼', svc: '服務', svcs: ['海運', '空運', '陸運', '倉儲', '報關'], from: '起運地', fromPh: '例如 東莞', to: '目的地', toPh: '例如 紐約', vol: '貨量', volPh: '例如 1 x 40HQ，或 12 CBM / 3,000 kg', who: '聯絡人與電話或 Email', whoPh: '例如 王小姐 0912-345-678', btn: '產生詢價內容', done: '詢價內容已整理好', title: '線上詢價', note: '詢價信箱串接後，按一下就會直接送出。' },
      copy: '複製內容', copied: '已複製', manual: '請手動複製',
      svH: '一個窗口，走完全程', svP: '海空陸倉關由同一個團隊安排，從起運到交貨不用在幾家公司之間來回確認。',
      svD: ['整櫃、併櫃、門到門、海鐵聯運', '國際快遞、門到門、海空聯運', '拖卡、東南亞跨境卡車、中歐班列', '一般倉、保稅倉、集貨轉運', '自有報關行，AEO 認證'],
      road: '門到門，一路接到底', roadP: '拖卡、跨境卡車與倉庫配送，同一個團隊安排。', roadAlt: '登泰貨車在公路上行駛',
      whH: '自己的倉，自己的人', whP: '香港、東莞、泰國的倉庫都由集團營運，庫存到件可在 DRACO ONE 查。',
      wh: [['香港倉', '42,600 平方呎'], ['東莞保稅倉', '1,300 m²'], ['東莞普通倉', '1,550 m²']], more2: '看全部倉儲據點', read: '閱讀最新一期'
    },
    hans: {
      scenes: ['码头作业', '海运', '空运', '仓储', '运输'], skip: '跳过', reel: '开场影片',
      h1: '要查什么，<br>从这里开始。', lead: '货柜动态、船期、库存、装柜试算与询价，一个入口全部处理。',
      hk: '香港', kh: '高雄', more: '其他据点',
      tabs: ['货柜追踪', '船期查询', 'DRACO ONE', '装柜试算', '在线询价'],
      tr: { h: '输入柜号，看货在哪里', label: '货柜号码', ph: '例如 CSQU3054383', btn: '查询', note: '目前会检查柜号是否正确、识别船公司并带你到官网查询；实时动态对接后会直接显示在这里。', bad: '柜号格式是 4 个英文字母加 7 个数字，例如 CSQU3054383。', ok: '柜号正确', chk: '校验码不符，请再核对一次', owner: '箱主代码', carrier: '船公司', unknown: '未能识别，可能是租赁柜', go: '到 {n} 官网查询动态', ask: '可以把柜号交给我们的客服代查。' },
      sc: { h: '查船期', pol: '起运港', pod: '目的港', podPh: '例如 洛杉矶', wk: '预计出货周', btn: '查询船期', note: '船期数据库对接中，这版还不会实时列出班次。先把需求给业务，会回复可订的船期与截关时间。', title: '船期查询', empty: '（未填）', to: ' 到 ', ports: ['香港', '深圳盐田', '深圳蛇口', '广州南沙', '高雄', '台中', '胡志明市', '林查班'] },
      one: { h: 'DRACO ONE 客户专区', p: '登泰的仓储管理系统。登录后可以看到：', list: ['实时库存，板、箱、件三层', '入库与出库记录、单据下载', '入库照片与异常记录', '派送签收单'], login: '登录 DRACO ONE', apply: '申请账号', pending: '登录网址待提供' },
      ca: { h: '大柜还是小柜？先算一下', l: ['长 cm', '宽 cm', '高 cm', '单箱 kg', '箱数'], note: '以体积 85% 装载率粗估；完整的逐层堆叠试算在“在线试算”页。', pick: '建议用{n}。', over: '超过一个 40 尺高柜，需要分柜或改走拼柜。', cbm: '总体积', kg: '总毛重', fit: '装得下，体积约用 {p}%', nofit: '装不下', box: ['20 尺柜', '40 尺柜', '40 尺高柜'] },
      qu: { h: '告诉我们要运什么', svc: '服务', svcs: ['海运', '空运', '陆运', '仓储', '报关'], from: '起运地', fromPh: '例如 东莞', to: '目的地', toPh: '例如 纽约', vol: '货量', volPh: '例如 1 x 40HQ，或 12 CBM / 3,000 kg', who: '联系人与电话或 Email', whoPh: '例如 王小姐 138-0000-0000', btn: '生成询价内容', done: '询价内容已整理好', title: '在线询价', note: '询价邮箱对接后，按一下就会直接发送。' },
      copy: '复制内容', copied: '已复制', manual: '请手动复制',
      svH: '一个窗口，走完全程', svP: '海空陆仓关由同一个团队安排，从起运到交货不用在几家公司之间来回确认。',
      svD: ['整柜、拼柜、门到门、海铁联运', '国际快递、门到门、海空联运', '拖卡、东南亚跨境卡车、中欧班列', '一般仓、保税仓、集货转运', '自有报关行，AEO 认证'],
      road: '门到门，一路接到底', roadP: '拖卡、跨境卡车与仓库配送，同一个团队安排。', roadAlt: '登泰货车在公路上行驶',
      whH: '自己的仓，自己的人', whP: '香港、东莞、泰国的仓库都由集团运营，库存到件可在 DRACO ONE 查。',
      wh: [['香港仓', '42,600 平方尺'], ['东莞保税仓', '1,300 m²'], ['东莞普通仓', '1,550 m²']], more2: '看全部仓储据点', read: '阅读最新一期'
    },
    en: {
      scenes: ['Port operations', 'Ocean freight', 'Air freight', 'Warehousing', 'Trucking'], skip: 'Skip', reel: 'Opening film',
      h1: 'What do you need<br>to check today?', lead: 'Container status, sailings, inventory, load planning and quotes, all from one place.',
      hk: 'Hong Kong', kh: 'Kaohsiung', more: 'All offices',
      tabs: ['Track a container', 'Sailings', 'DRACO ONE', 'Load calculator', 'Get a quote'],
      tr: { h: 'Enter a container number', label: 'Container number', ph: 'e.g. CSQU3054383', btn: 'Track', note: 'For now we check the number, identify the carrier and take you to its tracking page. Live status will appear here once connected.', bad: 'A container number is 4 letters and 7 digits, e.g. CSQU3054383.', ok: 'is a valid number', chk: 'check digit does not match, please check again', owner: 'Owner code', carrier: 'Carrier', unknown: 'Not recognised, possibly a leased container', go: 'Track on the {n} website', ask: 'Send the number to our customer service and we will check it for you.' },
      sc: { h: 'Sailing schedules', pol: 'Port of loading', pod: 'Port of discharge', podPh: 'e.g. Los Angeles', wk: 'Planned ship week', btn: 'Find sailings', note: 'The schedule database is being connected, so sailings are not listed live yet. Send us the request and sales will reply with bookable sailings and cut-offs.', title: 'Sailing schedule request', empty: '(not given)', to: ' to ', ports: ['Hong Kong', 'Shenzhen Yantian', 'Shenzhen Shekou', 'Guangzhou Nansha', 'Kaohsiung', 'Taichung', 'Ho Chi Minh City', 'Laem Chabang'] },
      one: { h: 'DRACO ONE customer area', p: 'Our warehouse management system. Once signed in you can see:', list: ['Live inventory by pallet, carton and piece', 'Inbound and outbound records and documents', 'Receiving photos and exception records', 'Proof of delivery'], login: 'Sign in to DRACO ONE', apply: 'Request an account', pending: 'Sign-in address to be added' },
      ca: { h: '20 ft or 40 ft? Work it out first', l: ['Length cm', 'Width cm', 'Height cm', 'kg per carton', 'Cartons'], note: 'A rough estimate at 85% volume loading. The full layer-by-layer calculator is on the Calculators page.', pick: 'Use a {n}.', over: 'More than one 40 ft high cube: split the load or ship it as LCL.', cbm: 'Total volume', kg: 'Total weight', fit: 'Fits, about {p}% of the volume', nofit: 'Does not fit', box: ['20 ft container', '40 ft container', '40 ft high cube'] },
      qu: { h: 'Tell us what you are shipping', svc: 'Service', svcs: ['Ocean freight', 'Air freight', 'Land transport', 'Warehousing', 'Customs'], from: 'From', fromPh: 'e.g. Dongguan', to: 'To', toPh: 'e.g. New York', vol: 'Volume', volPh: 'e.g. 1 x 40HQ, or 12 CBM / 3,000 kg', who: 'Contact name and phone or email', whoPh: 'e.g. Ms Wang +852 0000 0000', btn: 'Prepare my request', done: 'Your request is ready', title: 'Quote request', note: 'Once our quote inbox is connected, this will send in one click.' },
      copy: 'Copy', copied: 'Copied', manual: 'Please copy it manually',
      svH: 'One contact, end to end', svP: 'Ocean, air, land, warehousing and customs are planned by one team, so you do not chase several companies.',
      svD: ['FCL, LCL, door to door, sea-rail', 'International express, door to door, sea-air', 'Trucking, Southeast Asia cross-border, China-Europe rail', 'General and bonded warehousing, consolidation', 'In-house customs brokerage, AEO certified'],
      road: 'Door to door, all the way', roadP: 'Trucking, cross-border haulage and warehouse delivery, planned by one team.', roadAlt: 'A Draco truck on the highway',
      whH: 'Our warehouses, our people', whP: 'Our warehouses in Hong Kong, Dongguan and Thailand are run by the group, with inventory visible in DRACO ONE.',
      wh: [['Hong Kong', '42,600 sq ft'], ['Dongguan bonded', '1,300 m²'], ['Dongguan general', '1,550 m²']], more2: 'See all warehouses', read: 'Read the latest issue'
    },
    th: {
      scenes: ['งานท่าเรือ', 'ขนส่งทางทะเล', 'ขนส่งทางอากาศ', 'คลังสินค้า', 'ขนส่งทางบก'], skip: 'ข้าม', reel: 'วิดีโอเปิด',
      h1: 'ต้องการตรวจสอบอะไร<br>เริ่มที่นี่', lead: 'สถานะตู้ ตารางเรือ สต็อกสินค้า คำนวณการบรรจุตู้ และขอใบเสนอราคา ครบในที่เดียว',
      hk: 'ฮ่องกง', kh: 'เกาสง', more: 'สำนักงานทั้งหมด',
      tabs: ['ติดตามตู้', 'ตารางเรือ', 'DRACO ONE', 'คำนวณตู้', 'ขอใบเสนอราคา'],
      tr: { h: 'กรอกหมายเลขตู้คอนเทนเนอร์', label: 'หมายเลขตู้', ph: 'เช่น CSQU3054383', btn: 'ค้นหา', note: 'ตอนนี้ระบบจะตรวจหมายเลขตู้ ระบุสายเรือ และพาไปยังหน้าติดตามของสายเรือ เมื่อเชื่อมต่อแล้วสถานะจะแสดงที่นี่', bad: 'หมายเลขตู้มีตัวอักษร 4 ตัวและตัวเลข 7 หลัก เช่น CSQU3054383', ok: 'หมายเลขถูกต้อง', chk: 'เลขตรวจสอบไม่ตรง โปรดตรวจอีกครั้ง', owner: 'รหัสเจ้าของตู้', carrier: 'สายเรือ', unknown: 'ระบุไม่ได้ อาจเป็นตู้เช่า', go: 'ติดตามบนเว็บไซต์ {n}', ask: 'ส่งหมายเลขตู้ให้ฝ่ายบริการลูกค้าตรวจสอบให้ได้' },
      sc: { h: 'ตารางเรือ', pol: 'ท่าต้นทาง', pod: 'ท่าปลายทาง', podPh: 'เช่น ลอสแอนเจลิส', wk: 'สัปดาห์ที่จะส่งสินค้า', btn: 'ค้นหาตารางเรือ', note: 'กำลังเชื่อมต่อฐานข้อมูลตารางเรือ เวอร์ชันนี้ยังไม่แสดงเที่ยวเรือแบบเรียลไทม์ ส่งความต้องการให้ฝ่ายขาย แล้วจะตอบกลับพร้อมเที่ยวเรือและเวลาปิดรับ', title: 'ขอตารางเรือ', empty: '(ไม่ได้ระบุ)', to: ' ถึง ', ports: ['ฮ่องกง', 'เซินเจิ้น เหยียนเถียน', 'เซินเจิ้น เสอโข่ว', 'กว่างโจว หนานซา', 'เกาสง', 'ไถจง', 'โฮจิมินห์', 'แหลมฉบัง'] },
      one: { h: 'DRACO ONE สำหรับลูกค้า', p: 'ระบบจัดการคลังสินค้าของ Draco เมื่อเข้าสู่ระบบจะเห็น:', list: ['สต็อกแบบเรียลไทม์ ระดับพาเลท กล่อง และชิ้น', 'ประวัติรับเข้าและจ่ายออก พร้อมเอกสาร', 'รูปถ่ายตอนรับสินค้าและบันทึกความผิดปกติ', 'ใบรับสินค้าปลายทาง'], login: 'เข้าสู่ระบบ DRACO ONE', apply: 'ขอบัญชีผู้ใช้', pending: 'รอที่อยู่สำหรับเข้าสู่ระบบ' },
      ca: { h: 'ตู้ 20 หรือ 40 ฟุต คำนวณก่อน', l: ['ยาว cm', 'กว้าง cm', 'สูง cm', 'กก. ต่อกล่อง', 'จำนวนกล่อง'], note: 'ประมาณการที่อัตราบรรจุ 85% ของปริมาตร เครื่องคำนวณแบบละเอียดอยู่ในหน้าเครื่องคำนวณ', pick: 'แนะนำ{n}', over: 'เกินหนึ่งตู้ 40 ฟุตไฮคิวบ์ ต้องแบ่งตู้หรือส่งแบบ LCL', cbm: 'ปริมาตรรวม', kg: 'น้ำหนักรวม', fit: 'บรรจุได้ ใช้ปริมาตรประมาณ {p}%', nofit: 'บรรจุไม่ได้', box: ['ตู้ 20 ฟุต', 'ตู้ 40 ฟุต', 'ตู้ 40 ฟุตไฮคิวบ์'] },
      qu: { h: 'บอกเราว่าจะส่งอะไร', svc: 'บริการ', svcs: ['ขนส่งทางทะเล', 'ขนส่งทางอากาศ', 'ขนส่งทางบก', 'คลังสินค้า', 'พิธีการศุลกากร'], from: 'ต้นทาง', fromPh: 'เช่น ตงกวน', to: 'ปลายทาง', toPh: 'เช่น นิวยอร์ก', vol: 'ปริมาณสินค้า', volPh: 'เช่น 1 x 40HQ หรือ 12 CBM / 3,000 kg', who: 'ชื่อผู้ติดต่อและโทรศัพท์หรืออีเมล', whoPh: 'เช่น คุณสมศรี 08-0000-0000', btn: 'สร้างคำขอใบเสนอราคา', done: 'คำขอพร้อมแล้ว', title: 'ขอใบเสนอราคา', note: 'เมื่อเชื่อมต่ออีเมลรับคำขอแล้ว จะส่งได้ในคลิกเดียว' },
      copy: 'คัดลอก', copied: 'คัดลอกแล้ว', manual: 'โปรดคัดลอกเอง',
      svH: 'ติดต่อที่เดียว ครบทุกขั้นตอน', svP: 'ทะเล อากาศ บก คลังสินค้า และศุลกากร วางแผนโดยทีมเดียว ไม่ต้องประสานหลายบริษัท',
      svD: ['FCL, LCL, ส่งถึงประตู, ทะเลต่อราง', 'ด่วนระหว่างประเทศ, ส่งถึงประตู, ทะเลต่ออากาศ', 'รถหัวลาก, รถบรรทุกข้ามแดนอาเซียน, รถไฟจีน-ยุโรป', 'คลังทั่วไป, คลังทัณฑ์บน, รวบรวมสินค้า', 'ตัวแทนออกของของกลุ่ม ได้รับรอง AEO'],
      road: 'ส่งถึงประตู ดูแลตลอดทาง', roadP: 'รถหัวลาก รถบรรทุกข้ามแดน และการจัดส่งจากคลัง วางแผนโดยทีมเดียว', roadAlt: 'รถบรรทุก Draco บนทางหลวง',
      whH: 'คลังของเรา ทีมของเรา', whP: 'คลังสินค้าที่ฮ่องกง ตงกวน และไทย ดำเนินงานโดยกลุ่มบริษัท ดูสต็อกได้ใน DRACO ONE',
      wh: [['คลังฮ่องกง', '42,600 ตร.ฟุต'], ['คลังทัณฑ์บนตงกวน', '1,300 m²'], ['คลังทั่วไปตงกวน', '1,550 m²']], more2: 'ดูคลังสินค้าทั้งหมด', read: 'อ่านฉบับล่าสุด'
    }
  };

  var lang = 'hant', X = TXT.hant;
  function $(id) { return document.getElementById(id); }
  function el(tag, text, cls) { var e = document.createElement(tag); if (text != null) e.textContent = text; if (cls) e.className = cls; return e; }
  function set(id, t) { var n = $(id); if (n) n.textContent = t; }
  function num(n) { return Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 }); }
  function copyBtn(pre) {
    var b = el('button', X.copy, 'btn ghost'); b.type = 'button';
    b.addEventListener('click', function () { try { navigator.clipboard.writeText(pre.textContent).then(function () { b.textContent = X.copied; }, function () { b.textContent = X.manual; }); } catch (x) { b.textContent = X.manual; } });
    var w = el('div'); w.appendChild(b); return w;
  }

  /* ---------- 文字 ---------- */
  window.renderHome = function (l, WK) {
    lang = TXT[l] ? l : 'hant'; X = TXT[lang];
    var h = $('h-h1'); if (!h) return;
    h.innerHTML = X.h1; set('h-lead', X.lead); set('h-hk', X.hk); set('h-kh', X.kh); set('h-more', X.more);
    X.tabs.forEach(function (t, i) { set('ht-' + i, t); });
    var T = X.tr; set('h-tr-h', T.h); set('h-tr-l', T.label); $('h-cno').placeholder = T.ph; set('h-tr-b', T.btn); set('h-tr-n', T.note);
    var S = X.sc; set('h-sc-h', S.h); set('h-sc-pol', S.pol); set('h-sc-pod', S.pod); $('h-pod').placeholder = S.podPh; set('h-sc-wk', S.wk); set('h-sc-b', S.btn);
    var pol = $('h-pol'), keep = pol.selectedIndex; pol.textContent = ''; S.ports.forEach(function (p) { pol.appendChild(el('option', p)); }); pol.selectedIndex = Math.max(0, keep);
    var O = X.one; set('h-one-h', O.h); set('h-one-p', O.p); set('h-one-login', O.login); set('h-one-apply', O.apply); set('h-one-pend', O.pending);
    var ul = $('h-one-list'); ul.textContent = ''; O.list.forEach(function (x) { ul.appendChild(el('li', x)); });
    var C = X.ca; set('h-ca-h', C.h); C.l.forEach(function (t, i) { set('h-ca-l' + i, t); }); set('h-ca-n', C.note);
    var Q = X.qu; set('h-qu-h', Q.h); set('h-qu-svc', Q.svc); set('h-qu-from', Q.from); set('h-qu-to', Q.to); set('h-qu-vol', Q.vol); set('h-qu-who', Q.who); set('h-qu-b', Q.btn);
    $('h-qf').placeholder = Q.fromPh; $('h-qt').placeholder = Q.toPh; $('h-qv').placeholder = Q.volPh; $('h-qc').placeholder = Q.whoPh;
    var qs = $('h-qs'), k2 = qs.selectedIndex; qs.textContent = ''; Q.svcs.forEach(function (p) { qs.appendChild(el('option', p)); }); qs.selectedIndex = Math.max(0, k2);
    set('h-sv-h', X.svH); set('h-sv-p', X.svP);
    var SV = (window.I18N[lang] || window.I18N.hant).svc, keys = ['sea', 'air', 'land', 'wh', 'cus'], row = $('h-svc'); row.textContent = '';
    keys.forEach(function (k, i) { var a = el('a'); a.href = '#services'; a.dataset.svc = k; a.appendChild(el('b', SV[k].t)); a.appendChild(el('span', X.svD[i])); row.appendChild(a); });
    set('h-road', X.road); set('h-roadp', X.roadP); $('h-road-img').alt = X.roadAlt;
    set('h-wh-h', X.whH); set('h-wh-p', X.whP); set('h-wh-more', X.more2);
    X.wh.forEach(function (w, i) { set('h-wh' + i + 'n', w[0]); set('h-wh' + i + 'v', w[1]); });
    if (WK) { set('h-wk-h', WK.card[0]); set('h-wk-p', WK.card[1]); }
    set('h-wk-read', X.read);
    set('skip', X.skip); var ir = $('intro'); if (ir) ir.setAttribute('aria-label', X.reel);
    if (cur >= 0) set('reelText', X.scenes[cur]);
    ['h-trackOut', 'h-schedOut', 'h-quoteOut'].forEach(function (id) { var n = $(id); if (n) n.textContent = ''; });
    calc();
  };

  /* ---------- 開場 ---------- */
  var SCENES = [{ v: 'video/port.mp4' }, { v: 'video/sea.mp4' }, { v: 'video/air.mp4' }, { v: 'video/warehouse.mp4' }, { img: 'assets/draco-truck.jpg' }];
  var MS = 2200, cur = -1, timers = [], closed = false, nodes = [];
  var intro = $('intro');
  function closeIntro() {
    if (closed || !intro) return; closed = true; timers.forEach(clearTimeout);
    intro.classList.add('done'); document.documentElement.style.overflow = '';
    nodes.forEach(function (n) { var v = n.querySelector('video'); if (v) { v.pause(); v.removeAttribute('src'); v.load(); } });
    setTimeout(function () { if (intro.parentNode) intro.parentNode.removeChild(intro); }, 600);
  }
  function startIntro() {
    var box = $('scenes'), bars = document.querySelectorAll('#reelBar i');
    intro.style.setProperty('--scene-ms', MS + 'ms');
    nodes = SCENES.map(function (s) {
      var d = el('div', null, 'scene');
      if (s.v) { var v = document.createElement('video'); v.muted = true; v.playsInline = true; v.preload = 'auto'; v.src = s.v; v.setAttribute('aria-hidden', 'true'); d.appendChild(v); }
      else { var i = el('img'); i.src = s.img; i.alt = ''; d.appendChild(i); }
      box.appendChild(d); return d;
    });
    function show(k) {
      cur = k;
      nodes.forEach(function (n, j) { n.classList.toggle('on', j === k); });
      var v = nodes[k].querySelector('video'); if (v) { try { v.currentTime = 0; var p = v.play(); if (p && p.catch) p.catch(function () {}); } catch (e) {} }
      set('reelNo', '0' + (k + 1) + ' / 0' + SCENES.length); set('reelText', X.scenes[k]);
      [].forEach.call(bars, function (b, j) { b.classList.toggle('done', j < k); b.classList.remove('run'); });
      void bars[k].offsetWidth; bars[k].classList.add('run');
    }
    document.documentElement.style.overflow = 'hidden';
    SCENES.forEach(function (s, k) { timers.push(setTimeout(function () { show(k); }, k * MS)); });
    timers.push(setTimeout(function () { $('reelEnd').classList.add('on'); }, SCENES.length * MS));
    timers.push(setTimeout(closeIntro, SCENES.length * MS + 900));
    $('skip').addEventListener('click', closeIntro);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeIntro(); });
    $('skip').focus();
  }
  var page = location.hash.slice(1);
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (intro && (!page || page === 'home') && !reduce) startIntro(); else if (intro) { closed = true; intro.parentNode.removeChild(intro); }

  /* ---------- 查詢中心分頁 ---------- */
  var tabs = [].slice.call(document.querySelectorAll('.cs-tabs [role=tab]'));
  function sel(t) { tabs.forEach(function (x) { var on = x === t; x.setAttribute('aria-selected', on); x.tabIndex = on ? 0 : -1; $(x.getAttribute('aria-controls')).hidden = !on; }); }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(t); });
    t.addEventListener('keydown', function (e) { var k = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!k) return; var n = tabs[(i + k + tabs.length) % tabs.length]; sel(n); n.focus(); e.preventDefault(); });
  });

  /* ---------- 貨櫃追蹤 ---------- */
  var V = {}; (function () { var v = 10; 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function (c) { if (v % 11 === 0) v++; V[c] = v++; }); })();
  function check(s) { var t = 0; for (var i = 0; i < 10; i++) { var c = s[i]; t += (V[c] !== undefined ? V[c] : +c) * Math.pow(2, i); } return t % 11 % 10; }
  var CARRIERS = [
    { n: 'Maersk', p: ['MSKU', 'MRKU', 'MAEU', 'SEAU'], u: function (c) { return 'https://www.maersk.com/tracking/' + c; } },
    { n: 'MSC', p: ['MSCU', 'MEDU'], u: function () { return 'https://www.msc.com/en/track-a-shipment'; } },
    { n: 'CMA CGM', p: ['CMAU', 'CGMU', 'APZU'], u: function () { return 'https://www.cma-cgm.com/ebusiness/tracking'; } },
    { n: 'COSCO', p: ['CBHU', 'CCLU', 'CSNU'], u: function () { return 'https://elines.coscoshipping.com/ebusiness/cargotracking'; } },
    { n: 'OOCL', p: ['OOLU', 'OOCU'], u: function () { return 'https://www.oocl.com/eng/ourservices/eservices/cargotracking/Pages/cargotracking.aspx'; } },
    { n: 'Evergreen', p: ['EGHU', 'EISU', 'EMCU', 'EGSU'], u: function () { return 'https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do'; } },
    { n: 'Yang Ming', p: ['YMLU', 'YMMU'], u: function () { return 'https://www.yangming.com/e-service/track_trace/track_trace_cargo_tracking.aspx'; } },
    { n: 'Hapag-Lloyd', p: ['HLXU', 'HLBU', 'HAMU'], u: function (c) { return 'https://www.hapag-lloyd.com/en/online-business/track/track-by-container-solution.html?container=' + c; } },
    { n: 'ONE', p: ['ONEU', 'NYKU', 'MOLU', 'KKFU'], u: function () { return 'https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking'; } },
    { n: 'HMM', p: ['HMMU', 'HDMU'], u: function () { return 'https://www.hmm21.com/e-service/general/trackNTrace/TrackNTrace.do'; } },
    { n: 'ZIM', p: ['ZIMU', 'ZCSU'], u: function () { return 'https://www.zim.com/tools/track-a-shipment'; } },
    { n: 'Wan Hai', p: ['WHLU', 'WHSU'], u: function () { return 'https://www.wanhai.com/views/cargoTrack/CargoTrack.xhtml'; } }
  ];
  var ft = $('h-p0');
  if (ft) ft.addEventListener('submit', function (e) {
    e.preventDefault(); var T = X.tr;
    var inp = $('h-cno'), out = $('h-trackOut');
    var c = inp.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); inp.value = c; out.textContent = '';
    if (!/^[A-Z]{3}[UJZ]\d{7}$/.test(c)) { inp.setAttribute('aria-invalid', 'true'); out.appendChild(el('p', T.bad, 'cs-verdict bad')); return; }
    var good = check(c) === +c[10]; inp.setAttribute('aria-invalid', good ? 'false' : 'true');
    out.appendChild(el('p', c + ' ' + (good ? T.ok : T.chk), 'cs-verdict ' + (good ? 'ok' : 'bad')));
    var car = CARRIERS.filter(function (x) { return x.p.indexOf(c.slice(0, 4)) > -1; })[0];
    var dl = el('dl'); dl.appendChild(el('dt', T.owner)); dl.appendChild(el('dd', c.slice(0, 4))); dl.appendChild(el('dt', T.carrier)); dl.appendChild(el('dd', car ? car.n : T.unknown)); out.appendChild(dl);
    if (car && good) { var a = el('a', T.go.replace('{n}', car.n), 'btn'); a.href = car.u(c); a.target = '_blank'; a.rel = 'noopener'; var w = el('div'); w.appendChild(a); out.appendChild(w); }
    else if (good) out.appendChild(el('p', T.ask, 'cs-note'));
  });

  /* ---------- 船期 ---------- */
  var fs = $('h-p1');
  if (fs) fs.addEventListener('submit', function (e) {
    e.preventDefault(); var S = X.sc, out = $('h-schedOut'); out.textContent = '';
    var pol = $('h-pol').value, pod = $('h-pod').value.trim() || S.empty, wk = $('h-etd').value || S.empty;
    out.appendChild(el('p', pol + S.to + pod, 'cs-verdict'));
    out.appendChild(el('p', S.note, 'cs-note'));
    var pre = el('pre', S.title + '\n' + S.pol + '：' + pol + '\n' + S.pod + '：' + pod + '\n' + S.wk + '：' + wk, 'cs-pre');
    out.appendChild(pre); out.appendChild(copyBtn(pre));
  });

  /* ---------- 裝櫃粗估 ---------- */
  var BOX = [{ cbm: 33.2, kg: 28200 }, { cbm: 67.7, kg: 26700 }, { cbm: 76.3, kg: 26500 }];
  function calc() {
    var out = $('h-calcOut'); if (!out) return;
    var g = function (id) { return parseFloat($(id).value) || 0; }, C = X.ca;
    var cbm = g('h-cl') * g('h-cw') * g('h-ch') / 1e6 * g('h-cq'), kg = g('h-ck') * g('h-cq');
    out.textContent = ''; if (!cbm) return;
    var pick = -1, fits = el('div', null, 'cs-fits');
    BOX.forEach(function (b, i) {
      var ok = cbm <= b.cbm * 0.85 && kg <= b.kg; if (ok && pick < 0) pick = i;
      var d = el('div', null, ok && pick === i ? 'pick' : '');
      d.appendChild(el('b', C.box[i])); d.appendChild(el('span', ok ? C.fit.replace('{p}', Math.round(cbm / b.cbm * 100)) : C.nofit));
      var bar = el('div', null, 'cs-ubar'), ii = el('i'); ii.style.width = Math.min(100, cbm / b.cbm * 100) + '%'; bar.appendChild(ii); d.appendChild(bar);
      fits.appendChild(d);
    });
    out.appendChild(el('p', pick >= 0 ? C.pick.replace('{n}', C.box[pick]) : C.over, 'cs-verdict'));
    var dl = el('dl'); dl.appendChild(el('dt', C.cbm)); dl.appendChild(el('dd', num(cbm.toFixed(2)) + ' CBM')); dl.appendChild(el('dt', C.kg)); dl.appendChild(el('dd', num(kg) + ' kg'));
    out.appendChild(dl); out.appendChild(fits);
  }
  ['h-cl', 'h-cw', 'h-ch', 'h-ck', 'h-cq'].forEach(function (id) { var n = $(id); if (n) n.addEventListener('input', calc); });
  var fc = $('h-p3'); if (fc) fc.addEventListener('submit', function (e) { e.preventDefault(); calc(); });

  /* ---------- 詢價 ---------- */
  var fq = $('h-p4');
  if (fq) fq.addEventListener('submit', function (e) {
    e.preventDefault(); var Q = X.qu, out = $('h-quoteOut'); out.textContent = '';
    var v = function (id) { return $(id).value.trim() || X.sc.empty; };
    var pre = el('pre', Q.title + '\n' + Q.svc + '：' + v('h-qs') + '\n' + Q.from + '：' + v('h-qf') + '\n' + Q.to + '：' + v('h-qt') + '\n' + Q.vol + '：' + v('h-qv') + '\n' + Q.who + '：' + v('h-qc'), 'cs-pre');
    out.appendChild(el('p', Q.done, 'cs-verdict')); out.appendChild(pre); out.appendChild(copyBtn(pre)); out.appendChild(el('p', Q.note, 'cs-note'));
  });
})();
