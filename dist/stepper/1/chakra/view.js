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

// src/stepper/1/chakra/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_defaults = __toESM(require("../defaults.js"));
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var ChakraUiStepper1 = (props) => {
  const { id = 0, value = import_defaults.default } = props;
  const { title = "", list = [] } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.Container,
    {
      maxW: "container.xl",
      bgColor: "block.bg.1",
      color: "block.text.1",
      p: "block.pad.1",
      paddingTop: "block.pad.1.top",
      paddingBottom: "block.pad.1.bot",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Tabs, { display: "flex", flexDir: "column", size: "xl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Box, { position: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.HStack, { justify: "space-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Heading, { as: "h2", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react.TabList,
              {
                borderColor: "tabs.list.border",
                borderBottomWidth: "3px",
                gap: "tabs.items",
                children: list.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_react.Tab,
                  {
                    color: "tabs.item.text",
                    fontSize: "tabs.item",
                    _selected: {
                      color: "tabs.item.text.selected"
                    },
                    children: item.title
                  },
                  index
                ))
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react.TabIndicator,
            {
              mt: "-1.5px",
              height: "2px",
              bg: "tabs.item.text.selected",
              borderRadius: "1px"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.TabPanels, { children: list.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.TabPanel, { p: 0, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          import_react.Grid,
          {
            templateColumns: ["1fr", "1fr 40%"],
            templateRows: ["1fr 1fr", "1fr"],
            gap: 6,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react.Grid,
                {
                  templateColumns: ["1fr", "1fr 1fr"],
                  gap: 6,
                  children: item.list.map((item2, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    import_react.Grid,
                    {
                      templateColumns: [
                        "1fr",
                        "60px 5fr 1fr"
                      ],
                      gap: `1.25rem`,
                      border: "1px solid",
                      borderColor: "gray.400",
                      rounded: "lg",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      px: `28px`,
                      py: `18px`,
                      paddingRight: `14px`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          import_react.Box,
                          {
                            aspectRatio: "1 / 1",
                            bgColor: "gray.200",
                            rounded: "lg",
                            w: "60px"
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          import_react.Heading,
                          {
                            as: "h4",
                            color: "grid.text.1",
                            fontSize: "grid.text",
                            fontWeight: "bold",
                            children: item2.title
                          }
                        ),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                          import_react.Flex,
                          {
                            justify: "flex-end",
                            align: "center",
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              import_react.Text,
                              {
                                as: "strong",
                                color: "grid.text.2",
                                fontSize: "grid.text.2",
                                children: index2 + 1
                              }
                            )
                          }
                        )
                      ]
                    },
                    index2
                  ))
                },
                index
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_react.Box,
                {
                  aspectRatio: "1 / 1.1",
                  bgColor: "gray.200",
                  rounded: "lg"
                }
              )
            ]
          },
          index
        ) }, index)) })
      ] })
    }
  );
};
var view_default = ChakraUiStepper1;
