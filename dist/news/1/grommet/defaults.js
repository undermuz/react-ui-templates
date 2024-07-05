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

// src/news/1/grommet/defaults.tsx
var defaults_exports = {};
__export(defaults_exports, {
  DEF_VALUE: () => DEF_VALUE,
  DEF_VALUE_LIST: () => DEF_VALUE_LIST,
  default: () => defaults_default
});
module.exports = __toCommonJS(defaults_exports);
var DEF_VALUE_LIST = [
  {
    id: 1,
    description: "Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",
    title: "Simple plan",
    is_active: true,
    date: "15 Aug 2022"
  },
  {
    id: 2,
    description: "Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",
    title: "Simfdg  gan",
    is_active: false,
    date: "16 Aug 2022"
  },
  {
    id: 2,
    description: "Lorem ipsum dolor Sit amet consectetur adipiscing Elit sed do eiusmod tempor Incididunt ut labore",
    title: "Simfdg  gan",
    is_active: false,
    date: "16 Aug 2022"
  }
];
var DEF_VALUE = {
  title: "\u041C\u044B \u043B\u0443\u0447\u0448\u0438\u0435 \u0432 \u043C\u0438\u0440\u0435!",
  subtitle: "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441 \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0441\u043A\u0438\u0434\u043A\u0443 50%",
  list: DEF_VALUE_LIST
};
var defaults_default = DEF_VALUE;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEF_VALUE,
  DEF_VALUE_LIST
});
