"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/offer/1/defaults.ts
var defaults_exports = {};
__export(defaults_exports, {
  default: () => defaults_default
});
module.exports = __toCommonJS(defaults_exports);
var DEF_VALUE_ADVANTAGE = [
  { id: 1, title: "\u0421 \u043D\u0430\u043C\u0438 \u043F\u0440\u043E\u0449\u0435", image: "" },
  { id: 2, title: "\u0412\u044B\u0433\u043E\u0434\u0430 \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u0439 \u043F\u043E\u043A\u0443\u043F\u043A\u0435", image: "" },
  { id: 3, title: "\u0420\u043E\u0441\u0442 \u043D\u0430 146%", image: "" }
];
var DEF_VALUE = {
  title: "\u041C\u044B \u043B\u0443\u0447\u0448\u0438\u0435 \u0432 \u043C\u0438\u0440\u0435!",
  subtitle: "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443 50%",
  button_text: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C",
  show_button: true,
  show_adv: true,
  image: null,
  advantage: DEF_VALUE_ADVANTAGE
};
var defaults_default = DEF_VALUE;
