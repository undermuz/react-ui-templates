// src/four-services/1/grommet/index.tsx
import { EnumSchemeItemType } from "@undermuz/react-json-form";
import DEF_VALUE from "./defaults.mjs";
import view from "./view.mjs";
var WidgetName = "FourServices";
var WidgetTitle = `\u0411\u043B\u043E\u043A "4 \u0441\u0435\u0440\u0432\u0438\u0441\u0430`;
var scheme = {
  id: WidgetName,
  title: WidgetTitle,
  multiple: false,
  scheme: [
    {
      name: "main",
      title: "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435",
      scheme: [
        {
          name: "title",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          type: EnumSchemeItemType.Text,
          def_value: "",
          rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
        }
      ]
    },
    {
      name: "services",
      title: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B",
      scheme: [
        {
          name: "first_service",
          title: "\u041F\u0435\u0440\u0432\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",
          type: EnumSchemeItemType.Widget,
          def_value: {},
          scheme: [
            {
              name: "description",
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              type: EnumSchemeItemType.TextBlock,
              def_value: "",
              rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
            },
            {
              name: "text",
              title: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
              type: EnumSchemeItemType.TextEditor,
              def_value: ""
            }
          ]
        },
        {
          name: "second_service",
          title: "\u0412\u0442\u043E\u0440\u043E\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",
          type: EnumSchemeItemType.Widget,
          def_value: {},
          scheme: [
            {
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              name: "description",
              type: EnumSchemeItemType.TextBlock,
              def_value: "",
              rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
            },
            {
              title: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
              name: "text",
              type: EnumSchemeItemType.TextEditor,
              def_value: ""
            }
          ]
        },
        {
          name: "third_service",
          title: "\u0422\u0440\u0435\u0442\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",
          type: EnumSchemeItemType.Widget,
          def_value: {},
          scheme: [
            {
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              name: "description",
              type: EnumSchemeItemType.TextBlock,
              def_value: "",
              rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
            },
            {
              title: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
              name: "text",
              type: EnumSchemeItemType.TextEditor,
              def_value: ""
            }
          ]
        },
        {
          name: "fourth_service",
          title: "\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",
          type: EnumSchemeItemType.Widget,
          def_value: {},
          scheme: [
            {
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              name: "description",
              type: EnumSchemeItemType.TextBlock,
              def_value: "",
              rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
            },
            {
              title: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
              name: "text",
              type: EnumSchemeItemType.TextEditor,
              def_value: ""
            }
          ]
        }
      ]
    }
  ]
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
