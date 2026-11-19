// 倉儲據點、DRACO ONE（WMS 線上查詢）、合作流程的三語文字
(function () {
  var IMG = [['wh-hk-1.jpg', 'wh-hk-2.jpg'], ['wh-dg-1.jpg', 'wh-dg-2.jpg'], ['wh-dgb-1.jpg', 'wh-dgb-2.jpg']];
  var M = {
    hant: {
      nav7: '倉儲據點', navWms: 'WMS 線上查詢',
      svcWh: { t: '倉儲', l: ['一般倉儲與保稅倉儲', '集貨轉運與併櫃拆櫃', '電子商務配送', '重新包裝與貼標', '平板裝卸平台'], n: '各倉面積、設備與增值服務，請看「倉儲據點」頁。' },
      wh: {
        h2: '貼著口岸與港口的倉儲據點',
        lead: '香港、東莞、佛山與泰國的倉庫採用一致的作業流程與單據標準，跨區合作無須重新磨合。',
        sites: [
          { name: '香港倉', tag: '一般倉儲・集貨轉運・海運進口', loc: '香港新界元朗流浮山道新慶村 120 號', alt: '登泰香港倉倉內實景',
            specs: [['42,600', '平方呎倉儲面積'], ['13,000', '平方呎車輛停泊區'], ['8', '個裝卸平台'], ['3 公里', '距深圳灣口岸，車程約 10 分鐘']],
            pts: ['出口貨物約 30 分鐘可達香港國際機場與葵涌貨櫃碼頭', '堆高機 4 台、油壓車 5 台，機械化搬運', '24 小時 CCTV 與夜視紅外線防盜', '貨物投保一切財產險'] },
          { name: '東莞普通倉', tag: '一般倉儲・集拼裝櫃・拆櫃派送', loc: '東莞市沙田鎮保稅中路與保稅區環路交叉口 通盈倉儲 3 號 1 樓 B 區', alt: '東莞登泰普通倉庫內與裝卸區',
            specs: [['1,550', '平方米存倉空間'], ['3 噸', '每平方米承重'], ['8', '個庫門，各配升降卸貨平台'], ['12 米', '寬雨棚，另有 5 米裝卸區']],
            pts: ['8S 標準管理，庫內整潔規範', '全覆蓋自動噴淋、消防警報與煙霧感應系統', '庫內 24 小時 CCTV，園區 24 小時安保'] },
          { name: '東莞保稅倉', tag: '進口保稅存儲・出口集拼・簡單加工', loc: '東莞市沙田鎮保稅物流中心 1 棟 C 倉', alt: '東莞登泰保稅倉庫內實景',
            specs: [['1,300', '平方米存倉空間'], ['3 噸', '每平方米承重'], ['4', '個庫門，各配升降卸貨平台'], ['24 小時', 'CCTV 監控與園區安保']],
            pts: ['境外貨物入倉即享保稅，暫緩繳納關稅與增值稅', '國內貨物入倉視同出口，符合條件可辦理出口退稅', '分揀、貼標、換包裝、組裝分裝與品質檢驗'] },
          { name: '泰國倉', tag: '保稅倉・普通倉・板位制管理', loc: '[地址、面積與裝卸平台數，請補充]', alt: '',
            specs: [['2 + 1', '座保稅倉與普通倉'], ['逐板', '獨立板位編碼，系統自動配位'], ['先進先出', '可指定該出庫的那一板'], ['3 語', '中、英、泰文單據與標籤']],
            pts: ['在 DRACO ONE 預入庫、預出庫，現場以手持終端刷入刷出', '入庫逐板拍照留底'] }
        ],
        moreH: '其他據點', more: [['佛山倉', '保稅倉儲']],
        vasH: '倉內就能完成的加工與配送',
        vas: [['庫存管理', '儲位規劃、庫存調度與進出庫作業。'], ['貨物檢驗', '依客戶標準查驗貨物狀態。'], ['換包裝／換嘜', '批次更換包裝、重貼嘜頭與標籤。'], ['貼標與封塑', '日用品、化妝品貼標封塑，食品裝盒貼標。'],
          ['集拼裝櫃', '多家供應商的貨整合進同一個貨櫃，充分利用櫃位。'], ['拆櫃派送', '拆櫃後依收貨人分揀理貨，分別派送到指定地點。'], ['商務代理', '受託辦理物流相關商務事宜。'], ['報廢處理', '依規範辦理貨物報廢作業。']],
        hubH: '把庫存前置在香港，進口成本會不一樣',
        hubLead: '多家供應商先交貨到香港倉，再依生產需求併車進口到中國分廠，或直接海空運出口到全球各分廠。成品分撥同樣適用。',
        hubCols: ['比較項目', '逐家直送進口', '香港集貨進口'],
        hubRows: [['物流成本', '各供應商個別派車，運輸成本偏高', '併車運輸，整體運費下降'], ['報關作業', '依供應商逐票申報', '合併報關，節省時間與費用'], ['庫存管理', '庫存積壓於工廠；呆滯料須退運或完稅報廢', '依生產需求進口；呆滯料可於香港直接退回供應商']],
        bondH: '保稅倉的三種出庫流向',
        bond: [['進入國內市場', '保稅倉 → 一般貿易徵稅報關出庫。依實際訂單分批申報繳稅。'], ['複運出境', '保稅倉 → 申報後直接複運出境。全程免徵國內環節稅費，適合轉口與庫存調整。'], ['跨關區流轉', '保稅倉 → 其他海關特殊監管區域。在各保稅場所之間調撥貨物。']],
        bondNote: '保稅是稅款延後支付，不是免除。貨物入倉時暫不繳關稅與進口環節增值稅，資金可以先用在生產與市場。'
      },
      wms: {
        h2: '板、箱、件，逐層可視，全程可溯',
        lead: 'DRACO ONE 是登泰的倉儲管理系統。沿用客戶既有的資料格式，作業流程、單據與報表都可依需求彈性客製。',
        formH: 'WMS 線上查詢', formLead: '客戶登入後可以查看：',
        can: ['即時庫存（板、箱、件）', '入庫與出庫紀錄、單據', '入庫影像與異常紀錄', '派送簽收單'],
        f1: '客戶帳號', f2: '入倉號、PO 或箱號', btn: '查詢', login: '登入 DRACO ONE',
        notice: '這是網站初稿，查詢尚未連接 DRACO ONE。正式上線後，這裡會導向系統登入頁。',
        stepsH: '六個環節，全程掃碼',
        steps: [['預約入庫', '匯入客戶箱單，系統自動核對數量'], ['到倉登記', '車輛報到，列印板、箱 QR 標籤'], ['掃碼收貨', '手持終端逐板逐箱點收，同步拍照存證'], ['上架定位', '掃描儲位 QR，貨物位置即時可查'], ['系統揀貨', '系統指引儲位，產出理貨單'], ['驗證出庫', '掃碼核對無誤後放行，產出出倉單']],
        qcH: '由系統規則把關，不靠人工記憶',
        qc: [['庫存精準到件', '板、箱、件三層庫存架構，數量逐件可查。'], ['影像存證', '入庫與破損狀況均拍照歸檔，爭議發生時有據可依。'], ['Hold 鎖定', '破損貨物或指定料號、批號自動鎖定，防止誤出。'], ['單據數量核對', '箱數、件數與合計不符即時示警，確認後方可建單。'], ['派送線上簽收', '司機手機接單，送達後現場上傳簽收影像，無須等待紙本回單。'], ['報表自動寄送', '每日庫存報表依設定自動寄給指定收件人。']],
        langs: '系統介面支援繁體中文、簡體中文與英文；泰國倉的單據與標籤另含泰文。'
      },
      onb: { h2: '四步開始合作', steps: [['需求確認', '釐清貨物類型、到貨形態、進出頻率及單據報表要求。'], ['系統配置', '建立客戶主檔及專屬作業參數。'], ['格式對接', '確認箱單匯入格式及單據、報表樣張。'], ['試行上線', '首批貨物實際驗證流程，確認後正式營運。']] },
      ctWh: '倉儲洽詢'
    },

    hans: {
      nav7: '仓储网点', navWms: 'WMS 在线查询',
      svcWh: { t: '仓储', l: ['普通仓储与保税仓储', '集货转运与拼箱拆箱', '电子商务配送', '重新包装与贴标', '平板装卸平台'], n: '各仓面积、设备与增值服务，请看“仓储网点”页。' },
      wh: {
        h2: '紧邻口岸与港口的仓储网点',
        lead: '香港、东莞、佛山与泰国的仓库采用一致的作业流程与单据标准，跨区合作无须重新磨合。',
        sites: [
          { name: '香港仓', tag: '普通仓储・集货转运・海运进口', loc: '香港新界元朗流浮山道新庆村 120 号', alt: '登泰香港仓仓内实景',
            specs: [['42,600', '平方英尺仓储面积'], ['13,000', '平方英尺车辆停泊区'], ['8', '个装卸平台'], ['3 公里', '距深圳湾口岸，车程约 10 分钟']],
            pts: ['出口货物约 30 分钟可达香港国际机场与葵涌集装箱码头', '叉车 4 台、液压车 5 台，机械化搬运', '24 小时 CCTV 与夜视红外线防盗', '货物投保财产一切险'] },
          { name: '东莞普通仓', tag: '普通仓储・集拼装柜・拆柜派送', loc: '东莞市沙田镇保税中路与保税区环路交叉口 通盈仓储 3 号 1 楼 B 区', alt: '东莞登泰普通仓库内与装卸区',
            specs: [['1,550', '平方米存仓空间'], ['3 吨', '每平方米承重'], ['8', '个库门，各配升降卸货平台'], ['12 米', '宽雨棚，另有 5 米装卸区']],
            pts: ['8S 标准管理，库内整洁规范', '全覆盖自动喷淋、消防警报与烟雾感应系统', '库内 24 小时 CCTV，园区 24 小时安保'] },
          { name: '东莞保税仓', tag: '进口保税存储・出口集拼・简单加工', loc: '东莞市沙田镇保税物流中心 1 栋 C 仓', alt: '东莞登泰保税仓库内实景',
            specs: [['1,300', '平方米存仓空间'], ['3 吨', '每平方米承重'], ['4', '个库门，各配升降卸货平台'], ['24 小时', 'CCTV 监控与园区安保']],
            pts: ['境外货物入仓即享保税，暂缓缴纳关税与增值税', '国内货物入仓视同出口，符合条件可办理出口退税', '分拣、贴标、换包装、组装分装与品质检验'] },
          { name: '泰国仓', tag: '保税仓・普通仓・板位制管理', loc: '[地址、面积与装卸平台数，请补充]', alt: '',
            specs: [['2 + 1', '座保税仓与普通仓'], ['逐板', '独立板位编码，系统自动配位'], ['先进先出', '可指定该出库的那一板'], ['3 语', '中、英、泰文单据与标签']],
            pts: ['在 DRACO ONE 预入库、预出库，现场以手持终端扫入扫出', '入库逐板拍照留底'] }
        ],
        moreH: '其他网点', more: [['佛山仓', '保税仓储']],
        vasH: '仓内就能完成的加工与配送',
        vas: [['库存管理', '储位规划、库存调度与进出库作业。'], ['货物检验', '按客户标准查验货物状态。'], ['换包装／换唛', '批量更换包装、重贴唛头与标签。'], ['贴标与封塑', '日用品、化妆品贴标封塑，食品装盒贴标。'],
          ['集拼装柜', '多家供应商的货整合进同一个集装箱，充分利用箱位。'], ['拆柜派送', '拆柜后按收货人分拣理货，分别派送到指定地点。'], ['商务代理', '受托办理物流相关商务事宜。'], ['报废处理', '按规范办理货物报废作业。']],
        hubH: '把库存前置在香港，进口成本会不一样',
        hubLead: '多家供应商先交货到香港仓，再按生产需求拼车进口到中国分厂，或直接海空运出口到全球各分厂。成品分拨同样适用。',
        hubCols: ['比较项目', '逐家直送进口', '香港集货进口'],
        hubRows: [['物流成本', '各供应商分别派车，运输成本偏高', '拼车运输，整体运费下降'], ['报关作业', '按供应商逐票申报', '合并报关，节省时间与费用'], ['库存管理', '库存积压于工厂；呆滞料须退运或完税报废', '按生产需求进口；呆滞料可在香港直接退回供应商']],
        bondH: '保税仓的三种出库流向',
        bond: [['进入国内市场', '保税仓 → 一般贸易征税报关出库。按实际订单分批申报缴税。'], ['复运出境', '保税仓 → 申报后直接复运出境。全程免征国内环节税费，适合转口与库存调整。'], ['跨关区流转', '保税仓 → 其他海关特殊监管区域。在各保税场所之间调拨货物。']],
        bondNote: '保税是税款延后支付，不是免除。货物入仓时暂不缴关税与进口环节增值税，资金可以先用在生产与市场。'
      },
      wms: {
        h2: '板、箱、件，逐层可视，全程可溯',
        lead: 'DRACO ONE 是登泰的仓储管理系统。沿用客户现有的数据格式，作业流程、单据与报表都可按需求灵活定制。',
        formH: 'WMS 在线查询', formLead: '客户登录后可以查看：',
        can: ['实时库存（板、箱、件）', '入库与出库记录、单据', '入库影像与异常记录', '派送签收单'],
        f1: '客户账号', f2: '入仓号、PO 或箱号', btn: '查询', login: '登录 DRACO ONE',
        notice: '这是网站初稿，查询尚未连接 DRACO ONE。正式上线后，这里会跳转到系统登录页。',
        stepsH: '六个环节，全程扫码',
        steps: [['预约入库', '导入客户箱单，系统自动核对数量'], ['到仓登记', '车辆报到，打印板、箱 QR 标签'], ['扫码收货', '手持终端逐板逐箱点收，同步拍照存证'], ['上架定位', '扫描储位 QR，货物位置实时可查'], ['系统拣货', '系统指引储位，生成理货单'], ['验证出库', '扫码核对无误后放行，生成出仓单']],
        qcH: '由系统规则把关，不靠人工记忆',
        qc: [['库存精准到件', '板、箱、件三层库存架构，数量逐件可查。'], ['影像存证', '入库与破损状况均拍照归档，发生争议时有据可依。'], ['Hold 锁定', '破损货物或指定料号、批号自动锁定，防止误出。'], ['单据数量核对', '箱数、件数与合计不符实时示警，确认后方可建单。'], ['派送在线签收', '司机手机接单，送达后现场上传签收影像，无须等待纸质回单。'], ['报表自动发送', '每日库存报表按设定自动发送给指定收件人。']],
        langs: '系统界面支持繁体中文、简体中文与英文；泰国仓的单据与标签另含泰文。'
      },
      onb: { h2: '四步开始合作', steps: [['需求确认', '厘清货物类型、到货形态、进出频率及单据报表要求。'], ['系统配置', '建立客户主档及专属作业参数。'], ['格式对接', '确认箱单导入格式及单据、报表样张。'], ['试行上线', '首批货物实际验证流程，确认后正式运营。']] },
      ctWh: '仓储咨询'
    },

    en: {
      nav7: 'Warehousing', navWms: 'WMS online tracking',
      svcWh: { t: 'Warehousing', l: ['General and bonded storage', 'Consolidation, stuffing and devanning', 'E-commerce fulfilment', 'Repacking and labelling', 'Flatbed loading docks'], n: 'See the Warehousing page for floor area, equipment and value-added services at each site.' },
      wh: {
        h2: 'Warehouses next to the border and the ports',
        lead: 'Our warehouses in Hong Kong, Dongguan, Foshan and Thailand run on the same processes and document standards, so working across regions needs no re-learning.',
        sites: [
          { name: 'Hong Kong warehouse', tag: 'General storage · Consolidation · Ocean import', loc: '120 San Hing Tsuen, Lau Fau Shan Road, Yuen Long, New Territories, Hong Kong', alt: 'Inside the Draco Hong Kong warehouse',
            specs: [['42,600', 'sq ft of warehouse space'], ['13,000', 'sq ft of vehicle parking'], ['8', 'loading docks'], ['3 km', 'from Shenzhen Bay Port, about 10 minutes']],
            pts: ['Export cargo reaches Hong Kong International Airport and Kwai Chung container terminals in about 30 minutes', '4 forklifts and 5 pallet jacks', '24-hour CCTV with infrared night-vision security', 'Cargo covered by all-risks property insurance'] },
          { name: 'Dongguan general warehouse', tag: 'General storage · Consolidation · Devanning and delivery', loc: 'Area B, 1/F, No. 3 Tongying Storage, Baoshui Middle Road, Shatian Town, Dongguan', alt: 'Inside the Draco Dongguan general warehouse and its loading area',
            specs: [['1,550', 'sq m of storage space'], ['3 t', 'floor load per sq m'], ['8', 'dock doors, each with a dock leveller'], ['12 m', 'wide canopy plus a 5 m loading zone']],
            pts: ['Managed to the 8S standard', 'Full-coverage sprinklers, fire alarms and smoke detection', '24-hour CCTV inside, 24-hour security on the estate'] },
          { name: 'Dongguan bonded warehouse', tag: 'Bonded import storage · Export consolidation · Light processing', loc: 'Warehouse C, Building 1, Bonded Logistics Center, Shatian Town, Dongguan', alt: 'Inside the Draco Dongguan bonded warehouse',
            specs: [['1,300', 'sq m of storage space'], ['3 t', 'floor load per sq m'], ['4', 'dock doors, each with a dock leveller'], ['24-hour', 'CCTV and estate security']],
            pts: ['Overseas cargo is bonded on entry, deferring duty and VAT', 'Domestic cargo is treated as exported on entry and may qualify for export tax refund', 'Sorting, labelling, repacking, kitting and quality inspection'] },
          { name: 'Thailand warehouses', tag: 'Bonded · General · Pallet-slot management', loc: '[Address, floor area and dock count: to be added]', alt: '',
            specs: [['2 + 1', 'bonded and general warehouses'], ['Per pallet', 'own slot code for every pallet, assigned by the system'], ['FIFO', 'the exact pallet due out can be picked'], ['3 languages', 'documents and labels in Chinese, English and Thai']],
            pts: ['Inbound and outbound are pre-booked in DRACO ONE; the site scans in and out on handhelds', 'Every pallet is photographed at receiving'] }
        ],
        moreH: 'Other sites', more: [['Foshan warehouse', 'Bonded storage']],
        vasH: 'Processing and delivery done inside the warehouse',
        vas: [['Inventory management', 'Location planning, stock moves and inbound and outbound handling.'], ['Cargo inspection', 'Condition checks to the customer\'s standard.'], ['Repacking and re-marking', 'Batch repacking and new shipping marks and labels.'], ['Labelling and shrink-wrap', 'Labelling and shrink-wrapping for household goods and cosmetics, boxing and labelling for food.'],
          ['Consolidation and stuffing', 'Cargo from several suppliers loaded into one container to use the space fully.'], ['Devanning and delivery', 'Cargo sorted by consignee after devanning and delivered to each address.'], ['Commercial agency', 'Logistics-related commercial matters handled on your behalf.'], ['Scrap handling', 'Cargo disposal carried out to the required procedure.']],
        hubH: 'Holding stock in Hong Kong changes the cost of importing',
        hubLead: 'Suppliers deliver to the Hong Kong warehouse first. Cargo is then trucked into your China plants together as production needs it, or exported by sea or air to plants worldwide. The same model works for distributing finished goods.',
        hubCols: ['', 'Direct import from each supplier', 'Consolidated import via Hong Kong'],
        hubRows: [['Logistics cost', 'Each supplier sends its own truck, so transport costs more', 'Shared trucks lower the total freight'], ['Customs', 'One declaration per supplier', 'One combined declaration saves time and fees'], ['Inventory', 'Stock piles up at the plant; slow-moving parts must be shipped back or scrapped duty-paid', 'Import as production needs; slow-moving parts go straight back to the supplier from Hong Kong']],
        bondH: 'Three ways out of the bonded warehouse',
        bond: [['Into the domestic market', 'Bonded warehouse → duty-paid clearance under general trade. Declare and pay in batches as orders come in.'], ['Re-export', 'Bonded warehouse → declared and shipped out. No domestic duties or taxes, which suits transit trade and stock adjustments.'], ['Transfer between customs zones', 'Bonded warehouse → another special customs supervision area. Move cargo between bonded sites.']],
        bondNote: 'Bonding defers tax, it does not waive it. Duty and import VAT are not paid on entry, so the cash can go to production and sales first.'
      },
      wms: {
        h2: 'Pallet, carton, piece: visible at every level, traceable all the way',
        lead: 'DRACO ONE is Draco\'s warehouse management system. It works with the data formats you already use, and its workflows, documents and reports can be tailored to your needs.',
        formH: 'WMS online tracking', formLead: 'After signing in, customers can see:',
        can: ['Live stock by pallet, carton and piece', 'Inbound and outbound records and documents', 'Receiving photos and exception records', 'Proof of delivery'],
        f1: 'Customer account', f2: 'Inbound no., PO or carton no.', btn: 'Search', login: 'Sign in to DRACO ONE',
        notice: 'This is a draft of the website. Tracking is not yet connected to DRACO ONE. Once live, this will take you to the system sign-in page.',
        stepsH: 'Six steps, scanned at every one',
        steps: [['Inbound booking', 'Import the packing list; the system checks quantities'], ['Arrival check-in', 'Register the truck and print pallet and carton QR labels'], ['Scan to receive', 'Count each pallet and carton on a handheld, with photos'], ['Put-away', 'Scan the location QR so stock can be found at once'], ['System picking', 'The system directs the picker and issues a picking list'], ['Verified dispatch', 'Scan to confirm, then release with an outbound note']],
        qcH: 'Controls enforced by the system, not by memory',
        qc: [['Stock accurate to the piece', 'Three stock levels (pallet, carton, piece), each countable.'], ['Photo evidence', 'Receiving and damage are photographed and filed, so disputes can be settled on record.'], ['Hold lock', 'Damaged cargo or chosen part and batch numbers are locked automatically to prevent wrong shipments.'], ['Document quantity check', 'Mismatched carton, piece or total counts raise an alert before an order can be created.'], ['Online proof of delivery', 'Drivers take jobs on their phone and upload the signed receipt on site. No waiting for paper.'], ['Automatic reports', 'Daily stock reports are emailed to the recipients you set.']],
        langs: 'The system runs in Traditional Chinese, Simplified Chinese and English. Documents and labels at the Thailand warehouse also carry Thai.'
      },
      onb: { h2: 'Four steps to get started', steps: [['Confirm requirements', 'Cargo type, how it arrives, how often it moves, and the documents and reports you need.'], ['Configure the system', 'Set up the customer record and your operating parameters.'], ['Align formats', 'Agree the packing-list import format and sample documents and reports.'], ['Trial run', 'Run the first shipments through the process, then go live.']] },
      ctWh: 'Warehousing enquiries'
    },

    th: {
      nav7: 'คลังสินค้า', navWms: 'ตรวจสอบ WMS ออนไลน์',
      svcWh: { t: 'คลังสินค้า', l: ['คลังสินค้าทั่วไปและคลังทัณฑ์บน', 'รวมสินค้า บรรจุตู้ และเปิดตู้', 'กระจายสินค้าอีคอมเมิร์ซ', 'เปลี่ยนบรรจุภัณฑ์และติดฉลาก', 'ชานชาลาขนถ่ายสำหรับรถพื้นเรียบ'], n: 'ดูพื้นที่ อุปกรณ์ และบริการเสริมของแต่ละคลังได้ที่หน้า "คลังสินค้า"' },
      wh: {
        h2: 'คลังสินค้าใกล้ด่านชายแดนและท่าเรือ',
        lead: 'คลังสินค้าของเราในฮ่องกง ตงกวน ฝอซาน และประเทศไทยใช้ขั้นตอนการทำงานและมาตรฐานเอกสารเดียวกัน ทำงานข้ามภูมิภาคได้โดยไม่ต้องปรับตัวใหม่',
        sites: [
          { name: 'คลังสินค้าฮ่องกง', tag: 'คลังทั่วไป · รวมสินค้าและส่งต่อ · นำเข้าทางเรือ', loc: '120 San Hing Tsuen, Lau Fau Shan Road, Yuen Long, New Territories, Hong Kong', alt: 'ภายในคลังสินค้า Draco ฮ่องกง',
            specs: [['42,600', 'ตารางฟุต พื้นที่คลังสินค้า'], ['13,000', 'ตารางฟุต ลานจอดรถ'], ['8', 'ชานชาลาขนถ่ายสินค้า'], ['3 กม.', 'จากด่านเซินเจิ้นเบย์ ประมาณ 10 นาที']],
            pts: ['สินค้าส่งออกถึงสนามบินนานาชาติฮ่องกงและท่าเรือตู้สินค้าไควชุงในประมาณ 30 นาที', 'รถโฟล์คลิฟต์ 4 คัน และแฮนด์ลิฟต์ 5 คัน', 'กล้อง CCTV 24 ชั่วโมง พร้อมระบบกันขโมยอินฟราเรด', 'สินค้ามีประกันภัยทรัพย์สินแบบเสี่ยงภัยทุกชนิด'] },
          { name: 'คลังสินค้าทั่วไปตงกวน', tag: 'คลังทั่วไป · รวมสินค้าบรรจุตู้ · เปิดตู้และจัดส่ง', loc: 'Area B, 1/F, No. 3 Tongying Storage, Baoshui Middle Road, Shatian Town, Dongguan', alt: 'ภายในคลังสินค้าทั่วไป Draco ตงกวนและพื้นที่ขนถ่าย',
            specs: [['1,550', 'ตร.ม. พื้นที่จัดเก็บ'], ['3 ตัน', 'รับน้ำหนักต่อตารางเมตร'], ['8', 'ประตูคลัง พร้อมชานชาลาปรับระดับ'], ['12 ม.', 'หลังคากันฝนกว้าง และพื้นที่ขนถ่าย 5 ม.']],
            pts: ['บริหารตามมาตรฐาน 8S คลังสะอาดเป็นระเบียบ', 'ระบบสปริงเกลอร์อัตโนมัติ สัญญาณเตือนอัคคีภัย และตรวจจับควันครอบคลุมทั้งคลัง', 'CCTV ภายในคลัง 24 ชั่วโมง และ รปภ. ในนิคม 24 ชั่วโมง'] },
          { name: 'คลังทัณฑ์บนตงกวน', tag: 'จัดเก็บสินค้านำเข้าแบบทัณฑ์บน · รวมสินค้าส่งออก · แปรรูปอย่างง่าย', loc: 'Warehouse C, Building 1, Bonded Logistics Center, Shatian Town, Dongguan', alt: 'ภายในคลังทัณฑ์บน Draco ตงกวน',
            specs: [['1,300', 'ตร.ม. พื้นที่จัดเก็บ'], ['3 ตัน', 'รับน้ำหนักต่อตารางเมตร'], ['4', 'ประตูคลัง พร้อมชานชาลาปรับระดับ'], ['24 ชม.', 'CCTV และ รปภ. ในนิคม']],
            pts: ['สินค้าจากต่างประเทศเข้าคลังได้รับสิทธิ์ทัณฑ์บนทันที ชะลอการชำระอากรและภาษีมูลค่าเพิ่ม', 'สินค้าในประเทศเข้าคลังถือเสมือนส่งออก ขอคืนภาษีส่งออกได้เมื่อเข้าเงื่อนไข', 'คัดแยก ติดฉลาก เปลี่ยนบรรจุภัณฑ์ ประกอบและแบ่งบรรจุ และตรวจสอบคุณภาพ'] },
          { name: 'คลังสินค้าประเทศไทย', tag: 'คลังทัณฑ์บน · คลังทั่วไป · บริหารแบบตำแหน่งพาเลต', loc: '[ที่อยู่ พื้นที่ และจำนวนชานชาลา: รอเพิ่มเติม]', alt: '',
            specs: [['2 + 1', 'คลังทัณฑ์บนและคลังทั่วไป'], ['รายพาเลต', 'รหัสตำแหน่งแยกทุกพาเลต ระบบจัดตำแหน่งอัตโนมัติ'], ['FIFO', 'เข้าก่อนออกก่อน ระบุพาเลตที่ต้องเบิกได้'], ['3 ภาษา', 'เอกสารและฉลากภาษาจีน อังกฤษ และไทย']],
            pts: ['จองรับเข้าและจ่ายออกล่วงหน้าใน DRACO ONE หน้างานสแกนเข้า-ออกด้วยเครื่องมือถือ', 'ถ่ายภาพเก็บหลักฐานทุกพาเลตตอนรับเข้า'] }
        ],
        moreH: 'สาขาอื่น', more: [['คลังสินค้าฝอซาน', 'คลังทัณฑ์บน']],
        vasH: 'แปรรูปและจัดส่งได้ภายในคลัง',
        vas: [['บริหารสต็อก', 'วางแผนตำแหน่งจัดเก็บ จัดสรรสต็อก และงานรับเข้า-จ่ายออก'], ['ตรวจสอบสินค้า', 'ตรวจสภาพสินค้าตามมาตรฐานของลูกค้า'], ['เปลี่ยนบรรจุภัณฑ์และเครื่องหมาย', 'เปลี่ยนบรรจุภัณฑ์ ติดชิปปิ้งมาร์กและฉลากใหม่เป็นชุด'], ['ติดฉลากและหุ้มฟิล์ม', 'ติดฉลากและหุ้มฟิล์มสินค้าอุปโภคและเครื่องสำอาง บรรจุกล่องและติดฉลากอาหาร'],
          ['รวมสินค้าบรรจุตู้', 'รวมสินค้าจากซัพพลายเออร์หลายรายลงตู้เดียว ใช้พื้นที่ตู้ได้เต็มที่'], ['เปิดตู้และจัดส่ง', 'เปิดตู้แล้วคัดแยกตามผู้รับ จัดส่งไปยังแต่ละปลายทาง'], ['ตัวแทนด้านธุรกิจ', 'ดำเนินเรื่องทางธุรกิจที่เกี่ยวกับโลจิสติกส์แทนลูกค้า'], ['จัดการสินค้าทำลาย', 'ดำเนินการทำลายสินค้าตามระเบียบ']],
        hubH: 'เก็บสต็อกไว้ที่ฮ่องกง ต้นทุนนำเข้าจะเปลี่ยนไป',
        hubLead: 'ซัพพลายเออร์หลายรายส่งสินค้าเข้าคลังฮ่องกงก่อน จากนั้นรวมรถนำเข้าไปยังโรงงานในจีนตามความต้องการผลิต หรือส่งออกทางเรือและอากาศไปยังโรงงานทั่วโลกได้โดยตรง ใช้กับการกระจายสินค้าสำเร็จรูปได้เช่นกัน',
        hubCols: ['', 'นำเข้าตรงจากซัพพลายเออร์แต่ละราย', 'รวมสินค้านำเข้าผ่านฮ่องกง'],
        hubRows: [['ต้นทุนโลจิสติกส์', 'ซัพพลายเออร์แต่ละรายส่งรถแยกกัน ค่าขนส่งสูง', 'รวมรถขนส่ง ค่าขนส่งรวมลดลง'], ['พิธีการศุลกากร', 'ยื่นใบขนแยกตามซัพพลายเออร์', 'ยื่นใบขนรวม ประหยัดเวลาและค่าใช้จ่าย'], ['บริหารสต็อก', 'สต็อกค้างที่โรงงาน วัสดุค้างสต็อกต้องส่งกลับหรือเสียภาษีแล้วทำลาย', 'นำเข้าตามความต้องการผลิต วัสดุค้างสต็อกส่งคืนซัพพลายเออร์จากฮ่องกงได้โดยตรง']],
        bondH: 'สามเส้นทางออกจากคลังทัณฑ์บน',
        bond: [['เข้าสู่ตลาดในประเทศ', 'คลังทัณฑ์บน → ผ่านพิธีการแบบการค้าทั่วไปและชำระภาษี ยื่นและชำระเป็นงวดตามคำสั่งซื้อจริง'], ['ส่งกลับออกไปต่างประเทศ', 'คลังทัณฑ์บน → ยื่นแล้วส่งออกโดยตรง ไม่ต้องเสียภาษีในประเทศ เหมาะกับการค้าผ่านแดนและการปรับสต็อก'], ['โอนย้ายข้ามเขตศุลกากร', 'คลังทัณฑ์บน → เขตกำกับดูแลพิเศษทางศุลกากรอื่น โอนย้ายสินค้าระหว่างสถานที่ทัณฑ์บน']],
        bondNote: 'ทัณฑ์บนคือการเลื่อนชำระภาษี ไม่ใช่การยกเว้น สินค้าเข้าคลังยังไม่ต้องชำระอากรและภาษีมูลค่าเพิ่มนำเข้า จึงนำเงินทุนไปใช้กับการผลิตและการตลาดได้ก่อน'
      },
      wms: {
        h2: 'พาเลต กล่อง ชิ้น มองเห็นทุกระดับ ตรวจสอบย้อนกลับได้ตลอดทาง',
        lead: 'DRACO ONE คือระบบบริหารคลังสินค้าของ Draco ใช้รูปแบบข้อมูลเดิมของลูกค้าได้ ขั้นตอนการทำงาน เอกสาร และรายงานปรับแต่งตามความต้องการได้',
        formH: 'ตรวจสอบ WMS ออนไลน์', formLead: 'เมื่อเข้าสู่ระบบ ลูกค้าดูได้:',
        can: ['สต็อกแบบเรียลไทม์ (พาเลต กล่อง ชิ้น)', 'ประวัติและเอกสารรับเข้า-จ่ายออก', 'ภาพถ่ายตอนรับเข้าและบันทึกความผิดปกติ', 'ใบเซ็นรับสินค้า'],
        f1: 'บัญชีลูกค้า', f2: 'เลขที่รับเข้า PO หรือเลขกล่อง', btn: 'ค้นหา', login: 'เข้าสู่ระบบ DRACO ONE',
        notice: 'นี่คือเว็บไซต์ฉบับร่าง การค้นหายังไม่ได้เชื่อมต่อกับ DRACO ONE เมื่อเปิดใช้งานจริง ส่วนนี้จะนำไปยังหน้าเข้าสู่ระบบ',
        stepsH: 'หกขั้นตอน สแกนทุกขั้น',
        steps: [['จองรับเข้า', 'นำเข้า Packing List ระบบตรวจสอบจำนวนอัตโนมัติ'], ['ลงทะเบียนถึงคลัง', 'ลงทะเบียนรถ พิมพ์ฉลาก QR ของพาเลตและกล่อง'], ['สแกนรับสินค้า', 'นับทีละพาเลตทีละกล่องด้วยเครื่องมือถือ พร้อมถ่ายภาพ'], ['จัดเก็บเข้าตำแหน่ง', 'สแกน QR ตำแหน่งจัดเก็บ ค้นหาตำแหน่งสินค้าได้ทันที'], ['หยิบสินค้าตามระบบ', 'ระบบชี้ตำแหน่ง และออกใบจัดสินค้า'], ['ตรวจสอบก่อนจ่ายออก', 'สแกนยืนยันถูกต้องแล้วจึงปล่อย พร้อมออกใบจ่ายสินค้า']],
        qcH: 'ควบคุมด้วยกฎของระบบ ไม่พึ่งความจำของคน',
        qc: [['สต็อกแม่นยำถึงระดับชิ้น', 'โครงสร้างสต็อกสามระดับ พาเลต กล่อง ชิ้น ตรวจนับได้ทุกชิ้น'], ['หลักฐานภาพถ่าย', 'ถ่ายภาพตอนรับเข้าและสินค้าเสียหายเก็บเข้าแฟ้ม มีหลักฐานเมื่อเกิดข้อโต้แย้ง'], ['ล็อก Hold', 'สินค้าเสียหาย หรือรหัสสินค้าและล็อตที่กำหนด จะถูกล็อกอัตโนมัติ ป้องกันจ่ายผิด'], ['ตรวจจำนวนในเอกสาร', 'จำนวนกล่อง ชิ้น และยอดรวมไม่ตรงกัน ระบบเตือนทันที ต้องยืนยันก่อนจึงสร้างรายการได้'], ['เซ็นรับออนไลน์', 'คนขับรับงานผ่านมือถือ ส่งถึงแล้วอัปโหลดภาพใบเซ็นรับหน้างาน ไม่ต้องรอเอกสารกระดาษ'], ['ส่งรายงานอัตโนมัติ', 'รายงานสต็อกรายวันส่งอีเมลถึงผู้รับที่กำหนดโดยอัตโนมัติ']],
        langs: 'หน้าจอระบบรองรับภาษาจีนตัวเต็ม จีนตัวย่อ และอังกฤษ เอกสารและฉลากของคลังประเทศไทยมีภาษาไทยด้วย'
      },
      onb: { h2: 'เริ่มต้นร่วมงานในสี่ขั้นตอน', steps: [['ยืนยันความต้องการ', 'ประเภทสินค้า รูปแบบการส่งมา ความถี่รับเข้า-จ่ายออก และเอกสารรายงานที่ต้องการ'], ['ตั้งค่าระบบ', 'สร้างข้อมูลหลักของลูกค้าและพารามิเตอร์การทำงานเฉพาะ'], ['เชื่อมรูปแบบข้อมูล', 'ยืนยันรูปแบบนำเข้า Packing List และตัวอย่างเอกสารกับรายงาน'], ['ทดลองใช้งานจริง', 'ทดสอบขั้นตอนกับสินค้าล็อตแรก ยืนยันแล้วจึงเริ่มดำเนินการจริง']] },
      ctWh: 'สอบถามเรื่องคลังสินค้า'
    }
  };
  Object.keys(M).forEach(function (l) {
    var T = window.I18N[l], m = M[l];
    T.nav7 = m.nav7; T.navWms = m.navWms; T.wh = m.wh; T.wms = m.wms; T.onb = m.onb; T.ctWh = m.ctWh;
    T.svc.wh = m.svcWh;
    T.wh.sites.forEach(function (s, i) { s.img = IMG[i] || []; });
  });
})();
