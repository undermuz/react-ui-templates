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

// src/features/1/chakra/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_styled_components = __toESM(require("styled-components"));
var import_defaults = __toESM(require("../defaults.js"));
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var UiImageBox = (0, import_styled_components.default)(import_react.Box)`
    aspect-ratio: 1;
`;
var ImageBox = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UiImageBox, { w: "100%", bgColor: "gray.800", rounded: "lg" });
};
var GridBox = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Box, { w: "100%", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageBox, {}) });
};
var ChakraUIFeature1 = (props) => {
  const { value = import_defaults.default } = props;
  const {
    title = import_defaults.default.title,
    subtitle = import_defaults.default.subtitle,
    description = import_defaults.default.description
  } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.Container,
    {
      maxW: "container.xl",
      bgColor: "bg-block",
      p: "block.pad.1",
      paddingTop: "block.pad.1.top",
      paddingBottom: "block.pad.1.bot",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.HStack, { spacing: 100, p: 6, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_react.VStack,
          {
            justify: "center",
            w: "100%",
            spacing: 6,
            align: "stretch",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.VStack, { justify: "center", align: "stretch", spacing: 0, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_react.Text,
                  {
                    as: "strong",
                    style: {
                      textTransform: "uppercase"
                    },
                    fontSize: "sm",
                    color: "gray.500",
                    children: subtitle
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Heading, { as: "h2", children: title })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react.Text,
                {
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
          import_react.Grid,
          {
            w: "100%",
            templateRows: "1fr 1fr",
            templateColumns: "1fr 1fr",
            gap: 4,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBox, {}),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBox, {}),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBox, {}),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridBox, {})
            ]
          }
        )
      ] })
    }
  );
};
var view_default = ChakraUIFeature1;
