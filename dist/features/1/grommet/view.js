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

// src/features/1/grommet/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_grommet = require("grommet");
var import_styled_components = __toESM(require("styled-components"));
var import_defaults = __toESM(require("../defaults.js"));
var import_jsx_runtime = require("react/jsx-runtime");
var UiImageBox = (0, import_styled_components.default)(import_grommet.Box)`
    aspect-ratio: 1;
`;
var ImageBox = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    UiImageBox,
    {
      fill: "horizontal",
      background: { color: "light-3" },
      round: "small"
    }
  );
};
var GridBox = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { fill: "horizontal", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageBox, {}) });
};
var GrommetFeature1 = (props) => {
  const { value = import_defaults.default } = props;
  const {
    title = import_defaults.default.title,
    subtitle = import_defaults.default.subtitle,
    description = import_defaults.default.description
  } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { align: "center", fill: "horizontal", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { width: "xlarge", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { direction: "row", gap: "xlarge", pad: { vertical: "medium" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_grommet.Box,
      {
        direction: "column",
        justify: "center",
        fill: "horizontal",
        gap: "medium",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            import_grommet.Box,
            {
              direction: "column",
              justify: "center",
              fill: "horizontal",
              gap: "xxsmall",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_grommet.Paragraph,
                  {
                    color: "dark-3",
                    fill: true,
                    size: "small",
                    style: {
                      textTransform: "uppercase"
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: subtitle })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { color: "dark-1", level: 2, size: "medium", children: title })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_grommet.Paragraph,
            {
              color: "dark-2",
              margin: { top: "xsmall", bottom: "xsmall" },
              fill: true,
              size: "medium",
              style: {
                lineHeight: "30px"
              },
              children: description
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_grommet.Grid,
      {
        justify: "center",
        fill: "horizontal",
        rows: ["1fr", "1fr"],
        columns: ["1fr", "1fr"],
        gap: "medium",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBox, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBox, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBox, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBox, {})
        ]
      }
    )
  ] }) }) });
};
var view_default = GrommetFeature1;
