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

// src/prices/2/index.tsx
var __exports = {};
__export(__exports, {
  default: () => __default,
  scheme: () => scheme
});
module.exports = __toCommonJS(__exports);
var import_react_json_form = require("@undermuz/react-json-form");
var import_defaults = __toESM(require("./defaults.js"));
var import_view = __toESM(require("./view.js"));
var WidgetName = "Price2";
var WidgetTitle = "\u041F\u0440\u0430\u0439\u0441\u044B 2";
var scheme = {
  id: WidgetName,
  scheme: [
    {
      name: "title",
      title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      type: import_react_json_form.EnumSchemeItemType.Text,
      def_value: import_defaults.default.title
    },
    {
      name: "subtitle",
      title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      type: import_react_json_form.EnumSchemeItemType.TextBlock,
      def_value: import_defaults.default.subtitle
    },
    {
      name: "prices",
      title: "\u0426\u0435\u043D\u044B",
      type: import_react_json_form.EnumSchemeItemType.Widget,
      multiple: true,
      def_value: import_defaults.default.prices,
      scheme: [
        {
          name: "title",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          type: import_react_json_form.EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "price",
          title: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
          type: import_react_json_form.EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "is_active",
          title: "\u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F?",
          type: import_react_json_form.EnumSchemeItemType.Checkbox,
          def_value: false
        },
        {
          name: "list",
          title: "\u041F\u0443\u043D\u043A\u0442\u044B",
          type: import_react_json_form.EnumSchemeItemType.Widget,
          multiple: true,
          def_value: [],
          scheme: [
            {
              name: "title",
              title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
              type: import_react_json_form.EnumSchemeItemType.Text,
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
  description: `\u041F\u0440\u0430\u0439\u0441\u044B 2`,
  image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
  value: import_defaults.default,
  scheme,
  view: import_view.default
};
var __default = setting;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  scheme
});
