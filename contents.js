const menuContent = {
  actives: {
    seminar: "#",
  },
};

const cardListContent = [
  {
    id: "event1",
    title: "LINE FRIENDS 音樂路跑",
    image: "/Image-1.png",
    description:
      "這個路跑有配樂！2022.9.7 全球首屆「LINE FRIENDS音樂路跑」登陸台北路跑聯名商品全台獨家推出，等你來報名。",
    type: "其他",
  },
  {
    id: "event2",
    title: "運動 x 科技 x 設計 系列講座",
    image: "/Image-2.png",
    description:
      "本次座談特地邀請實際在運動市場上應用科技的企業代表與專家們，與設研院一同探討科技如何利用設計串聯運動產業，讓大家可以sport everywhere！",
    type: "講座",
  },
  {
    id: "event3",
    title: "台北國際運動及健身展",
    image: "/Image-3.png",
    description: "2023年3月22-25日 台北南港展覽館2館(台北市南港區經貿二路2號)",
    type: "展覽",
  },
  {
    id: "event4",
    title: "運動星球能量營",
    image: "/Image-4.png",
    description:
      "2022夏令營終於來啦~~爸爸媽媽照過來 運動星球能量營【三鶯最強團隊X新北最強營隊】",
    type: "課程",
  },
  {
    id: "event5",
    title: "向海致敬-區域性水域體驗活動",
    image: "/Image-5.png",
    description:
      "西灣學院運動與健康教育中心攜手學務處體育與衛生保健組，共同推動國家海洋政策，帶動全民海洋教育，特辦理旨揭體驗活動。",
    type: "體驗",
  },
  {
    id: "event6",
    title: "黃阿瑪要跑不跑的路跑",
    image: "/Image-6.png",
    description:
      "黃阿瑪的後宮生活正式授權，首次大型戶外運動活動號召百萬瑪民動起來，邁開步伐，喵速衝刺！",
    type: "其他",
  },
];

const articleListContent = [
  {
    id: "news1",
    title: "最新消息標題",
    image: "/news-1.png",
    description:
      "Hello Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2022/9/27",
  },
  {
    id: "news2",
    title: "最新消息標題",
    image: "/news-2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2022/12/7",
  },
  {
    id: "news3",
    title: "最新消息標題",
    image: "/news-3.png",
    description:
      "Lorem ipsum  sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024/4/19",
  },
  {
    id: "news4",
    title: "最新消息標題",
    image: "/news-4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2023/3/17",
  },
];

const page1 = {
  header: [
    { component: "image", content: "" },
    { component: "menu", content: menuContent },
    { component: "search", content: { text: "search" } },
    { component: "button", content: { text: "sitemap", href: "/sitemap" } },
    { component: "options", content: ["zh", "en"] },
  ],
  main: [
    { component: "banner", content: ["", "", "", "", ""] },
    { component: "title", content: "latest activities" },
    { component: "card-list", content: cardListContent },
    { component: "title", content: "news" },
    { component: "article-list", content: articleListContent },
  ],
  footer: [
    { component: "image", content: "" },
    { component: "text", content: "" },
    { component: "copyright" },
    { component: "version" },
  ],
};

const page2 = {};

const page3 = {};

const contents = [page1, page2, page3];

module.exports = contents;
