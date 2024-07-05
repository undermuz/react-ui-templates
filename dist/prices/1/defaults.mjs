// src/prices/1/defaults.tsx
var DEF_VALUE_PRICES = [
  {
    id: 1,
    price: 5e3,
    title: "Simple plan",
    is_active: false,
    list: [
      {
        id: 1,
        title: "1Lorem ipsum dolor"
      },
      {
        id: 2,
        title: "Sit amet consectetur adipiscing"
      },
      {
        id: 3,
        title: "Elit sed do eiusmod tempor"
      },
      {
        id: 4,
        title: "Incididunt ut labore"
      },
      {
        id: 5,
        title: "Et dolore magna aliqua incididunt"
      }
    ]
  },
  {
    id: 2,
    price: 7e3,
    title: "Professional plan",
    is_active: true,
    list: [
      {
        id: 1,
        title: "Lorem ipsum dolor"
      },
      {
        id: 2,
        title: "Sit amet consectetur adipiscing"
      },
      {
        id: 3,
        title: "Elit sed do eiusmod tempor"
      },
      {
        id: 4,
        title: "Incididunt ut labore"
      },
      {
        id: 5,
        title: "Et dolore magna aliqua incididunt"
      }
    ]
  },
  {
    id: 3,
    price: 12e3,
    title: "Enterprise plan",
    is_active: false,
    list: [
      {
        id: 1,
        title: "Lorem ipsum dolor"
      },
      {
        id: 2,
        title: "Sit amet consectetur adipiscing"
      },
      {
        id: 3,
        title: "Elit sed do eiusmod tempor"
      },
      {
        id: 4,
        title: "Incididunt ut labore"
      },
      {
        id: 5,
        title: "Et dolore magna aliqua incididunt"
      }
    ]
  }
];
var DEF_VALUE = {
  title: "\u041C\u044B \u043B\u0443\u0447\u0448\u0438\u0435 \u0432 \u043C\u0438\u0440\u0435!",
  subtitle: "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443 50%",
  button_text: "\u041A\u0443\u043F\u0438\u0442\u044C",
  prices: DEF_VALUE_PRICES
};
var defaults_default = DEF_VALUE;
export {
  DEF_VALUE,
  DEF_VALUE_PRICES,
  defaults_default as default
};
