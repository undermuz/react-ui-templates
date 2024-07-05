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

// src/news/1/grommet/index.tsx
var grommet_exports = {};
__export(grommet_exports, {
  default: () => grommet_default,
  scheme: () => scheme
});
module.exports = __toCommonJS(grommet_exports);
var import_react_json_form = require("@undermuz/react-json-form");
var import_defaults = __toESM(require("./defaults.js"));
var import_view = __toESM(require("./view.js"));
var WidgetName = "Blog1";
var WidgetTitle = "\u0411\u043B\u043E\u0433/\u041D\u043E\u0432\u043E\u0441\u0442\u0438 1";
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
      name: "list",
      title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
      type: import_react_json_form.EnumSchemeItemType.Widget,
      multiple: true,
      def_value: import_defaults.default.list,
      scheme: [
        {
          name: "title",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          type: import_react_json_form.EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "description",
          title: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
          type: import_react_json_form.EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "date",
          title: "\u0414\u0430\u0442\u0430",
          type: import_react_json_form.EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "is_active",
          title: "\u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F?",
          type: import_react_json_form.EnumSchemeItemType.Checkbox,
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
  value: import_defaults.default,
  scheme,
  view: import_view.default
};
var grommet_default = setting;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  scheme
});
