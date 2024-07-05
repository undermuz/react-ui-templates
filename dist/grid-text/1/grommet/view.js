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

// src/grid-text/1/grommet/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_grommet = require("grommet");
var import_react = require("react");
var import_defaults = __toESM(require("../defaults.js"));
var import_jsx_runtime = require("react/jsx-runtime");
var GridText = (props) => {
  const { id = 0, value = import_defaults.default } = props;
  const { title = "", list = [] } = value;
  const size = (0, import_react.useContext)(import_grommet.ResponsiveContext);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { pad: "xlarge", gap: "large", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { align: "center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { level: 2, children: title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_grommet.Grid,
      {
        columns: size !== "small" ? list.map(() => "1fr") : "100%",
        gap: "small",
        align: "center",
        justify: "center",
        children: list.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_grommet.Box,
          {
            pad: "medium",
            background: { color: "light-2" },
            round: "small",
            height: "small",
            direction: "column",
            justify: "around",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { level: 3, children: item.title }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Paragraph, { size: "small", children: item.subtitle })
            ]
          },
          index
        ))
      }
    )
  ] });
};
var view_default = GridText;
