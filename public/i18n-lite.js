// 精簡版文案：覆蓋前面幾個檔案裡較長的文字。要恢復長版，把 index.html 裡載入這個檔案的那一行拿掉即可。
(function () {
  var L = {
    hant: {
      heroLead: '海、空、陸、倉、關，一站式供應鏈服務。',
      why: ['海空陸倉關，同一個團隊安排。', '自有報關行，AEO 認證。', '14 家公司，遍及亞洲與美國。', '庫存到件，影像與簽收隨時可查。'],
      pitch: { sea: '整櫃、併櫃、散雜貨，訂艙到門一次安排。', air: '空運、快遞、海空聯運，依時效選擇。', land: '美墨美加、東南亞卡車、中歐班列。', wh: '存放之外，檢驗、換包裝、集拼都在倉內完成。', cus: '自有報關行，特殊品項也能辦理。' },
      whLead: '香港、東莞、佛山、泰國，同一套流程與單據標準。',
      sites: [
        ['距深圳灣口岸 3 公里，銜接華南工廠與香港海空樞紐。', [['42,600', '平方呎倉儲面積'], ['13,000', '平方呎停車區'], ['8', '座裝卸平台'], ['30 分鐘', '到機場與葵涌碼頭']], ['24 小時監控與紅外線防盜', '在倉貨物投保一切財產險']],
        ['華南出口集拼與進口分撥的作業基地。', [['1,550', '平方米倉儲面積'], ['3 噸', '每平方米承重'], ['8', '座裝卸平台'], ['12 米', '寬全天候雨棚']], ['8S 現場管理', '全區消防與 24 小時監控']],
        ['入倉即保稅：進口延後繳稅，出口可辦退稅。', [['1,300', '平方米保稅倉儲'], ['3 噸', '每平方米承重'], ['4', '座裝卸平台'], ['24 小時', '監控與保全']], ['進口保稅存放，出倉才繳稅', '分揀、貼標、換包裝等簡易加工']],
        ['保稅倉與普通倉，由 DRACO ONE 統一管理。', [['2 + 1', '保稅倉與普通倉'], ['逐板', '獨立板位編碼'], ['先進先出', '精準指定棧板'], ['3 語', '中、英、泰文單據']], ['手持終端掃碼收發', '入庫逐板拍照存證']]
      ],
      hubLead: '多家供應商先交貨到香港倉，再依需求併車進口或直接出口。',
      bond: ['依訂單分批報關繳稅。', '申報後直接出境，免徵國內稅費。', '在各保稅場所之間調撥。'], bondNote: '保稅是延後繳稅，不是免稅。',
      wmsLead: '登泰的倉儲管理系統，流程、單據與報表可依需求客製。',
      qc: [['庫存精準到件', '板、箱、件三層可查。'], ['影像存證', '入庫與破損均拍照歸檔。'], ['Hold 鎖定', '問題貨物自動鎖定，防止誤出。'], ['數量核對', '數量不符即時示警。'], ['線上簽收', '司機現場上傳簽收影像。'], ['報表自動寄送', '每日庫存報表定時寄出。']],
      abP: '2010 年始於東莞，現有登泰、崧盛、翃熙三個品牌，14 家公司。', val2: '一站式供應鏈解決方案', trLead: '集團持有的資格與會員身分。',
      esg: [['合作船公司與航空公司已導入生質燃料與 SAF'], ['耶誕送暖：完成近 400 名弱勢孩童的願望', '贊助荖濃國小合唱團赴紐西蘭參賽', '員工健檢補助與家庭親子日'], ['進出口、人事與內部流程系統化管理']],
      onb: ['貨物、頻率與單據要求', '建立客戶主檔與參數', '確認匯入格式與樣張', '首批貨物驗證後營運'], ctP: '告訴我們起運地、目的地與貨物內容。'
    },
    hans: {
      heroLead: '海、空、陆、仓、关，一站式供应链服务。',
      why: ['海空陆仓关，同一个团队安排。', '自有报关行，AEO 认证。', '14 家公司，遍及亚洲与美国。', '库存到件，影像与签收随时可查。'],
      pitch: { sea: '整箱、拼箱、散杂货，订舱到门一次安排。', air: '空运、快递、海空联运，按时效选择。', land: '美墨美加、东南亚卡车、中欧班列。', wh: '存放之外，检验、换包装、集拼都在仓内完成。', cus: '自有报关行，特殊品类也能办理。' },
      whLead: '香港、东莞、佛山、泰国，同一套流程与单据标准。',
      sites: [
        ['距深圳湾口岸 3 公里，衔接华南工厂与香港海空枢纽。', [['42,600', '平方英尺仓储面积'], ['13,000', '平方英尺停车区'], ['8', '个装卸平台'], ['30 分钟', '到机场与葵涌码头']], ['24 小时监控与红外线防盗', '在仓货物投保财产一切险']],
        ['华南出口集拼与进口分拨的作业基地。', [['1,550', '平方米仓储面积'], ['3 吨', '每平方米承重'], ['8', '个装卸平台'], ['12 米', '宽全天候雨棚']], ['8S 现场管理', '全区消防与 24 小时监控']],
        ['入仓即保税：进口延后缴税，出口可办退税。', [['1,300', '平方米保税仓储'], ['3 吨', '每平方米承重'], ['4', '个装卸平台'], ['24 小时', '监控与安保']], ['进口保税存放，出仓才缴税', '分拣、贴标、换包装等简易加工']],
        ['保税仓与普通仓，由 DRACO ONE 统一管理。', [['2 + 1', '保税仓与普通仓'], ['逐板', '独立板位编码'], ['先进先出', '精准指定托盘'], ['3 语', '中、英、泰文单据']], ['手持终端扫码收发', '入库逐板拍照存证']]
      ],
      hubLead: '多家供应商先交货到香港仓，再按需求拼车进口或直接出口。',
      bond: ['按订单分批报关缴税。', '申报后直接出境，免征国内税费。', '在各保税场所之间调拨。'], bondNote: '保税是延后缴税，不是免税。',
      wmsLead: '登泰的仓储管理系统，流程、单据与报表可按需求定制。',
      qc: [['库存精准到件', '板、箱、件三层可查。'], ['影像存证', '入库与破损均拍照归档。'], ['Hold 锁定', '问题货物自动锁定，防止误出。'], ['数量核对', '数量不符实时示警。'], ['在线签收', '司机现场上传签收影像。'], ['报表自动发送', '每日库存报表定时发出。']],
      abP: '2010 年始于东莞，现有登泰、崧盛、翃熙三个品牌，14 家公司。', val2: '一站式供应链解决方案', trLead: '集团持有的资质与会员身份。',
      esg: [['合作船公司与航空公司已采用生物燃料与 SAF'], ['圣诞送暖：完成近 400 名弱势儿童的愿望', '赞助荖浓小学合唱团赴新西兰参赛', '员工体检补助与家庭亲子日'], ['进出口、人事与内部流程系统化管理']],
      onb: ['货物、频率与单据要求', '建立客户主档与参数', '确认导入格式与样张', '首批货物验证后运营'], ctP: '告诉我们起运地、目的地与货物内容。'
    },
    en: {
      heroLead: 'Ocean, air, land, warehousing and customs. One-stop supply chain service.',
      why: ['Ocean, air, land, warehousing and customs from one team.', 'Our own brokerage, AEO certified.', '14 companies across Asia and the US.', 'Stock to the piece, with photos and proof of delivery.'],
      pitch: { sea: 'FCL, LCL and break bulk, booked through to the door.', air: 'Air, express or sea-air, chosen by deadline.', land: 'US-Mexico-Canada trucking, Southeast Asia trucks, China-Europe rail.', wh: 'Beyond storage: inspect, repack and consolidate in the warehouse.', cus: 'Our own brokerage, including special commodities.' },
      whLead: 'Hong Kong, Dongguan, Foshan and Thailand, on one set of processes and documents.',
      sites: [
        ["3 km from Shenzhen Bay Port, linking South China factories with Hong Kong's sea and air hubs.", [['42,600', 'sq ft of warehouse'], ['13,000', 'sq ft of parking'], ['8', 'loading docks'], ['30 min', 'to the airport and Kwai Chung']], ['24-hour surveillance with infrared security', 'All-risks property insurance on stored cargo']],
        ['A base for export consolidation and import distribution in South China.', [['1,550', 'sq m of warehouse'], ['3 t', 'floor load per sq m'], ['8', 'loading docks'], ['12 m', 'all-weather canopy']], ['8S site management', 'Full fire protection and 24-hour surveillance']],
        ['Bonded on entry: imports defer tax, exports can claim refunds.', [['1,300', 'sq m, bonded'], ['3 t', 'floor load per sq m'], ['4', 'loading docks'], ['24-hour', 'surveillance and security']], ['Bonded import storage, tax paid on exit', 'Sorting, labelling, repacking and other light processing']],
        ['Bonded and general warehouses, run on DRACO ONE.', [['2 + 1', 'bonded and general'], ['Per pallet', 'own slot code'], ['FIFO', 'exact pallet picked'], ['3 languages', 'Chinese, English, Thai']], ['Handheld scanning in and out', 'Every pallet photographed at receiving']]
      ],
      hubLead: 'Suppliers deliver to Hong Kong first, then cargo is trucked in together or exported direct.',
      bond: ['Declare and pay in batches as orders come in.', 'Declared and shipped out with no domestic taxes.', 'Move cargo between bonded sites.'], bondNote: 'Bonding defers tax. It does not waive it.',
      wmsLead: "Draco's warehouse management system. Workflows, documents and reports are tailored to you.",
      qc: [['Stock to the piece', 'Pallet, carton and piece, all countable.'], ['Photo evidence', 'Receiving and damage photographed and filed.'], ['Hold lock', 'Problem cargo locked automatically.'], ['Quantity check', 'Mismatches raise an alert at once.'], ['Online proof of delivery', 'Drivers upload the signed receipt on site.'], ['Automatic reports', 'Daily stock reports sent on schedule.']],
      abP: 'Founded in Dongguan in 2010. Today: three brands, Draco, Seal Global and H.Rhino, and 14 companies.', val2: 'One-stop supply chain solutions', trLead: 'Licences and memberships the group holds.',
      esg: [['Our carriers and airlines have adopted biofuel and SAF'], ['Christmas drive: wishes fulfilled for nearly 400 disadvantaged children', 'Sponsored the Laonong Elementary choir to compete in New Zealand', 'Staff health check subsidy and family day'], ['Operations, HR and internal workflows run on systems']],
      onb: ['Cargo, frequency and documents', 'Customer record and parameters', 'Import format and samples', 'First shipments, then go live'], ctP: 'Tell us the origin, destination and cargo details.'
    },
    th: {
      heroLead: 'ทางเรือ อากาศ บก คลังสินค้า และศุลกากร บริการซัพพลายเชนครบจบในที่เดียว',
      why: ['เรือ อากาศ บก คลัง ศุลกากร โดยทีมเดียว', 'ตัวแทนออกของของเราเอง ได้รับรอง AEO', '14 บริษัททั่วเอเชียและสหรัฐฯ', 'สต็อกถึงระดับชิ้น พร้อมภาพถ่ายและใบเซ็นรับ'],
      pitch: { sea: 'FCL, LCL และ Break Bulk จัดการตั้งแต่จองระวางถึงหน้าประตู', air: 'ทางอากาศ ด่วน หรือเรือต่ออากาศ เลือกตามกำหนดส่ง', land: 'รถบรรทุกสหรัฐฯ-เม็กซิโก-แคนาดา รถบรรทุกอาเซียน รถไฟจีน-ยุโรป', wh: 'มากกว่าการจัดเก็บ ตรวจ เปลี่ยนบรรจุภัณฑ์ และรวมสินค้าได้ในคลัง', cus: 'ตัวแทนออกของของเราเอง รองรับสินค้าประเภทพิเศษ' },
      whLead: 'ฮ่องกง ตงกวน ฝอซาน และประเทศไทย ใช้ขั้นตอนและมาตรฐานเอกสารชุดเดียวกัน',
      sites: [
        ['ห่างด่านเซินเจิ้นเบย์ 3 กม. เชื่อมโรงงานจีนตอนใต้กับศูนย์กลางทางเรือและอากาศของฮ่องกง', [['42,600', 'ตร.ฟุต พื้นที่คลัง'], ['13,000', 'ตร.ฟุต ลานจอดรถ'], ['8', 'ชานชาลาขนถ่าย'], ['30 นาที', 'ถึงสนามบินและท่าเรือไควชุง']], ['กล้องวงจรปิด 24 ชม. พร้อมระบบกันขโมยอินฟราเรด', 'สินค้าในคลังมีประกันภัยเสี่ยงภัยทุกชนิด']],
        ['ฐานรวมสินค้าส่งออกและกระจายสินค้านำเข้าในจีนตอนใต้', [['1,550', 'ตร.ม. พื้นที่คลัง'], ['3 ตัน', 'รับน้ำหนักต่อ ตร.ม.'], ['8', 'ชานชาลาขนถ่าย'], ['12 ม.', 'หลังคากันฝน']], ['บริหารหน้างานแบบ 8S', 'ระบบดับเพลิงทั้งพื้นที่และกล้องวงจรปิด 24 ชม.']],
        ['เข้าคลังได้สิทธิ์ทัณฑ์บนทันที นำเข้าเลื่อนชำระภาษี ส่งออกขอคืนภาษีได้', [['1,300', 'ตร.ม. คลังทัณฑ์บน'], ['3 ตัน', 'รับน้ำหนักต่อ ตร.ม.'], ['4', 'ชานชาลาขนถ่าย'], ['24 ชม.', 'กล้องวงจรปิดและ รปภ.']], ['จัดเก็บสินค้านำเข้าแบบทัณฑ์บน ชำระภาษีเมื่อนำออก', 'คัดแยก ติดฉลาก เปลี่ยนบรรจุภัณฑ์ และแปรรูปอย่างง่าย']],
        ['คลังทัณฑ์บนและคลังทั่วไป บริหารด้วย DRACO ONE', [['2 + 1', 'คลังทัณฑ์บนและคลังทั่วไป'], ['รายพาเลต', 'รหัสตำแหน่งแยกทุกพาเลต'], ['FIFO', 'ระบุพาเลตได้แม่นยำ'], ['3 ภาษา', 'จีน อังกฤษ ไทย']], ['สแกนรับ-จ่ายด้วยเครื่องมือถือ', 'ถ่ายภาพทุกพาเลตตอนรับเข้า']]
      ],
      hubLead: 'ซัพพลายเออร์ส่งเข้าคลังฮ่องกงก่อน แล้วรวมรถนำเข้าหรือส่งออกโดยตรง',
      bond: ['ยื่นและชำระภาษีเป็นงวดตามคำสั่งซื้อ', 'ยื่นแล้วส่งออกโดยตรง ไม่เสียภาษีในประเทศ', 'โอนย้ายสินค้าระหว่างสถานที่ทัณฑ์บน'], bondNote: 'ทัณฑ์บนคือการเลื่อนชำระภาษี ไม่ใช่การยกเว้น',
      wmsLead: 'ระบบบริหารคลังสินค้าของ Draco ปรับขั้นตอน เอกสาร และรายงานตามความต้องการได้',
      qc: [['สต็อกถึงระดับชิ้น', 'ตรวจนับได้ทั้งพาเลต กล่อง และชิ้น'], ['หลักฐานภาพถ่าย', 'ถ่ายภาพตอนรับเข้าและสินค้าเสียหายเก็บเข้าแฟ้ม'], ['ล็อก Hold', 'สินค้ามีปัญหาถูกล็อกอัตโนมัติ'], ['ตรวจจำนวน', 'จำนวนไม่ตรงระบบเตือนทันที'], ['เซ็นรับออนไลน์', 'คนขับอัปโหลดใบเซ็นรับหน้างาน'], ['ส่งรายงานอัตโนมัติ', 'รายงานสต็อกรายวันส่งตามกำหนด']],
      abP: 'ก่อตั้งที่ตงกวนปี 2010 ปัจจุบันมีสามแบรนด์ Draco, Seal Global และ H.Rhino รวม 14 บริษัท', val2: 'โซลูชันซัพพลายเชนแบบเบ็ดเสร็จ', trLead: 'ใบอนุญาตและสมาชิกภาพที่กลุ่มบริษัทถืออยู่',
      esg: [['สายเรือและสายการบินพันธมิตรใช้เชื้อเพลิงชีวภาพและ SAF แล้ว'], ['กิจกรรมคริสต์มาส: เติมเต็มความปรารถนาเด็กด้อยโอกาสเกือบ 400 คน', 'สนับสนุนคณะนักร้องประสานเสียงโรงเรียนประถมเหล่าหนงไปแข่งที่นิวซีแลนด์', 'สนับสนุนตรวจสุขภาพพนักงานและวันครอบครัว'], ['บริหารงานนำเข้าส่งออก งานบุคคล และกระบวนการภายในด้วยระบบ']],
      onb: ['สินค้า ความถี่ และเอกสาร', 'ข้อมูลลูกค้าและพารามิเตอร์', 'รูปแบบนำเข้าและตัวอย่างเอกสาร', 'ทดสอบล็อตแรกแล้วเริ่มจริง'], ctP: 'บอกต้นทาง ปลายทาง และรายละเอียดสินค้า'
    }
  };
  Object.keys(L).forEach(function (l) {
    var T = window.I18N[l], x = L[l], c = T.copy;
    T.heroLead = x.heroLead; T.trLead = x.trLead; T.ctP = x.ctP;
    c.why.forEach(function (w, i) { w[1] = x.why[i]; }); c.pitch = x.pitch; c.abP = x.abP; c.vals[1][1] = x.val2;
    Object.keys(c.cta).forEach(function (k) { c.cta[k][1] = ''; });              // 各頁底部洽詢區只留標題
    ['sea', 'air', 'land'].forEach(function (k) { T.svc[k].n = ''; });           // 拿掉重複的配套說明
    T.wh.lead = x.whLead; T.wh.hubLead = x.hubLead; T.wh.bondNote = x.bondNote;
    T.wh.sites.forEach(function (s, i) { s.desc = x.sites[i][0]; s.specs = x.sites[i][1]; s.pts = x.sites[i][2]; });
    T.wh.vas.forEach(function (v) { v[1] = ''; });                               // 增值服務只列名稱
    T.wh.bond.forEach(function (b, i) { b[1] = x.bond[i]; });
    T.wms.lead = x.wmsLead; T.wms.qc = x.qc; T.wms.steps.forEach(function (s) { s[1] = ''; });  // 六個環節只列名稱
    T.esg.forEach(function (g, i) { g[2] = x.esg[i]; });
    T.onb.steps.forEach(function (s, i) { s[1] = x.onb[i]; });
  });
})();
