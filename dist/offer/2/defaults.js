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

// src/offer/2/defaults.ts
var defaults_exports = {};
__export(defaults_exports, {
  default: () => defaults_default
});
module.exports = __toCommonJS(defaults_exports);
var DEF_VALUE_ADVANTAGE = [
  { id: 1, title: "\u0411\u043E\u043B\u0435\u0435 6 \u043B\u0435\u0442", subtitle: "\u041E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B" },
  { id: 2, title: "\u0421 2015 \u0433\u043E\u0434\u0430", subtitle: "\u0412 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438" },
  { id: 3, title: "HTML, CSS, React, JS", subtitle: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438" }
];
var DEF_VALUE = {
  title: "\u041C\u044B \u043B\u0443\u0447\u0448\u0438\u0435 \u0432 \u043C\u0438\u0440\u0435!",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  button_text: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C",
  show_button: true,
  show_adv: true,
  image: null,
  advantage: DEF_VALUE_ADVANTAGE
};
var defaults_default = DEF_VALUE;
