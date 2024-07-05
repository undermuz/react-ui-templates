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

// src/portfolio/1/chakra/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_defaults = __toESM(require("../defaults.js"));
var import_react = require("@chakra-ui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var ChakraUiPortfolio1 = (props) => {
  const { id = 0, value = import_defaults.default } = props;
  const { title = "", list = [] } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.Box,
    {
      bgColor: "block.bg.2",
      color: "block.text.2",
      w: "100%",
      mt: "2.75rem",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.Container,
        {
          maxW: "container.xl",
          p: "block.pad.1",
          paddingTop: "block.pad.1.top.2",
          paddingBottom: "block.pad.1.bot",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.VStack, { align: "stretch", spacing: "block.pad.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Heading, { as: "h2", children: title }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Tabs, { display: "flex", flexDir: "column", size: "xl", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Box, { position: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_react.TabList,
                  {
                    borderColor: "tabs.list.border.2",
                    borderBottomWidth: "3px",
                    gap: "tabs.items",
                    children: list.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_react.Tab,
                      {
                        color: "tabs.item.text.2",
                        fontSize: "tabs.item",
                        _selected: {
                          color: "tabs.item.text.2.selected"
                        },
                        children: item.title
                      },
                      index
                    ))
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_react.TabIndicator,
                  {
                    mt: "-1.5px",
                    height: "2px",
                    bg: "tabs.item.text.2.selected",
                    borderRadius: "1px"
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.TabPanels, { children: list.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.TabPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.VStack, { align: "stretch", spacing: "5rem", children: item.list.map((item2, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                import_react.Grid,
                {
                  templateColumns: [
                    "1fr",
                    "1fr 1fr"
                  ],
                  templateRows: [
                    "1fr 1fr",
                    "1fr"
                  ],
                  gap: 0,
                  bgColor: "tabs.item.bg.2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_react.Box,
                      {
                        bgColor: "gray.100",
                        rounded: "lg",
                        w: "100%",
                        h: "100%"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      import_react.VStack,
                      {
                        align: "stretch",
                        gap: "2.5rem",
                        minH: "30rem",
                        py: "2.5rem",
                        px: "2.5rem",
                        paddingLeft: "3.75rem",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            import_react.VStack,
                            {
                              align: "stretch",
                              gap: "12px",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  import_react.Heading,
                                  {
                                    as: "h3",
                                    fontSize: "block.title.3",
                                    children: item2.title
                                  }
                                ),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  import_react.Text,
                                  {
                                    as: "p",
                                    fontSize: "block.title.4",
                                    fontWeight: "300",
                                    children: item2.subtitle
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            import_react.VStack,
                            {
                              align: "stretch",
                              gap: "20px",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.HStack, { children: item2.tags.map(
                                  (item3, index3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    import_react.Badge,
                                    {
                                      variant: "outline",
                                      children: item3.title
                                    },
                                    index3
                                  )
                                ) }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                  import_react.VStack,
                                  {
                                    align: "stretch",
                                    gap: "12px",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                        import_react.Text,
                                        {
                                          as: "strong",
                                          fontSize: "block.title.5",
                                          children: item2.subtitle2
                                        }
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                        import_react.Text,
                                        {
                                          as: "p",
                                          fontWeight: "300",
                                          fontSize: "block.desc.3",
                                          children: item2.description
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                },
                index2
              )) }) }, index)) })
            ] })
          ] })
        }
      )
    }
  );
};
var view_default = ChakraUiPortfolio1;
