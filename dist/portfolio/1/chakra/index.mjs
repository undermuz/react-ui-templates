// src/portfolio/1/chakra/index.tsx
import { EnumSchemeItemType } from "@undermuz/react-json-form";
import GridText from "./view.mjs";
import DEF_VALUE from "../defaults.mjs";
var WidgetName = "ChakraPortfolio1";
var WidgetTitle = "ChakraUI: \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E 1";
var scheme = {
  id: WidgetName,
  scheme: [
    {
      name: "title",
      title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      type: EnumSchemeItemType.Text,
      def_value: ""
    },
    {
      name: "list",
      title: "\u0421\u043F\u0438\u0441\u043E\u043A",
      type: EnumSchemeItemType.Widget,
      multiple: true,
      scheme: [
        {
          name: "title",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          type: EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "list",
          title: "\u0421\u043F\u0438\u0441\u043E\u043A",
          type: EnumSchemeItemType.Widget,
          def_value: "",
          multiple: true,
          scheme: [
            {
              name: "image",
              title: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
              type: EnumSchemeItemType.Files,
              def_value: ""
            },
            {
              name: "title",
              title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              type: EnumSchemeItemType.Text,
              def_value: ""
            },
            {
              name: "subtitle",
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
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
  description: `\u0414\u043B\u044F \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432`,
  image: `/pic/7baf806ceff92c3c9f65c8c029cdd73eOabFY.png`,
  scheme,
  value: DEF_VALUE,
  view: GridText
};
var chakra_default = setting;
export {
  chakra_default as default,
  scheme
};
