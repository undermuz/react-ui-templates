// src/news/1/grommet/index.tsx
import { EnumSchemeItemType } from "@undermuz/react-json-form";
import DEF_VALUE from "./defaults.mjs";
import view from "./view.mjs";
var WidgetName = "Blog1";
var WidgetTitle = "\u0411\u043B\u043E\u0433/\u041D\u043E\u0432\u043E\u0441\u0442\u0438 1";
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
      name: "list",
      title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
      type: EnumSchemeItemType.Widget,
      multiple: true,
      def_value: DEF_VALUE.list,
      scheme: [
        {
          name: "title",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          type: EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "description",
          title: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
          type: EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "date",
          title: "\u0414\u0430\u0442\u0430",
          type: EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "is_active",
          title: "\u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F?",
          type: EnumSchemeItemType.Checkbox,
          def_value: false
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
  description: `\u0411\u043B\u043E\u0433/\u041D\u043E\u0432\u043E\u0441\u0442\u0438 1`,
  image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
  value: DEF_VALUE,
  scheme,
  view
};
var grommet_default = setting;
export {
  grommet_default as default,
  scheme
};
