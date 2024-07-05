// src/portfolio/1/chakra/view.tsx
import DEF_VALUE from "../defaults.mjs";
import {
  Badge,
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack
} from "@chakra-ui/react";
import { jsx, jsxs } from "react/jsx-runtime";
var ChakraUiPortfolio1 = (props) => {
  const { id = 0, value = DEF_VALUE } = props;
  const { title = "", list = [] } = value;
  return /* @__PURE__ */ jsx(
    Box,
    {
      bgColor: "block.bg.2",
      color: "block.text.2",
      w: "100%",
      mt: "2.75rem",
      children: /* @__PURE__ */ jsx(
        Container,
        {
          maxW: "container.xl",
          p: "block.pad.1",
          paddingTop: "block.pad.1.top.2",
          paddingBottom: "block.pad.1.bot",
          children: /* @__PURE__ */ jsxs(VStack, { align: "stretch", spacing: "block.pad.5", children: [
            /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Heading, { as: "h2", children: title }) }),
            /* @__PURE__ */ jsxs(Tabs, { display: "flex", flexDir: "column", size: "xl", children: [
              /* @__PURE__ */ jsxs(Box, { position: "relative", children: [
                /* @__PURE__ */ jsx(
                  TabList,
                  {
                    borderColor: "tabs.list.border.2",
                    borderBottomWidth: "3px",
                    gap: "tabs.items",
                    children: list.map((item, index) => /* @__PURE__ */ jsx(
                      Tab,
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
                /* @__PURE__ */ jsx(
                  TabIndicator,
                  {
                    mt: "-1.5px",
                    height: "2px",
                    bg: "tabs.item.text.2.selected",
                    borderRadius: "1px"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(TabPanels, { children: list.map((item, index) => /* @__PURE__ */ jsx(TabPanel, { children: /* @__PURE__ */ jsx(VStack, { align: "stretch", spacing: "5rem", children: item.list.map((item2, index2) => /* @__PURE__ */ jsxs(
                Grid,
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
                    /* @__PURE__ */ jsx(
                      Box,
                      {
                        bgColor: "gray.100",
                        rounded: "lg",
                        w: "100%",
                        h: "100%"
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      VStack,
                      {
                        align: "stretch",
                        gap: "2.5rem",
                        minH: "30rem",
                        py: "2.5rem",
                        px: "2.5rem",
                        paddingLeft: "3.75rem",
                        children: [
                          /* @__PURE__ */ jsxs(
                            VStack,
                            {
                              align: "stretch",
                              gap: "12px",
                              children: [
                                /* @__PURE__ */ jsx(
                                  Heading,
                                  {
                                    as: "h3",
                                    fontSize: "block.title.3",
                                    children: item2.title
                                  }
                                ),
                                /* @__PURE__ */ jsx(
                                  Text,
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
                          /* @__PURE__ */ jsxs(
                            VStack,
                            {
                              align: "stretch",
                              gap: "20px",
                              children: [
                                /* @__PURE__ */ jsx(HStack, { children: item2.tags.map(
                                  (item3, index3) => /* @__PURE__ */ jsx(
                                    Badge,
                                    {
                                      variant: "outline",
                                      children: item3.title
                                    },
                                    index3
                                  )
                                ) }),
                                /* @__PURE__ */ jsxs(
                                  VStack,
                                  {
                                    align: "stretch",
                                    gap: "12px",
                                    children: [
                                      /* @__PURE__ */ jsx(
                                        Text,
                                        {
                                          as: "strong",
                                          fontSize: "block.title.5",
                                          children: item2.subtitle2
                                        }
                                      ),
                                      /* @__PURE__ */ jsx(
                                        Text,
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
export {
  view_default as default
};
