// 文案：標語、為什麼選登泰、各服務一句話、關於集團、各頁底部的行動呼籲
(function () {
  var C = {
    hant: {
      slogan: '把複雜的留給我們，把準時的交給你。',
      whyH2: '為什麼把貨交給登泰',
      why: [['一個窗口，走完全程', '海運、空運、陸運、倉儲、報關由同一個團隊安排，不必在多家業者之間來回確認。'], ['自己報關，自己負責', '集團有自有報關行，並通過 AEO 安全認證，通關環節不外包。'], ['貨到哪裡，人就在哪裡', '14 家集團公司分布兩岸三地、東南亞與美國，當地有人接手、有人回覆。'], ['看得到，才放心', 'DRACO ONE 讓庫存精準到件，入庫有影像、派送有簽收，隨時查得到。']],
      svLead: '不管貨從哪裡來、要到哪裡去，登泰都能把中間每一段接起來。',
      pitch: { sea: '整櫃、併櫃到散雜貨都接，從訂艙到送達門口一次安排。', air: '趕時間的貨走空運，更趕的走快遞，也能海空聯運兼顧時效與成本。', land: '從美墨、美加跨境拖卡，到東南亞卡車與中歐班列，陸路也能跨國。', wh: '貨不只是放著，還能在倉內檢驗、換包裝、集拼後直接出貨。', cus: '自有報關行處理報關與檢驗，食品、動植物等特殊品項也能辦理。' },
      abH2: '關於登泰集團',
      abP: '2010 年在東莞成立第一家公司，之後陸續在香港、台灣、廣州、紐約、深圳、濟南、新加坡、越南與泰國設立公司，並發展出登泰、崧盛、翃熙三個品牌。',
      vals: [['公司願景', '全方位物流專業團隊'], ['公司理念', '致力於為企業提供一站式供應鏈解決方案的綜合物流服務企業'], ['企業文化', '誠信當責，邁向全球']],
      cta: { services: ['不確定該走海運還是空運？', '把貨物尺寸、重量和交期告訴我們，我們幫你比較方案。'], warehousing: ['想來看倉？', '歡迎預約參觀，或先告訴我們你的貨物類型與進出頻率。'], 'draco-one': ['想看系統實際畫面？', '我們可以用你的箱單格式，示範一次入庫到出庫。'], about: ['想和我們合作？', '無論是客戶、海外代理或供應商，都歡迎聯絡。'] }
    },
    hans: {
      slogan: '把复杂的留给我们，把准时的交给你。',
      whyH2: '为什么把货交给登泰',
      why: [['一个窗口，走完全程', '海运、空运、陆运、仓储、报关由同一个团队安排，不必在多家服务商之间来回确认。'], ['自己报关，自己负责', '集团有自有报关行，并通过 AEO 安全认证，通关环节不外包。'], ['货到哪里，人就在哪里', '14 家集团公司分布两岸三地、东南亚与美国，当地有人接手、有人回复。'], ['看得到，才放心', 'DRACO ONE 让库存精准到件，入库有影像、派送有签收，随时查得到。']],
      svLead: '不管货从哪里来、要到哪里去，登泰都能把中间每一段接起来。',
      pitch: { sea: '整箱、拼箱到散杂货都接，从订舱到送达门口一次安排。', air: '赶时间的货走空运，更赶的走快递，也能海空联运兼顾时效与成本。', land: '从美墨、美加跨境拖卡，到东南亚卡车与中欧班列，陆路也能跨国。', wh: '货不只是放着，还能在仓内检验、换包装、集拼后直接出货。', cus: '自有报关行处理报关与检验，食品、动植物等特殊品类也能办理。' },
      abH2: '关于登泰集团',
      abP: '2010 年在东莞成立第一家公司，之后陆续在香港、台湾、广州、纽约、深圳、济南、新加坡、越南与泰国设立公司，并发展出登泰、崧盛、翃熙三个品牌。',
      vals: [['公司愿景', '全方位物流专业团队'], ['公司理念', '致力于为企业提供一站式供应链解决方案的综合物流服务企业'], ['企业文化', '诚信当责，迈向全球']],
      cta: { services: ['不确定该走海运还是空运？', '把货物尺寸、重量和交期告诉我们，我们帮你比较方案。'], warehousing: ['想来看仓？', '欢迎预约参观，或先告诉我们你的货物类型与进出频率。'], 'draco-one': ['想看系统实际界面？', '我们可以用你的箱单格式，演示一次入库到出库。'], about: ['想和我们合作？', '无论是客户、海外代理还是供应商，都欢迎联系。'] }
    },
    en: {
      slogan: 'Leave the complexity to us. You get the on-time delivery.',
      whyH2: 'Why ship with Draco',
      why: [['One contact, the whole journey', 'Ocean, air, trucking, warehousing and customs are arranged by one team, so you are not chasing several providers.'], ['We clear customs ourselves', 'The group runs its own customs brokerage and is AEO certified. Clearance is not outsourced.'], ['People where your cargo is', '14 group companies across mainland China, Hong Kong, Taiwan, Southeast Asia and the US, with local staff to take over and answer.'], ['You can see it', 'DRACO ONE tracks stock to the piece, with photos at receiving and signed proof of delivery you can check any time.']],
      svLead: 'Wherever your cargo starts and wherever it is going, Draco connects every leg in between.',
      pitch: { sea: 'From full containers and LCL to break bulk, booked and delivered to the door in one arrangement.', air: 'Air for urgent cargo, express for the most urgent, and sea-air when you need to balance speed and cost.', land: 'Cross-border trucking between the US, Mexico and Canada, trucks across Southeast Asia and rail to Europe.', wh: 'Cargo does not just sit. It can be inspected, repacked and consolidated in the warehouse, then shipped out.', cus: 'Our own brokerage handles clearance and inspection, including food, plants and live animals.' },
      abH2: 'About Draco Group',
      abP: 'The first company opened in Dongguan in 2010. Companies followed in Hong Kong, Taiwan, Guangzhou, New York, Shenzhen, Jinan, Singapore, Vietnam and Thailand, under three brands: Draco, Seal Global and H.Rhino.',
      vals: [['Vision', 'A full-service logistics team'], ['Mission', 'An integrated logistics group providing one-stop supply chain solutions'], ['Culture', 'Integrity and accountability, reaching the world']],
      cta: { services: ['Not sure whether to ship by sea or air?', 'Tell us the size, weight and deadline, and we will compare the options for you.'], warehousing: ['Want to see a warehouse?', 'Book a visit, or tell us your cargo type and how often it moves.'], 'draco-one': ['Want to see the system in use?', 'We can run a demo from receiving to dispatch using your own packing-list format.'], about: ['Want to work with us?', 'Customers, overseas agents and suppliers are all welcome to get in touch.'] }
    },
    th: {
      slogan: 'เรื่องยุ่งยากให้เราจัดการ คุณรอรับสินค้าตรงเวลา',
      whyH2: 'ทำไมจึงฝากสินค้าไว้กับ Draco',
      why: [['ติดต่อจุดเดียว ครบทั้งเส้นทาง', 'ทางเรือ ทางอากาศ ทางบก คลังสินค้า และศุลกากร จัดการโดยทีมเดียว ไม่ต้องตามงานกับผู้ให้บริการหลายราย'], ['ดำเนินพิธีการศุลกากรเอง', 'กลุ่มบริษัทมีตัวแทนออกของของตนเองและได้รับการรับรอง AEO ไม่จ้างภายนอกทำพิธีการ'], ['สินค้าไปถึงไหน เรามีคนอยู่ที่นั่น', 'บริษัทในเครือ 14 แห่งในจีนแผ่นดินใหญ่ ฮ่องกง ไต้หวัน เอเชียตะวันออกเฉียงใต้ และสหรัฐอเมริกา มีทีมท้องถิ่นรับช่วงและตอบกลับ'], ['มองเห็นได้ จึงวางใจ', 'DRACO ONE ติดตามสต็อกถึงระดับชิ้น มีภาพถ่ายตอนรับเข้าและใบเซ็นรับ ตรวจสอบได้ตลอดเวลา']],
      svLead: 'ไม่ว่าสินค้าจะมาจากที่ใดและไปที่ใด Draco เชื่อมทุกช่วงระหว่างทางให้คุณ',
      pitch: { sea: 'รับทั้งตู้เต็ม LCL และสินค้า Break Bulk จัดการตั้งแต่จองระวางจนถึงหน้าประตู', air: 'สินค้าเร่งด่วนไปทางอากาศ ด่วนกว่านั้นใช้บริการด่วน หรือใช้เรือต่ออากาศเพื่อสมดุลเวลาและต้นทุน', land: 'รถบรรทุกข้ามแดนสหรัฐฯ เม็กซิโก แคนาดา รถบรรทุกในเอเชียตะวันออกเฉียงใต้ และรถไฟจีน-ยุโรป', wh: 'สินค้าไม่ได้แค่วางเก็บ ตรวจสอบ เปลี่ยนบรรจุภัณฑ์ และรวมสินค้าได้ในคลัง แล้วส่งออกได้ทันที', cus: 'ตัวแทนออกของของเราเองดูแลพิธีการและการตรวจสอบ รวมถึงอาหาร พืช และสัตว์มีชีวิต' },
      abH2: 'เกี่ยวกับ Draco Group',
      abP: 'บริษัทแรกก่อตั้งที่ตงกวนในปี 2010 จากนั้นขยายไปยังฮ่องกง ไต้หวัน กว่างโจว นิวยอร์ก เซินเจิ้น จี่หนาน สิงคโปร์ เวียดนาม และประเทศไทย ภายใต้สามแบรนด์ Draco, Seal Global และ H.Rhino',
      vals: [['วิสัยทัศน์', 'ทีมโลจิสติกส์ครบวงจร'], ['พันธกิจ', 'กลุ่มบริษัทโลจิสติกส์ครบวงจรที่ให้บริการโซลูชันซัพพลายเชนแบบเบ็ดเสร็จ'], ['วัฒนธรรมองค์กร', 'ซื่อสัตย์ รับผิดชอบ ก้าวสู่ระดับโลก']],
      cta: { services: ['ไม่แน่ใจว่าควรส่งทางเรือหรือทางอากาศ?', 'บอกขนาด น้ำหนัก และกำหนดส่ง เราจะเปรียบเทียบทางเลือกให้'], warehousing: ['อยากมาดูคลังสินค้า?', 'นัดเข้าชมได้ หรือบอกประเภทสินค้าและความถี่รับเข้า-จ่ายออกของคุณก่อน'], 'draco-one': ['อยากเห็นระบบใช้งานจริง?', 'เราสาธิตตั้งแต่รับเข้าจนจ่ายออกด้วยรูปแบบ Packing List ของคุณได้'], about: ['อยากร่วมงานกับเรา?', 'ยินดีต้อนรับทั้งลูกค้า ตัวแทนต่างประเทศ และซัพพลายเออร์'] }
    }
  };
  Object.keys(C).forEach(function (l) { window.I18N[l].copy = C[l]; });
})();
