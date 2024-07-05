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

// src/four-services/1/grommet/defaults.tsx
var defaults_exports = {};
__export(defaults_exports, {
  DEF_VALUE: () => DEF_VALUE,
  default: () => defaults_default
});
module.exports = __toCommonJS(defaults_exports);
var DEF_VALUE = {
  main: {
    title: "213"
  },
  services: {
    first_service: {
      description: "1",
      text: "111"
    },
    second_service: {
      description: "2",
      text: "222"
    },
    third_service: {
      description: "3",
      text: "333"
    },
    fourth_service: {
      description: "4",
      text: "444"
    }
  }
};
var defaults_default = DEF_VALUE;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEF_VALUE
});
