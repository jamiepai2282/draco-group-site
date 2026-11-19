// 東莞兩個倉的介紹文字（修飾版），覆蓋 i18n-more.js 裡的原文
(function () {
  var D = {
    hant: [
      { tag: '一般倉儲・出口集拼・拆櫃分撥', desc: '坐落東莞沙田，交通網絡便捷，適合作為華南出口集拼與進口分撥的作業基地。',
        specs: [['1,550', '平方米倉儲面積'], ['3 噸', '每平方米樓面承重'], ['8', '座裝卸平台，均配升降調節板'], ['12 米', '寬全天候雨棚，另設 5 米裝卸區']],
        pts: ['以 8S 標準管理現場，儲區分明、動線清楚', '自動噴淋、火警與煙霧偵測全區覆蓋', '庫內 24 小時錄影監控，園區全天候保全駐守'] },
      { tag: '進口保稅・出口集拼・簡易加工', desc: '設於沙田保稅物流中心內，貨物入倉即適用保稅政策：進口可延後繳稅，出口符合條件可辦理退稅。',
        specs: [['1,300', '平方米保稅倉儲面積'], ['3 噸', '每平方米樓面承重'], ['4', '座裝卸平台，均配升降調節板'], ['24 小時', '錄影監控與園區保全']],
        pts: ['進口：境外貨物保稅存放，出倉時才繳納關稅與增值稅', '出口：國內貨物入倉視同出口，符合條件即可辦理退稅', '加值：分揀、貼標、換包裝、組裝分裝與品質檢驗，不改變貨物性質'] }
    ],
    hans: [
      { tag: '普通仓储・出口集拼・拆柜分拨', desc: '坐落东莞沙田，交通网络便捷，适合作为华南出口集拼与进口分拨的作业基地。',
        specs: [['1,550', '平方米仓储面积'], ['3 吨', '每平方米楼面承重'], ['8', '个装卸平台，均配升降调节板'], ['12 米', '宽全天候雨棚，另设 5 米装卸区']],
        pts: ['以 8S 标准管理现场，储区分明、动线清晰', '自动喷淋、火警与烟雾探测全区覆盖', '库内 24 小时视频监控，园区全天候安保值守'] },
      { tag: '进口保税・出口集拼・简易加工', desc: '设于沙田保税物流中心内，货物入仓即适用保税政策：进口可延后缴税，出口符合条件可办理退税。',
        specs: [['1,300', '平方米保税仓储面积'], ['3 吨', '每平方米楼面承重'], ['4', '个装卸平台，均配升降调节板'], ['24 小时', '视频监控与园区安保']],
        pts: ['进口：境外货物保税存放，出仓时才缴纳关税与增值税', '出口：国内货物入仓视同出口，符合条件即可办理退税', '增值：分拣、贴标、换包装、组装分装与品质检验，不改变货物性质'] }
    ],
    en: [
      { tag: 'General storage · Export consolidation · Devanning and distribution', desc: 'In Shatian, Dongguan, with good road links. A working base for export consolidation and import distribution in South China.',
        specs: [['1,550', 'sq m of warehouse space'], ['3 t', 'floor load per sq m'], ['8', 'loading docks, each with a dock leveller'], ['12 m', 'wide all-weather canopy plus a 5 m loading zone']],
        pts: ['Run to the 8S standard, with clearly marked storage zones and traffic lanes', 'Sprinklers, fire alarms and smoke detection cover the whole site', '24-hour video surveillance inside and round-the-clock estate security'] },
      { tag: 'Bonded import · Export consolidation · Light processing', desc: 'Inside the Shatian Bonded Logistics Center. Cargo is bonded on entry: imports defer tax, and qualifying exports can claim refunds.',
        specs: [['1,300', 'sq m of bonded warehouse space'], ['3 t', 'floor load per sq m'], ['4', 'loading docks, each with a dock leveller'], ['24-hour', 'video surveillance and estate security']],
        pts: ['Import: overseas cargo is stored bonded, with duty and VAT paid only when it leaves', 'Export: domestic cargo counts as exported on entry and can claim a refund if it qualifies', 'Value-added: sorting, labelling, repacking, kitting and quality inspection, without changing the nature of the goods'] }
    ],
    th: [
      { tag: 'คลังทั่วไป · รวมสินค้าส่งออก · เปิดตู้และกระจายสินค้า', desc: 'ตั้งอยู่ที่ซาเถียน ตงกวน การคมนาคมสะดวก เหมาะเป็นฐานรวมสินค้าส่งออกและกระจายสินค้านำเข้าในจีนตอนใต้',
        specs: [['1,550', 'ตร.ม. พื้นที่คลังสินค้า'], ['3 ตัน', 'รับน้ำหนักพื้นต่อตารางเมตร'], ['8', 'ชานชาลาขนถ่าย พร้อมแผ่นปรับระดับทุกช่อง'], ['12 ม.', 'หลังคากันฝนกว้าง พร้อมพื้นที่ขนถ่าย 5 ม.']],
        pts: ['บริหารหน้างานตามมาตรฐาน 8S แบ่งโซนจัดเก็บและเส้นทางเดินรถชัดเจน', 'สปริงเกลอร์อัตโนมัติ สัญญาณเตือนอัคคีภัย และตรวจจับควันครอบคลุมทั้งพื้นที่', 'กล้องวงจรปิดในคลัง 24 ชั่วโมง และ รปภ. ในนิคมตลอดเวลา'] },
      { tag: 'นำเข้าแบบทัณฑ์บน · รวมสินค้าส่งออก · แปรรูปอย่างง่าย', desc: 'ตั้งอยู่ในศูนย์โลจิสติกส์ทัณฑ์บนซาเถียน สินค้าเข้าคลังได้รับสิทธิ์ทัณฑ์บนทันที นำเข้าเลื่อนชำระภาษีได้ ส่งออกที่เข้าเงื่อนไขขอคืนภาษีได้',
        specs: [['1,300', 'ตร.ม. พื้นที่คลังทัณฑ์บน'], ['3 ตัน', 'รับน้ำหนักพื้นต่อตารางเมตร'], ['4', 'ชานชาลาขนถ่าย พร้อมแผ่นปรับระดับทุกช่อง'], ['24 ชม.', 'กล้องวงจรปิดและ รปภ. ในนิคม']],
        pts: ['นำเข้า: สินค้าจากต่างประเทศจัดเก็บแบบทัณฑ์บน ชำระอากรและภาษีมูลค่าเพิ่มเมื่อนำออกจากคลัง', 'ส่งออก: สินค้าในประเทศเข้าคลังถือเสมือนส่งออก ขอคืนภาษีได้เมื่อเข้าเงื่อนไข', 'บริการเสริม: คัดแยก ติดฉลาก เปลี่ยนบรรจุภัณฑ์ ประกอบและแบ่งบรรจุ ตรวจสอบคุณภาพ โดยไม่เปลี่ยนสภาพสินค้า'] }
    ]
  };
  Object.keys(D).forEach(function (l) {
    var sites = window.I18N[l].wh.sites;
    D[l].forEach(function (d, i) { var s = sites[i + 1]; s.tag = d.tag; s.desc = d.desc; s.specs = d.specs; s.pts = d.pts; });
  });
})();

