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

// src/features/2/grommet/defaults.tsx
var defaults_exports = {};
__export(defaults_exports, {
  DEF_VALUE: () => DEF_VALUE,
  default: () => defaults_default
});
module.exports = __toCommonJS(defaults_exports);
var DEF_VALUE = {
  title: "\u041C\u044B \u043B\u0443\u0447\u0448\u0430\u044F \u0432 \u043C\u0438\u0440 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F!",
  subtitle: "Lorem ipsum dolor sit amet",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing
    elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis
    nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`
};
var defaults_default = DEF_VALUE;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEF_VALUE
});
