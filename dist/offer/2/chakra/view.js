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

// src/offer/2/chakra/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_defaults = __toESM(require("../defaults.js"));
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var exampleButtonClick = () => {
  alert("click");
};
var ChakraUIOffer2 = (props) => {
  const { value = import_defaults.default, onButtonClick = exampleButtonClick } = props;
  const {
    title = import_defaults.default.title,
    subtitle = import_defaults.default.subtitle,
    show_button = import_defaults.default.show_button,
    button_text = import_defaults.default.button_text,
    show_adv = import_defaults.default.show_adv,
    advantage = import_defaults.default.advantage
  } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.Container,
    {
      maxW: "container.xl",
      bgColor: "bg-block",
      p: "block.pad.1",
      paddingTop: "block.pad.1.top",
      paddingBottom: "block.pad.1.bot",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Box,
        {
          rounded: "1rem",
          boxShadow: "md",
          bgColor: "gray.900",
          color: "gray.100",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Grid, { templateColumns: "7fr 3fr", gap: 20, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              import_react.VStack,
              {
                align: "stretch",
                spacing: "3.25rem",
                pl: "5rem",
                pt: "2.5rem",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.VStack, { align: "stretch", spacing: "1.25rem", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Heading, { as: "h1", fontSize: "block.title.1", children: title }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Text, { fontSize: "block.desc.1", children: subtitle })
                  ] }),
                  show_adv && advantage.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.HStack, { spacing: "2.25rem", children: advantage.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.VStack, { align: "stretch", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_react.Text,
                      {
                        fontSize: "0.875rem",
                        fontFamily: "Rubik",
                        children: item.subtitle
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_react.Text,
                      {
                        as: "strong",
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        fontSize: "1.25rem",
                        children: item.title
                      }
                    )
                  ] }, index)) }),
                  show_button && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Button, { size: "lg", onClick: onButtonClick, children: button_text }) })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react.Box,
              {
                bgColor: "gray.100",
                sx: { aspectRatio: "1" },
                rounded: 30
              }
            ) })
          ] })
        }
      )
    }
  );
};
var view_default = ChakraUIOffer2;
