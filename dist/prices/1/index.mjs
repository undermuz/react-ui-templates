// src/prices/1/index.tsx
import { EnumSchemeItemType } from "@undermuz/react-json-form";
import DEF_VALUE from "./defaults.mjs";
import view from "./view.mjs";
var WidgetName = "Price1";
var WidgetTitle = "\u041F\u0440\u0430\u0439\u0441\u044B 1";
var scheme = {
  id: WidgetName,
  scheme: [
    {
      name: "title",
      title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      type: EnumSchemeItemType.Text,
      def_value: DEF_VALUE.title
    },
    {
      name: "subtitle",
      title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      type: EnumSchemeItemType.TextBlock,
      def_value: DEF_VALUE.subtitle
    },
    {
      name: "prices",
      title: "\u0426\u0435\u043D\u044B",
      type: EnumSchemeItemType.Widget,
      multiple: true,
      def_value: DEF_VALUE.prices,
      scheme: [
        {
          name: "title",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          type: EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "price",
          title: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
          type: EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "is_active",
          title: "\u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F?",
          type: EnumSchemeItemType.Checkbox,
          def_value: false
        },
        {
          name: "list",
          title: "\u041F\u0443\u043D\u043A\u0442\u044B",
          type: EnumSchemeItemType.Widget,
          multiple: true,
          def_value: [],
          scheme: [
            {
              name: "title",
              title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              type: EnumSchemeItemType.Text,
              def_value: ""
            }
          ]
        }
      ]
    }
  ],
  multiple: false,
  title: WidgetTitle
};
var setting = {
  id: WidgetName,
  title: WidgetTitle,
  description: `\u041F\u0440\u0430\u0439\u0441\u044B 1`,
  image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
  value: DEF_VALUE,
  scheme,
  view
};
var __default = setting;
export {
  __default as default,
  scheme
};
