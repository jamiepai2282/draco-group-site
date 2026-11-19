// 品牌理念頁（理念識別＋視覺識別）與首頁主張的四語文字
(function () {
  var B = {
    hant: { nav: '品牌理念', heroH1: '誠信當責<br><em>邁向全球</em>', heroLead: '全方位物流專業團隊。海、空、陸、倉、關，一站到位。', more: '了解品牌理念',
      h2: '誠信當責，邁向全球', lead: '這八個字，是登泰做每一票貨的標準。', miH: '理念識別',
      pillars: [['誠信', 'INTEGRITY', '說出口的，都查得到。', '庫存精準到件、入庫留影像、派送有簽收，客戶隨時可以核對。'], ['當責', 'ACCOUNTABILITY', '每一段，都有人負責。', '從訂艙到送達由同一個團隊負責到底；自有報關行，取得 AEO 與 C-TPAT 認證。'], ['邁向全球', 'GLOBAL', '貨到哪裡，人就在哪裡。', '2010 年始於東莞，如今 14 家公司遍及兩岸三地、東南亞與美國。']],
      viH: '視覺識別', logoT: '標誌', logoD: '酒紅色字標，與展開金色羽翼的飛鳥。', logoPh: '[標誌的設計意涵，請補充]', colT: '標準色', cols: ['酒紅', '金', '灰'], colNote: '[色號取自標誌檔案，正式色號請以 CI 手冊為準]', brT: '三個品牌' },
    hans: { nav: '品牌理念', heroH1: '诚信当责<br><em>迈向全球</em>', heroLead: '全方位物流专业团队。海、空、陆、仓、关，一站到位。', more: '了解品牌理念',
      h2: '诚信当责，迈向全球', lead: '这八个字，是登泰做每一票货的标准。', miH: '理念识别',
      pillars: [['诚信', 'INTEGRITY', '说出口的，都查得到。', '库存精准到件、入库留影像、派送有签收，客户随时可以核对。'], ['当责', 'ACCOUNTABILITY', '每一段，都有人负责。', '从订舱到送达由同一个团队负责到底；自有报关行，取得 AEO 与 C-TPAT 认证。'], ['迈向全球', 'GLOBAL', '货到哪里，人就在哪里。', '2010 年始于东莞，如今 14 家公司遍及两岸三地、东南亚与美国。']],
      viH: '视觉识别', logoT: '标志', logoD: '酒红色字标，与展开金色羽翼的飞鸟。', logoPh: '[标志的设计意涵，请补充]', colT: '标准色', cols: ['酒红', '金', '灰'], colNote: '[色号取自标志文件，正式色号请以 CI 手册为准]', brT: '三个品牌' },
    en: { nav: 'Our brand', heroH1: 'Integrity and accountability,<br><em>reaching the world</em>', heroLead: 'A full-service logistics team. Ocean, air, land, warehousing and customs in one place.', more: 'Our brand',
      h2: 'Integrity and accountability, reaching the world', lead: 'These words set the standard for every shipment Draco handles.', miH: 'What we stand for',
      pillars: [['Integrity', '誠信', 'What we say, you can check.', 'Stock counted to the piece, photos at receiving and signed proof of delivery, open for you to verify.'], ['Accountability', '當責', 'Someone answers for every leg.', 'One team from booking to delivery, with our own customs brokerage and AEO and C-TPAT certification.'], ['Reaching the world', '邁向全球', 'People where your cargo is.', 'From Dongguan in 2010 to 14 companies across mainland China, Hong Kong, Taiwan, Southeast Asia and the US.']],
      viH: 'Visual identity', logoT: 'Logo', logoD: 'A crimson wordmark and a bird in flight with golden wings.', logoPh: '[Meaning of the logo: to be added]', colT: 'Brand colours', cols: ['Crimson', 'Gold', 'Grey'], colNote: '[Colour values sampled from the logo file. Use the CI manual for official values]', brT: 'Three brands' },
    th: { nav: 'แบรนด์ของเรา', heroH1: 'ซื่อสัตย์ รับผิดชอบ<br><em>ก้าวสู่ระดับโลก</em>', heroLead: 'ทีมโลจิสติกส์ครบวงจร เรือ อากาศ บก คลังสินค้า และศุลกากร จบในที่เดียว', more: 'รู้จักแบรนด์ของเรา',
      h2: 'ซื่อสัตย์ รับผิดชอบ ก้าวสู่ระดับโลก', lead: 'คำเหล่านี้คือมาตรฐานของ Draco ในทุกการขนส่ง', miH: 'สิ่งที่เรายึดมั่น',
      pillars: [['ซื่อสัตย์', '誠信', 'สิ่งที่เราพูด ตรวจสอบได้', 'สต็อกถึงระดับชิ้น ภาพถ่ายตอนรับเข้า และใบเซ็นรับ ลูกค้าตรวจสอบได้ตลอดเวลา'], ['รับผิดชอบ', '當責', 'ทุกช่วงมีผู้รับผิดชอบ', 'ทีมเดียวตั้งแต่จองระวางจนส่งถึง มีตัวแทนออกของของเราเอง และได้รับรอง AEO กับ C-TPAT'], ['ก้าวสู่ระดับโลก', '邁向全球', 'สินค้าไปถึงไหน เรามีคนอยู่ที่นั่น', 'จากตงกวนในปี 2010 สู่ 14 บริษัทในจีนแผ่นดินใหญ่ ฮ่องกง ไต้หวัน เอเชียตะวันออกเฉียงใต้ และสหรัฐฯ']],
      viH: 'อัตลักษณ์ทางภาพ', logoT: 'โลโก้', logoD: 'ตัวอักษรสีแดงเข้มและนกกางปีกสีทอง', logoPh: '[ความหมายของโลโก้: รอเพิ่มเติม]', colT: 'สีประจำแบรนด์', cols: ['แดงเข้ม', 'ทอง', 'เทา'], colNote: '[ค่าสีอ่านจากไฟล์โลโก้ ค่าทางการให้ยึดตามคู่มือ CI]', brT: 'สามแบรนด์' }
  };
  Object.keys(B).forEach(function (l) { var T = window.I18N[l]; T.brand = B[l]; T.heroH1 = B[l].heroH1; T.heroLead = B[l].heroLead; });
})();
