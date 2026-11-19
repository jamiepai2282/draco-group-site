// 三種語言的全部文字。新增語言時，複製一份 en 區塊改掉內容即可。
window.I18N = {
  hant: {
    htmlLang: 'zh-Hant',
    navAbout: '關於集團', entries: [['服務項目', '海運、空運、陸運、報關與專案型服務'], ['倉儲據點', '香港、東莞、佛山、泰國的倉庫與增值服務'], ['DRACO ONE', '倉儲管理系統與 WMS 線上查詢'], ['關於集團', '全球據點、資質認證與永續 ESG']],
    nav1: '集團品牌', nav2: '服務項目', nav3: '全球據點', nav4: '資質認證', nav5: '永續 ESG', nav6: '聯絡我們',
    heroEye: 'DRACO GROUP 登泰集團',
    heroH1: '全方位物流<br><em>專業團隊</em>',
    heroLead: '致力於為企業提供一站式供應鏈解決方案的綜合物流服務企業。從 2010 年東莞起步，如今集團公司遍及兩岸三地、東南亞與美國。',
    modes: ['海運', '空運', '陸運', '倉儲', '報關'],
    cta1: '洽詢報價', cta2: '看服務項目',
    st1: '東莞登泰成立', st2: '家集團公司', st3: '個物流品牌', st4: '全球服務據點',
    brH2: '集團品牌', brLead: '誠信當責，邁向全球。', brPh: '[三個品牌各自的定位說明，請補充]',
    bDraco: '登泰國際物流', bSeal: '崧盛', bRhino: '翃熙',
    brandShort: { draco: '登泰', seal: '崧盛', rhino: '翃熙' },
    city: { dg: '東莞', hk: '香港', khh: '高雄', gz: '廣州', ny: '紐約', sg: '新加坡', sz: '深圳', th: '泰國', txg: '台中', bn: '北寧', jn: '濟南', tw: '台灣' },
    place: { dg: '中國 東莞', hk: '香港', khh: '台灣 高雄', gz: '中國 廣州', ny: '美國 紐約', sg: '新加坡', sz: '中國 深圳', th: '泰國', txg: '台灣 台中', bn: '越南 北寧', jn: '中國 濟南' },
    coName: function (city, brand) { return city + brand; },
    svH2: '海、空、陸、倉、關，一站到位',
    svc: {
      sea: { t: '海運', l: ['LCL 與 FCL（併櫃與整櫃運輸）', '訂艙代理', '門到門服務', '三角貿易業務', '危險品運輸', '特殊貨物處理（散雜貨、散裝船貨物）', '海鐵聯運（海運＋中歐鐵路）'], n: '搭配拖車運輸、配送、倉儲、報關、檢驗、棧板包裝及保險服務。' },
      air: { t: '空運', l: ['快遞服務（DHL / UPS / FedEx）', '門到門服務', '三角貿易業務', '海空聯運', '危險品運輸'], n: '搭配拖車運輸、配送、倉儲、報關、檢驗、棧板包裝及保險服務。' },
      land: { t: '陸運', l: ['門到門拖卡服務', '美國 ↔ 墨西哥', '美國 ↔ 加拿大', '東南亞跨境卡車運輸', '中歐班列', '保稅倉庫服務'], n: '價格優勢、準時送達，銜接全球服務網絡。' },
      wh: { t: '倉儲', l: ['倉儲服務', '平板裝卸平台', '電子商務配送', '重新包裝與貼標', '拆箱、裝箱與快速收貨'], n: '[各地倉庫位置與坪數，請補充]' },
      cus: { t: '報關', l: ['報關及貨物檢驗', '商檢認證', '食品與飲料', '植物及活體動物運輸', '個人物品與行李運輸'], n: '集團自有報關行，並具 AEO 報關業認證。' }
    },
    extraLabel: '專案型服務', extra: ['整廠輸送', '大件運輸', '參展業務', '危險品運輸'],
    nwH2: '從東莞出發的 16 年', nwLead: '依成立時間排列，可用品牌篩選。', all: '全部',
    trH2: '資質與認證', trLead: '跨境物流靠的是合規。以下是集團目前持有的資格與會員身分。',
    certs: [
      ['AEO 安全認證優質企業', '報關業、承攬業，2023 年 9 月生效'], ['C-TPAT', '美國海關商貿反恐聯盟'], ['美國聯邦海事委員會 FMC', '登記'],
      ['NVOCC 無船承運人', '中國大陸'], ['大陸一級貨代', 'NO. 10043458'], ['IATA 空運危險品承攬許可', '人員持有危險品訓練證書'],
      ['WCA 會員', 'NO. 105948'], ['JC TRANS 會員', 'NO. 109098'], ['道路運輸經營許可', '中國大陸'],
      ['食品經營許可', '中國大陸'], ['自有報關行', '報關報檢不外包'], ['2025 Million Dollar Sales Award', '中華航空頒發']
    ],
    paH3: '合作船公司與航空公司',
    esH2: '永續 ESG',
    esg: [
      ['E', '環境保護', ['合作船公司與航空公司已導入生質燃料與永續航空燃料（SAF）。'], '[集團自身的減碳或無紙化作法，請補充]'],
      ['S', '社會責任', ['2024 年舉辦「歲末傳愛、耶誕送暖」，完成近 400 名弱勢家庭孩童的耶誕願望。', '贊助高雄六龜荖濃國小合唱團參加紐西蘭世界合唱大賽。', '年度員工健康檢查補助，以及登泰家庭親子日。'], ''],
      ['G', '公司治理', ['以系統管理進出口作業、人事與內部流程。'], '[內部稽核、風險管理等制度，請補充]']
    ],
    ctH2: '有貨要走？跟我們說一聲', ctP: '告訴我們起運地、目的地與貨物內容，由離你最近的據點回覆。',
    ctTel: '電話', ctMail: '信箱', ctAddr: '地址', ctWeb: '網站',
    ctTelPh: '[各據點電話]', ctMailPh: '[對外聯絡信箱]', ctAddrPh: '[總部與各據點地址]',
    foot: 'DRACO GROUP · 登泰國際物流股份有限公司 · 誠信當責，邁向全球',
    hub: '珠三角', hubSub: '東莞・深圳・廣州・香港', mapLabel: '集團據點航線示意圖'
  },

  hans: {
    htmlLang: 'zh-Hans',
    navAbout: '关于集团', entries: [['服务项目', '海运、空运、陆运、报关与项目型服务'], ['仓储网点', '香港、东莞、佛山、泰国的仓库与增值服务'], ['DRACO ONE', '仓储管理系统与 WMS 在线查询'], ['关于集团', '全球网点、资质认证与可持续 ESG']],
    nav1: '集团品牌', nav2: '服务项目', nav3: '全球网点', nav4: '资质认证', nav5: '可持续 ESG', nav6: '联系我们',
    heroEye: 'DRACO GROUP 登泰集团',
    heroH1: '全方位物流<br><em>专业团队</em>',
    heroLead: '致力于为企业提供一站式供应链解决方案的综合物流服务企业。从 2010 年东莞起步，如今集团公司遍及两岸三地、东南亚与美国。',
    modes: ['海运', '空运', '陆运', '仓储', '报关'],
    cta1: '咨询报价', cta2: '查看服务项目',
    st1: '东莞登泰成立', st2: '家集团公司', st3: '个物流品牌', st4: '全球服务网点',
    brH2: '集团品牌', brLead: '诚信当责，迈向全球。', brPh: '[三个品牌各自的定位说明，请补充]',
    bDraco: '登泰国际物流', bSeal: '崧盛', bRhino: '翃熙',
    brandShort: { draco: '登泰', seal: '崧盛', rhino: '翃熙' },
    city: { dg: '东莞', hk: '香港', khh: '高雄', gz: '广州', ny: '纽约', sg: '新加坡', sz: '深圳', th: '泰国', txg: '台中', bn: '北宁', jn: '济南', tw: '台湾' },
    place: { dg: '中国 东莞', hk: '香港', khh: '台湾 高雄', gz: '中国 广州', ny: '美国 纽约', sg: '新加坡', sz: '中国 深圳', th: '泰国', txg: '台湾 台中', bn: '越南 北宁', jn: '中国 济南' },
    coName: function (city, brand) { return city + brand; },
    svH2: '海、空、陆、仓、关，一站到位',
    svc: {
      sea: { t: '海运', l: ['LCL 与 FCL（拼箱与整箱运输）', '订舱代理', '门到门服务', '三角贸易业务', '危险品运输', '特殊货物处理（散杂货、散装船货物）', '海铁联运（海运＋中欧铁路）'], n: '配套拖车运输、配送、仓储、报关、检验、托盘包装及保险服务。' },
      air: { t: '空运', l: ['快递服务（DHL / UPS / FedEx）', '门到门服务', '三角贸易业务', '海空联运', '危险品运输'], n: '配套拖车运输、配送、仓储、报关、检验、托盘包装及保险服务。' },
      land: { t: '陆运', l: ['门到门拖卡服务', '美国 ↔ 墨西哥', '美国 ↔ 加拿大', '东南亚跨境卡车运输', '中欧班列', '保税仓库服务'], n: '价格优势、准时送达，衔接全球服务网络。' },
      wh: { t: '仓储', l: ['仓储服务', '平板装卸平台', '电子商务配送', '重新包装与贴标', '拆箱、装箱与快速收货'], n: '[各地仓库位置与面积，请补充]' },
      cus: { t: '报关', l: ['报关及货物检验', '商检认证', '食品与饮料', '植物及活体动物运输', '个人物品与行李运输'], n: '集团自有报关行，并具 AEO 报关业认证。' }
    },
    extraLabel: '项目型服务', extra: ['整厂输送', '大件运输', '参展业务', '危险品运输'],
    nwH2: '从东莞出发的 16 年', nwLead: '按成立时间排列，可按品牌筛选。', all: '全部',
    trH2: '资质与认证', trLead: '跨境物流靠的是合规。以下是集团目前持有的资质与会员身份。',
    certs: [
      ['AEO 安全认证优质企业', '报关业、承揽业，2023 年 9 月生效'], ['C-TPAT', '美国海关商贸反恐联盟'], ['美国联邦海事委员会 FMC', '登记'],
      ['NVOCC 无船承运人', '中国大陆'], ['大陆一级货代', 'NO. 10043458'], ['IATA 空运危险品承揽许可', '人员持有危险品培训证书'],
      ['WCA 会员', 'NO. 105948'], ['JC TRANS 会员', 'NO. 109098'], ['道路运输经营许可', '中国大陆'],
      ['食品经营许可', '中国大陆'], ['自有报关行', '报关报检不外包'], ['2025 Million Dollar Sales Award', '中华航空颁发']
    ],
    paH3: '合作船公司与航空公司',
    esH2: '可持续发展 ESG',
    esg: [
      ['E', '环境保护', ['合作船公司与航空公司已采用生物燃料与可持续航空燃料（SAF）。'], '[集团自身的减碳或无纸化做法，请补充]'],
      ['S', '社会责任', ['2024 年举办“岁末传爱、圣诞送暖”，完成近 400 名弱势家庭儿童的圣诞愿望。', '赞助高雄六龟荖浓小学合唱团参加新西兰世界合唱大赛。', '年度员工健康检查补助，以及登泰家庭亲子日。'], ''],
      ['G', '公司治理', ['以系统管理进出口作业、人事与内部流程。'], '[内部稽核、风险管理等制度，请补充]']
    ],
    ctH2: '有货要走？跟我们说一声', ctP: '告诉我们起运地、目的地与货物内容，由离你最近的网点回复。',
    ctTel: '电话', ctMail: '邮箱', ctAddr: '地址', ctWeb: '网站',
    ctTelPh: '[各网点电话]', ctMailPh: '[对外联系邮箱]', ctAddrPh: '[总部与各网点地址]',
    foot: 'DRACO GROUP · 登泰国际物流股份有限公司 · 诚信当责，迈向全球',
    hub: '珠三角', hubSub: '东莞・深圳・广州・香港', mapLabel: '集团网点航线示意图'
  },

  en: {
    htmlLang: 'en',
    navAbout: 'About', entries: [['Services', 'Ocean, air, trucking, customs and project services'], ['Warehousing', 'Warehouses and value-added services in Hong Kong, Dongguan, Foshan and Thailand'], ['DRACO ONE', 'Warehouse management system and WMS online tracking'], ['About the group', 'Network, credentials and ESG']],
    nav1: 'Brands', nav2: 'Services', nav3: 'Network', nav4: 'Credentials', nav5: 'ESG', nav6: 'Contact',
    heroEye: 'DRACO GROUP',
    heroH1: 'Full-service<br><em>logistics team</em>',
    heroLead: 'An integrated logistics group providing one-stop supply chain solutions. Founded in Dongguan in 2010, our companies now span mainland China, Hong Kong, Taiwan, Southeast Asia and the United States.',
    modes: ['Ocean', 'Air', 'Trucking', 'Warehousing', 'Customs'],
    cta1: 'Get a quote', cta2: 'See services',
    st1: 'Founded in Dongguan', st2: 'Group companies', st3: 'Logistics brands', st4: 'Service locations worldwide',
    brH2: 'Our brands', brLead: 'Integrity and accountability, reaching the world.', brPh: '[Positioning of each brand: to be added]',
    bDraco: 'Draco Logistics', bSeal: 'Seal Global', bRhino: 'H.Rhino',
    brandShort: { draco: 'Draco', seal: 'Seal Global', rhino: 'H.Rhino' },
    city: { dg: 'Dongguan', hk: 'Hong Kong', khh: 'Kaohsiung', gz: 'Guangzhou', ny: 'New York', sg: 'Singapore', sz: 'Shenzhen', th: 'Thailand', txg: 'Taichung', bn: 'Bac Ninh', jn: 'Jinan', tw: 'Taiwan' },
    place: { dg: 'Dongguan, China', hk: 'Hong Kong', khh: 'Kaohsiung, Taiwan', gz: 'Guangzhou, China', ny: 'New York, USA', sg: 'Singapore', sz: 'Shenzhen, China', th: 'Thailand', txg: 'Taichung, Taiwan', bn: 'Bac Ninh, Vietnam', jn: 'Jinan, China' },
    coName: function (city, brand) { return brand + ' ' + city; },
    svH2: 'Ocean, air, land, warehousing and customs in one place',
    svc: {
      sea: { t: 'Ocean freight', l: ['LCL and FCL', 'Booking agency', 'Door-to-door service', 'Triangular trade', 'Dangerous goods', 'Special cargo (break bulk and bulk)', 'Sea-rail intermodal (ocean + China-Europe rail)'], n: 'Supported by drayage, delivery, warehousing, customs clearance, inspection, palletizing and insurance.' },
      air: { t: 'Air freight', l: ['Express (DHL / UPS / FedEx)', 'Door-to-door service', 'Triangular trade', 'Sea-air intermodal', 'Dangerous goods'], n: 'Supported by drayage, delivery, warehousing, customs clearance, inspection, palletizing and insurance.' },
      land: { t: 'Trucking and rail', l: ['Door-to-door trucking', 'USA ↔ Mexico', 'USA ↔ Canada', 'Cross-border trucking in Southeast Asia', 'China-Europe rail', 'Bonded warehouse service'], n: 'Competitive pricing and on-time delivery, connected to our global network.' },
      wh: { t: 'Warehousing', l: ['Storage', 'Flatbed loading docks', 'E-commerce fulfilment', 'Repacking and labelling', 'Devanning, stuffing and fast receiving'], n: '[Warehouse locations and floor area: to be added]' },
      cus: { t: 'Customs', l: ['Customs clearance and cargo inspection', 'Commodity inspection certification', 'Food and beverages', 'Plants and live animals', 'Personal effects and baggage'], n: 'In-house customs brokerage, AEO-certified as a customs broker.' }
    },
    extraLabel: 'Project services', extra: ['Plant relocation', 'Oversized cargo', 'Exhibition logistics', 'Dangerous goods'],
    nwH2: '16 years, starting from Dongguan', nwLead: 'In order of founding. Filter by brand.', all: 'All',
    trH2: 'Licences and certifications', trLead: 'Cross-border logistics runs on compliance. These are the licences and memberships the group holds.',
    certs: [
      ['AEO (Authorized Economic Operator)', 'Customs broker and freight forwarder, effective September 2023'], ['C-TPAT', 'Customs-Trade Partnership Against Terrorism'], ['US Federal Maritime Commission (FMC)', 'Registered'],
      ['NVOCC', 'Mainland China'], ['Class A freight forwarder', 'Mainland China, NO. 10043458'], ['IATA dangerous goods by air', 'Staff hold DG training certificates'],
      ['WCA member', 'NO. 105948'], ['JC TRANS member', 'NO. 109098'], ['Road transport operating licence', 'Mainland China'],
      ['Food business licence', 'Mainland China'], ['In-house customs brokerage', 'Clearance and inspection handled by our own team'], ['2025 Million Dollar Sales Award', 'Awarded by China Airlines']
    ],
    paH3: 'Carrier and airline partners',
    esH2: 'Sustainability',
    esg: [
      ['E', 'Environment', ['Our carrier and airline partners have adopted biofuel and sustainable aviation fuel (SAF).'], "[The group's own carbon-reduction or paperless practices: to be added]"],
      ['S', 'Social', ['In 2024 our year-end charity drive fulfilled Christmas wishes for nearly 400 children from disadvantaged families.', 'Sponsored the Laonong Elementary School choir from Liouguei, Kaohsiung, to compete at the World Choir Games in New Zealand.', 'Annual health check subsidy for staff, and the Draco family day.'], ''],
      ['G', 'Governance', ['Import-export operations, HR and internal workflows run on dedicated systems.'], '[Internal audit and risk management policies: to be added]']
    ],
    ctH2: 'Have cargo to move? Talk to us', ctP: 'Tell us the origin, destination and cargo details, and the nearest office will get back to you.',
    ctTel: 'Phone', ctMail: 'Email', ctAddr: 'Address', ctWeb: 'Website',
    ctTelPh: '[Office phone numbers]', ctMailPh: '[Contact email]', ctAddrPh: '[Head office and branch addresses]',
    foot: 'DRACO GROUP · Draco Logistics Co., Ltd. · Integrity and accountability, reaching the world',
    hub: 'Pearl River Delta', hubSub: 'Dongguan · Shenzhen · Guangzhou · Hong Kong', mapLabel: 'Route map of group locations'
  }
};
