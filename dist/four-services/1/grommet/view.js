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

// src/four-services/1/grommet/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_grommet = require("grommet");
var import_defaults = __toESM(require("./defaults.js"));
var import_jsx_runtime = require("react/jsx-runtime");
var FourServices = (props) => {
  const { id = 0, value = import_defaults.default } = props;
  const { main = import_defaults.default.main, services = import_defaults.default.services } = value;
  const { title = "" } = main;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { id: `block-${id}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { width: "large", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { level: 2, children: title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { children: [
      Object.keys(services).map((key) => {
        const item = services[key];
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "block", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { level: 3, children: item.description }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              dangerouslySetInnerHTML: {
                __html: item.text
              }
            }
          ) })
        ] }, key);
      }),
      ","
    ] })
  ] }) });
};
var view_default = FourServices;
