/* ============================================================
   个人资料数据文件 —— 陈屹凌
   以后新增技能 / 作品 / 荣誉，只需在对应列表里加一条，页面自动更新
   ============================================================ */

const DATA = {
  // ---------- 基本信息 ----------
  profile: {
    name: "陈屹凌",
    tagline: "AI 应用探索者",
    subtitle: "中国民用航空飞行学院 · 大气科学 · 2026 级",
    motto: "宁可犯错，不要无聊",
    avatar: "avatar.webp",
    phone: "18065942980",
    email: "1590318477@qq.com",
    location: "四川成都 · 福建生源",
  },

  // ---------- 首屏网站列表卡片 ----------
  // icon 为 Lucide 图标名；level: hot/warm 为中列作品卡的重点材质
  // DOM 顺序即桌面逐行顺序：关于我 / AI实战 / 风吟宇宙 / 联系我 / PPT / 新大陆
  navCards: [
    { icon: "user-round",   name: "关于我",           en: "About Me",   desc: "学习背景、兴趣与成长",                 target: "#about" },
    { icon: "sparkles",     name: "AI 实战",          en: "AI Lab",     desc: "仿真机器鱼、AI 辅助开发与迭代记录",     target: "#aigc", level: "hot" },
    { icon: "headphones",   name: "风吟宇宙",          en: "Mindscape",  desc: "阅读、音乐与片刻思考",                 target: "#bookmusic" },
    { icon: "mail",         name: "联系我",           en: "Connect",    desc: "交流想法，探讨合作",                   target: "#contact" },
    { icon: "presentation", name: "PPT 放映室",        en: "Showcase",   desc: "演示作品与信息表达",                   target: "#ppt", level: "warm" },
    { icon: "sprout",       name: "新大陆，加载中...",  en: "Stay Tuned", desc: "新的探索，慢慢生长",                   soon: true },
  ],

  // ---------- 首屏打字机身份关键词（在主标题下方循环打出） ----------
  keywords: [
    "行动派理想主义者",
    "中飞院新青年",
    "终身学习者",
    "AI 应用探索者",
  ],

  // ---------- 首屏轮播金句 ----------
  quotes: [
    "宁可犯错，不要无聊。",
    "在阅读中认识世界，发现自我。",
    "探索未知，迎接挑战。",
  ],

  // ---------- 关于我（一条主线，五步阅读） ----------
  about: {
    name: "陈屹凌",                                  // 板块内小标题（非页面级 h1）
    role: "大气科学在读 · AI 应用探索者",              // 定位说明
    intro: "从想法出发，借助 AI 将构思转化为可运行的作品，在实践中学习设计、开发与验证，让每一次尝试都有迹可循。",
    facts: [
      { label: "就读", value: "中国民用航空飞行学院 · 大气科学" },
      { label: "入学", value: "2026 级" },
      { label: "兴趣", value: "AI 应用 · 阅读" },
    ],
    // 我的实践方式（非时间线）
    practice: [
      { t: "提出构思",   d: "从感兴趣的问题出发，提出想法与总体设计。" },
      { t: "借助 AI 实现", d: "借助 AI 调研方案、编写主体代码，将构思转化为可运行的 Demo。" },
      { t: "观察与调试", d: "结合运行现象与仿真日志，学习查看参数、定位问题并继续迭代。" },
    ],
    quote: "人须在事上磨，方能立得住",
  },

  // ---------- AI 技能与证书 ----------
  skills: [
    {
      icon: "🏅",
      title: "阿里达摩院认证 · 人工智能训练师（高级）",
      desc: "2026 年 8 月考取，覆盖智能体工程师等项目方向，高三暑假全程自学备考。",
      tags: ["达摩院", "高级证书"],
    },
    {
      icon: "🎖️",
      title: "阿里达摩院认证 · 人工智能训练师（初级）",
      desc: "2026 年 7 月考取，覆盖 Prompt 工程师等基础项目方向。",
      tags: ["达摩院", "初级证书"],
    },
    {
      icon: "💬",
      title: "提示词工程 · AI 对话工具",
      desc: "熟练使用主流 AI 对话工具，掌握结构化提示词技巧，能高效驱动 AI 完成复杂任务。",
      tags: ["Prompt 工程", "DeepSeek / 豆包"],
    },
    {
      icon: "🎨",
      title: "AI 生成工具",
      desc: "使用图像 / 视频 / 音频生成工具进行内容创作，正在制作 AI 短剧。",
      tags: ["图像生成", "视频生成"],
    },
    {
      icon: "🛠️",
      title: "AI 辅助开发",
      desc: "以 AI 辅助方式完成个人网站的设计、编码与上线——本站即是作品。",
      tags: ["网站开发", "人机协作"],
    },
    {
      icon: "🐍",
      title: "Python 与数据分析",
      desc: "具备编程与数据处理基础，可支撑大气科学数据处理与 AI 项目开发。",
      tags: ["Python", "数据分析"],
    },
  ],

  // ---------- 科创与作品（持续更新区 / 作品集，极简列表风）----------
  works: [
    {
      status: "making",
      en: "AIGC SHORT FILM",          // 英文主标题
      cn: "AI 短剧创作",               // 中文辅助标题
      note: "角色概念设计与生成式内容探索",
      statusText: "制作中",
      date: "2026.10 — 今",
      link: "",
      img: "AI1.webp",
    },
    {
      status: "done",
      en: "ROBOT FISH SIMULATION",
      cn: "仿真机器鱼",
      note: "绕柱避障、路径规划与竞速",
      statusText: "已提交",
      date: "2026.10",
      link: "",
      img: "AI3.webp",
    },
    {
      status: "inprogress",
      en: "AI-BUILT PERSONAL SITE",
      cn: "AI 辅助搭建个人网站",
      note: "从设计构想到页面实现，记录人机协作与持续修改",
      statusText: "",
      date: "2026.9",
      link: "",
      img: "AI2.webp",
    },
  ],

  // ---------- PPT 放映室（封面流转盘：slides 按顺序组成一条轮播）----------
  ppt: [
    {
      deck: "澄巡",
      title: "澄巡 3",
      desc: "校园景观水域漂浮物巡检与收集机器人 · 学生创新项目",
      slides: ["cx3-1.webp"],   // 只展示封面
    },
    {
      deck: "潜净深蓝",
      title: "潜净深蓝",
      desc: "水下机器人 / 海洋清洁主题学生创新项目",
      slides: ["qj-1.webp", "qj-2.webp", "qj-3.webp"],
    },
  ],

  // ---------- 荣誉奖项（时间线）----------
  honors: [
    { year: "2026.08", title: "达摩院 AI 训练师 · 高级证书" },
    { year: "2026.07", title: "达摩院 AI 训练师 · 初级证书" },
    { year: "高中", title: '校级"最美志愿者"称号（五四青年节表彰）' },
    { year: "高中", title: "全国中学生英语竞赛 · 市级二等奖" },
  ],

  // ---------- 阅读与思考 ----------
  books: [
    { title: "《小王子》", note: "最爱的一本：真正重要的东西，用眼睛是看不见的。" },
    { title: "《异类》格拉德威尔", note: "一万小时定律——所谓天才，不过是持续练习的普通人。" },
    { title: "中外文学", note: "广泛涉猎，在阅读中认识世界，也发现自我。" },
  ],
};
