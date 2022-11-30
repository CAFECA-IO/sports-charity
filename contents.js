const menuContent = {
  actives: {
    seminar: "#",

  }
}

const cardListContent = {
  
}

const page1 = {
  header: [
    { component: "image", content: "" },
    { component: "menu", content: menuContent },
    { component: "search", content: { text: "search" } },
    { component: "button", content: { text: "sitemap", href: "/sitemap" } },
    { component: "options", content: [ "zh", "en" ] },
  ],
  main: [
    { component: "banner", content: ["", "", "", "", ""] },
    { component: "title", content: "latest activities" },
    { component: "card-list", content: cardListContent }
  ],
  footer: []
};

const page2 = {

};

const page3 = {

};

const contents = [
  page1, page2, page3
];

module.exports = contents;