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

// src/grid-text/1/chakra/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_defaults = __toESM(require("../defaults.js"));
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var ChakraUiGridText = (props) => {
  const { id = 0, value = import_defaults.default } = props;
  const { title = "", list = [] } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.Container,
    {
      maxW: "container.xl",
      p: "block.pad.1",
      paddingTop: "block.pad.1.top",
      paddingBottom: "block.pad.1.bot",
      bgColor: "block.bg",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.VStack, { align: "stretch", spacing: 6, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Heading, { as: "h2", children: title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react.Grid,
          {
            templateColumns: ["100%", list.map(() => "1fr").join(" ")],
            gap: "block.pad.2",
            children: list.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_react.VStack,
              {
                bgColor: "white",
                spacing: "block.pad.6",
                p: "block.pad.3",
                rounded: 6,
                align: "stretch",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Heading, { as: "h3", fontSize: "block.title.2", children: item.title }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Text, { fontSize: "block.desc.2", children: item.subtitle })
                ]
              },
              index
            ))
          }
        )
      ] })
    }
  );
};
var view_default = ChakraUiGridText;
