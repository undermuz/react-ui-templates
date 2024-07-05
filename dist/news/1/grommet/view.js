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

// src/news/1/grommet/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_styled_components = __toESM(require("styled-components"));
var import_grommet = require("grommet");
var import_defaults = __toESM(require("./defaults.js"));
var import_jsx_runtime = require("react/jsx-runtime");
var exampleButtonClick = () => {
  alert("click");
};
var BlogItemSmall = ({
  data,
  onButtonClick = exampleButtonClick
}) => {
  const { title, date, is_active } = data;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_grommet.Box,
    {
      pad: { horizontal: "medium", vertical: "small" },
      justify: "end",
      margin: { vertical: "xsmall" },
      hoverIndicator: {
        background: {
          color: "accent-1"
        }
      },
      background: {
        color: "light-1",
        opacity: "strong"
      },
      onClick: onButtonClick,
      round: "small",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { level: 3, size: "small", margin: "none", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Text, { as: "div", size: "xsmall", margin: { top: "xsmall" }, children: date })
      ]
    }
  );
};
var BlogItemBig = ({
  data,
  onButtonClick = exampleButtonClick
}) => {
  const { title, description, date, is_active } = data;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_grommet.Box,
    {
      direction: "row",
      margin: { vertical: "xsmall" },
      style: {
        gridRow: "1 / 3"
        // aspectRatio: is_active ? "auto" : "1.5"
      },
      hoverIndicator: {
        background: {
          color: "accent-1"
        }
      },
      background: {
        color: "accent-1",
        opacity: "strong"
      },
      onClick: onButtonClick,
      round: "small",
      overflow: "hidden",
      pad: "xlarge",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Grid, { width: "100%", columns: ["60%", "1fr"], children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { fill: "vertical", background: { color: "neutral-1" } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_grommet.Box,
          {
            pad: { horizontal: "medium", vertical: "small" },
            justify: "between",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { fill: "vertical", justify: "center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { level: 3, size: "small", margin: "none", children: title }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Paragraph, { size: "small", children: description })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Text, { as: "div", size: "xsmall", margin: { top: "xsmall" }, children: date })
            ]
          }
        )
      ] })
    }
  );
};
var CustomGrid = import_styled_components.default.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 30%;
    gap: 10px;
`;
var Blog1 = (props) => {
  const {
    id = 0,
    value = import_defaults.default,
    onButtonClick = exampleButtonClick
  } = props;
  const {
    title = import_defaults.default.title,
    subtitle = import_defaults.default.subtitle,
    list = import_defaults.default.list
  } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { background: { color: "light-3" }, align: "center", pad: "xlarge", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { width: "xlarge", gap: "medium", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { direction: "column", align: "start", gap: "small", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { level: 2, margin: { vertical: "xsmall" }, children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Paragraph, { margin: { vertical: "xsmall" }, children: subtitle })
    ] }),
    list.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_grommet.Grid,
      {
        columns: ["1fr", "30%"],
        rows: "small",
        gap: "medium",
        children: list.map(
          (item) => item.is_active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogItemBig, { data: item }, item.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogItemSmall, { data: item }, item.id)
        )
      }
    ) })
  ] }) });
};
var view_default = Blog1;
