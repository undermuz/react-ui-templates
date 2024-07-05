"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/four-services/1/grommet/index.tsx
var grommet_exports = {};
__export(grommet_exports, {
  default: () => grommet_default,
  scheme: () => scheme
});
module.exports = __toCommonJS(grommet_exports);
var import_react_json_form = require("@undermuz/react-json-form");
var import_defaults = __toESM(require("./defaults.js"));
var import_view = __toESM(require("./view.js"));
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
          type: import_react_json_form.EnumSchemeItemType.Text,
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
          type: import_react_json_form.EnumSchemeItemType.Widget,
          def_value: {},
          scheme: [
            {
              name: "description",
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              type: import_react_json_form.EnumSchemeItemType.TextBlock,
              def_value: "",
              rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
            },
            {
              name: "text",
              title: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
              type: import_react_json_form.EnumSchemeItemType.TextEditor,
              def_value: ""
            }
          ]
        },
        {
          name: "second_service",
          title: "\u0412\u0442\u043E\u0440\u043E\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",
          type: import_react_json_form.EnumSchemeItemType.Widget,
          def_value: {},
          scheme: [
            {
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              name: "description",
              type: import_react_json_form.EnumSchemeItemType.TextBlock,
              def_value: "",
              rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
            },
            {
              title: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
              name: "text",
              type: import_react_json_form.EnumSchemeItemType.TextEditor,
              def_value: ""
            }
          ]
        },
        {
          name: "third_service",
          title: "\u0422\u0440\u0435\u0442\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",
          type: import_react_json_form.EnumSchemeItemType.Widget,
          def_value: {},
          scheme: [
            {
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              name: "description",
              type: import_react_json_form.EnumSchemeItemType.TextBlock,
              def_value: "",
              rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
            },
            {
              title: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
              name: "text",
              type: import_react_json_form.EnumSchemeItemType.TextEditor,
              def_value: ""
            }
          ]
        },
        {
          name: "fourth_service",
          title: "\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u044B\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",
          type: import_react_json_form.EnumSchemeItemType.Widget,
          def_value: {},
          scheme: [
            {
              title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              name: "description",
              type: import_react_json_form.EnumSchemeItemType.TextBlock,
              def_value: "",
              rules: [[[Boolean], "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435"]]
            },
            {
              title: "\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435",
              name: "text",
              type: import_react_json_form.EnumSchemeItemType.TextEditor,
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
  value: import_defaults.default,
  scheme,
  view: import_view.default
};
var grommet_default = setting;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  scheme
});