// 香港倉與泰國倉的介紹文字（同一口吻的修飾版）
(function () {
  var H = {
    hant: [
      { desc: '距深圳灣口岸僅 3 公里，中港車輛過關後約 10 分鐘即可進倉，是銜接華南工廠與香港海空樞紐的集貨基地。',
        specs: [['42,600', '平方呎倉儲面積'], ['13,000', '平方呎車輛停泊區'], ['8', '座裝卸平台'], ['30 分鐘', '可達香港國際機場與葵涌貨櫃碼頭']],
        pts: ['裝卸平台、高架儲位與平面儲區配置完整，動線分明', '24 小時錄影監控，配備夜視紅外線防盜', '在倉貨物投保一切財產險'] },
      { tag: '保稅倉儲・一般倉儲・板位制管理', desc: '由保稅倉與普通倉組成，以 DRACO ONE 統一管理，單據與標籤提供中、英、泰三種語言，方便跨國團隊協同作業。',
        specs: [['2 + 1', '座保稅倉與普通倉'], ['逐板', '每板獨立板位編碼，由系統自動配位'], ['先進先出', '出庫時可精準指定棧板'], ['3 語', '中、英、泰文單據與標籤']],
        pts: ['預入庫與預出庫於 DRACO ONE 建單，現場以手持終端掃碼收發', '入庫逐板拍照存證，貨況有據可查'] }
    ],
    hans: [
      { desc: '距深圳湾口岸仅 3 公里，中港车辆过关后约 10 分钟即可进仓，是衔接华南工厂与香港海空枢纽的集货基地。',
        specs: [['42,600', '平方英尺仓储面积'], ['13,000', '平方英尺车辆停泊区'], ['8', '个装卸平台'], ['30 分钟', '可达香港国际机场与葵涌集装箱码头']],
        pts: ['装卸平台、高架储位与平面储区配置完整，动线分明', '24 小时视频监控，配备夜视红外线防盗', '在仓货物投保财产一切险'] },
      { tag: '保税仓储・普通仓储・板位制管理', desc: '由保税仓与普通仓组成，以 DRACO ONE 统一管理，单据与标签提供中、英、泰三种语言，方便跨国团队协同作业。',
        specs: [['2 + 1', '座保税仓与普通仓'], ['逐板', '每板独立板位编码，由系统自动配位'], ['先进先出', '出库时可精准指定托盘'], ['3 语', '中、英、泰文单据与标签']],
        pts: ['预入库与预出库在 DRACO ONE 建单，现场以手持终端扫码收发', '入库逐板拍照存证，货况有据可查'] }
    ],
    en: [
      { desc: "Just 3 km from Shenzhen Bay Port. Cross-border trucks reach the warehouse about 10 minutes after clearing the border, which makes it a consolidation base between South China factories and Hong Kong's sea and air hubs.",
        specs: [['42,600', 'sq ft of warehouse space'], ['13,000', 'sq ft of vehicle parking'], ['8', 'loading docks'], ['30 min', 'to Hong Kong International Airport and Kwai Chung container terminals']],
        pts: ['Loading docks, high-bay racking and floor storage, with clear traffic lanes', '24-hour video surveillance with infrared night-vision security', 'Stored cargo is covered by all-risks property insurance'] },
      { tag: 'Bonded storage · General storage · Pallet-slot management', desc: 'Bonded and general warehouses run on DRACO ONE, with documents and labels in Chinese, English and Thai so teams in different countries can work together.',
        specs: [['2 + 1', 'bonded and general warehouses'], ['Per pallet', 'every pallet has its own slot code, assigned by the system'], ['FIFO', 'the exact pallet can be specified at dispatch'], ['3 languages', 'documents and labels in Chinese, English and Thai']],
        pts: ['Inbound and outbound orders are created in DRACO ONE; the site receives and dispatches by handheld scan', 'Every pallet is photographed at receiving, so cargo condition is on record'] }
    ],
    th: [
      { desc: 'ห่างจากด่านเซินเจิ้นเบย์เพียง 3 กม. รถข้ามแดนเข้าคลังได้ในประมาณ 10 นาทีหลังผ่านด่าน เป็นฐานรวมสินค้าที่เชื่อมโรงงานในจีนตอนใต้กับศูนย์กลางทางเรือและอากาศของฮ่องกง',
        specs: [['42,600', 'ตารางฟุต พื้นที่คลังสินค้า'], ['13,000', 'ตารางฟุต ลานจอดรถ'], ['8', 'ชานชาลาขนถ่ายสินค้า'], ['30 นาที', 'ถึงสนามบินนานาชาติฮ่องกงและท่าเรือตู้สินค้าไควชุง']],
        pts: ['มีชานชาลาขนถ่าย ชั้นวางสูง และพื้นที่จัดเก็บบนพื้น เส้นทางเดินรถชัดเจน', 'กล้องวงจรปิด 24 ชั่วโมง พร้อมระบบกันขโมยอินฟราเรด', 'สินค้าในคลังมีประกันภัยทรัพย์สินแบบเสี่ยงภัยทุกชนิด'] },
      { tag: 'คลังทัณฑ์บน · คลังทั่วไป · บริหารแบบตำแหน่งพาเลต', desc: 'ประกอบด้วยคลังทัณฑ์บนและคลังทั่วไป บริหารด้วย DRACO ONE ระบบเดียว เอกสารและฉลากมีภาษาจีน อังกฤษ และไทย ทีมงานต่างประเทศทำงานร่วมกันได้สะดวก',
        specs: [['2 + 1', 'คลังทัณฑ์บนและคลังทั่วไป'], ['รายพาเลต', 'ทุกพาเลตมีรหัสตำแหน่งของตัวเอง ระบบจัดตำแหน่งอัตโนมัติ'], ['FIFO', 'ระบุพาเลตที่ต้องจ่ายออกได้แม่นยำ'], ['3 ภาษา', 'เอกสารและฉลากภาษาจีน อังกฤษ และไทย']],
        pts: ['สร้างรายการรับเข้าและจ่ายออกล่วงหน้าใน DRACO ONE หน้างานสแกนรับและจ่ายด้วยเครื่องมือถือ', 'ถ่ายภาพทุกพาเลตตอนรับเข้า มีหลักฐานสภาพสินค้า'] }
    ]
  };
  Object.keys(H).forEach(function (l) {
    var sites = window.I18N[l].wh.sites;
    [0, 3].forEach(function (idx, i) { var d = H[l][i], s = sites[idx]; if (d.tag) s.tag = d.tag; s.desc = d.desc; s.specs = d.specs; s.pts = d.pts; });
  });
})();
