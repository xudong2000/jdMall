import { createStore } from 'vuex'

export default createStore({
  state: {
    // 保存所有商品的数据
    list: {
      popular: [
        {
          img: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/142194/1/12487/442436/5f9cfe0aE2e62a7b4/ca42393a03616584.jpg!q70.dpg.webp',
          text: '联想拯救者Y9000X轻薄笔记本电脑15.6英寸标压酷睿i7/i5高端性能本可选4K高色域屏 i7-9750H 16G 1TB固态 标配 高色域+双雷电3接口',
          price: 6999,
          id: 1
        },
        {
          img: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/131716/23/14107/151793/5f9bdc66E7eed856b/a1fcd3ec5a510be1.jpg!q70.dpg.webp',
          text: '雪花秀(SULWHASOO) 滋盈肌本水乳护肤品套装(润颜水125ml+润颜乳125ml+精华+面霜)韩国进口 新老包装随机发货',
          price: 480,
          id: 2
        },
        {
          img: 'https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/133014/5/14091/142909/5f9bc51aEc667f91d/6d54f6001879d321.jpg!q70.dpg.webp',
          text: '维达(Vinda) 无芯卷纸 超韧4层78g卫生纸*30卷 整箱销售 母婴可用',
          price: 33.9,
          id: 3
        },
        {
          img: 'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/74358/12/15646/334115/5dd4a125E4e31ccfd/8ec26028e0212110.jpg!q70.dpg.webp',
          text: '神舟(HASEE)战神TX7-CT5DS 英特尔酷睿i5-9400 GTX1660Ti 6G 16.1英寸144Hz游戏笔记本电脑(16G 512G SSD)',
          price: 6099,
          id: 4
        },
        {
          img: 'https://img20.360buyimg.com/mobilecms/s372x372_jfs/t1/139326/32/12452/338366/5f9bf01bE7bf9065e/c6380b7f07d267e8.jpg!q70.dpg.webp',
          text: '安踏篮球鞋男鞋秋冬季新款实战球鞋男运动鞋战靴4气垫明星5汤普森KT鞋子男学生网面官方旗舰 -2亮蓝/艳蓝/粉 男42/美码8.5',
          price: 259,
          id: 5
        },
        {
          img: 'https://img13.360buyimg.com/mobilecms/s372x372_jfs/t1/149238/17/10877/117826/5f8ab45dE486adeed/c67f96541641ab02.jpg!q70.dpg.webp',
          text: '虎牌（Tiger）电饭煲原装进口土锅涂层IH加热方式电饭锅 JKT-A10C 3L',
          price: 4999,
          id: 6
        },
      ],
      news: [
        {
          img: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/144184/24/5806/369094/5f3bc113Eee04cd75/3e0392f9c0bff874.png.webp',
          text: '小米 Redmi 红米K30至尊纪念版 新品 智能手机 十周年献礼之作 极夜黑 6GB+128GB',
          price: 2095,
          id: 7
        },
        {
          img: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/138422/10/12163/221663/5f9914b7Ecd376310/32f0935a69199a1b.jpg!q70.dpg.webp',
          text: '乔丹官方旗舰篮球鞋女运动鞋2020新款网面篮球文化鞋低帮休闲鞋女篮球鞋 搪瓷粉/白色 36',
          price: 179,
          id: 8
        },
        {
          img: 'https://img30.360buyimg.com/mobilecms/s372x372_jfs/t1/110951/33/9686/108196/5edd1de5E4431a365/945973f725f418e6.jpg!q70.dpg.webp',
          text: '多功能无线充电插座 小巧创意魔方USB插线板排插转换插头 带支架智能插排/充电器 /插板/拖接线板 F02款 白色 全线长1.8米',
          price: 49,
          id: 9
        },
        {
          img: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/134249/38/14060/309288/5f9d30d5E7f2dc764/c46b1591f784ca1a.jpg!q70.dpg.webp',
          text: '夏新（AMOi）A8燃气灶煤气灶天然气液化气灶双灶台式嵌入式煤气炉家用 【升级款】4.8KW猛火双灶 天然气',
          price: 319,
          id: 10
        },
        {
          img: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/146755/11/12219/71248/5f968b14E7e12f368/0aec2c6b873785a6.jpg!q70.dpg.webp',
          text: '联想(Lenovo)小新Pro13高性能轻薄本 英特尔酷睿i7 全面屏学生笔记本电脑(6核i7 16G 512G MX350 高色域)银',
          price: 7299,
          id: 11
        },
        {
          img: 'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/142309/34/12346/283972/5f9a3613E1d976307/1ab17c639ff0e993.jpg!q70.dpg.webp',
          text: 'A家 多功能沙发床北欧实木伸缩沙发床两用单人布艺可折叠双人客厅坐卧小户型 DB0022 深灰色 三人位（沙发床）',
          price: 2880,
          id: 12
        },
      ],
      featured: [
        {
          img: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/139995/38/12103/175737/5f964ab8E482940bf/120218578a870474.jpg!q70.dpg.webp',
          text: '【品牌直营】篮球鞋 鸳鸯鞋潮流休闲百搭毒液鞋潮牌空军篮球运动潮鞋透气夏季高帮男鞋 红色 36',
          price: 268,
          id: 13
        },
        {
          img: 'https://img13.360buyimg.com/n2/s372x372_jfs/t1/144084/26/7795/171672/5f5721bfE2d8f22bf/c8d05e5670a69735.jpg!q70.dpg.webp',
          text: '恋泽芯ins港风韩版加绒加厚连帽情侣卫衣男宽松潮流恐龙印花外套秋冬潮牌嘻哈上衣男 白色 L',
          price: 69,
          id: 14
        },
        {
          img: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/154603/36/3892/370695/5f9b8085E3f3e47a3/568d00ffdfd22714.jpg!q70.dpg.webp',
          text: '乐毅桐学生卫衣男港风韩版ins潮牌个性青年连帽宽松印花运动长袖外套男情侣多色加绒大码班服男 W91蓝色 XL',
          price: 88,
          id: 15
        },
        {
          img: 'https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/119511/7/5515/106212/5ebe8be6E29870db7/02367d99137d984b.jpg!q70.dpg.webp',
          text: 'KUBRI CK品牌 夏季法国风网红少女小胸聚拢套装防滑舒适透气有钢圈半杯文胸内衣收副乳大码文胸 白色 75C',
          price: 298,
          id: 16
        },
        {
          img: 'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/127855/12/16472/393428/5f96f15dE65704807/d377a9db8a07c473.jpg!q70.dpg.webp',
          text: '森林狼 成人儿童智能平衡车两轮双轮7寸体感车代步车电动迷你思维平衡车儿童扭扭车 发光轮版-蓝色星空(自平衡+跑马灯+三档可调)',
          price: 479,
          id: 17
        },
        {
          img: 'https://img30.360buyimg.com/mobilecms/s372x372_jfs/t1/136852/35/13067/118599/5f9246c7Eb411c4d9/2b180ff84b2bdedc.jpg!q70.dpg.webp',
          text: '华硕(ASUS) 天选 15.6英寸游戏笔记本电脑(新锐龙 7nm 8核 R7-4800H 16G 512GSSD GTX1650Ti 4G 144Hz)元气蓝',
          price: 6599,
          id: 18
        },
      ]
    },
    // 保存当前商品类型的数据
    currType: '',
    // 保存当前商品的id
    currItem: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
