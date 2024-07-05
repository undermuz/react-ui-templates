// src/offer/2/chakra/index.tsx
import { EnumSchemeItemType } from "@undermuz/react-json-form";
import DEF_VALUE from "../defaults.mjs";
import view from "./view.mjs";
var WidgetName = "Offer";
var WidgetTitle = "\u041E\u0444\u0444\u0435\u0440";
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
      name: "subtitle",
      title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      type: EnumSchemeItemType.TextBlock,
      def_value: ""
    },
    {
      name: "button_text",
      title: "\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438",
      type: EnumSchemeItemType.Text,
      def_value: ""
    },
    {
      name: "show_button",
      title: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443?",
      type: EnumSchemeItemType.Checkbox,
      def_value: true
    },
    {
      name: "show_adv",
      title: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
      type: EnumSchemeItemType.Checkbox,
      def_value: true
    },
    {
      name: "image",
      title: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
      type: EnumSchemeItemType.Files,
      def_value: ""
    },
    {
      name: "advantage",
      title: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
      type: EnumSchemeItemType.Widget,
      multiple: true,
      def_value: "",
      scheme: [
        {
          name: "title",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          type: EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "image",
          title: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
          type: EnumSchemeItemType.Files,
          def_value: ""
        }
      ]
    }
  ],
  multiple: false,
  title: WidgetTitle
};
var Offer = {
  id: WidgetName,
  title: WidgetTitle,
  description: `\u041E\u0444\u0444\u0435\u0440 \u0441 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438`,
  image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
  value: DEF_VALUE,
  scheme,
  view
};
var chakra_default = Offer;
export {
  chakra_default as default
};
