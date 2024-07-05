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

// src/offer/2/chakra/index.tsx
var chakra_exports = {};
__export(chakra_exports, {
  default: () => chakra_default
});
module.exports = __toCommonJS(chakra_exports);
var import_react_json_form = require("@undermuz/react-json-form");
var import_defaults = __toESM(require("../defaults.js"));
var import_view = __toESM(require("./view.js"));
var WidgetName = "Offer";
var WidgetTitle = "\u041E\u0444\u0444\u0435\u0440";
var scheme = {
  id: WidgetName,
  scheme: [
    {
      name: "title",
      title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      type: import_react_json_form.EnumSchemeItemType.Text,
      def_value: ""
    },
    {
      name: "subtitle",
      title: "\u041F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
      type: import_react_json_form.EnumSchemeItemType.TextBlock,
      def_value: ""
    },
    {
      name: "button_text",
      title: "\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438",
      type: import_react_json_form.EnumSchemeItemType.Text,
      def_value: ""
    },
    {
      name: "show_button",
      title: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443?",
      type: import_react_json_form.EnumSchemeItemType.Checkbox,
      def_value: true
    },
    {
      name: "show_adv",
      title: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
      type: import_react_json_form.EnumSchemeItemType.Checkbox,
      def_value: true
    },
    {
      name: "image",
      title: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
      type: import_react_json_form.EnumSchemeItemType.Files,
      def_value: ""
    },
    {
      name: "advantage",
      title: "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
      type: import_react_json_form.EnumSchemeItemType.Widget,
      multiple: true,
      def_value: "",
      scheme: [
        {
          name: "title",
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          type: import_react_json_form.EnumSchemeItemType.Text,
          def_value: ""
        },
        {
          name: "image",
          title: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
          type: import_react_json_form.EnumSchemeItemType.Files,
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
  value: import_defaults.default,
  scheme,
  view: import_view.default
};
var chakra_default = Offer;
