// src/stepper/1/chakra/view.tsx
import DEF_VALUE from "../defaults.mjs";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { jsx, jsxs } from "react/jsx-runtime";
var ChakraUiStepper1 = (props) => {
  const { id = 0, value = DEF_VALUE } = props;
  const { title = "", list = [] } = value;
  return /* @__PURE__ */ jsx(
    Container,
    {
      maxW: "container.xl",
      bgColor: "block.bg.1",
      color: "block.text.1",
      p: "block.pad.1",
      paddingTop: "block.pad.1.top",
      paddingBottom: "block.pad.1.bot",
      children: /* @__PURE__ */ jsxs(Tabs, { display: "flex", flexDir: "column", size: "xl", children: [
        /* @__PURE__ */ jsxs(Box, { position: "relative", children: [
          /* @__PURE__ */ jsxs(HStack, { justify: "space-between", children: [
            /* @__PURE__ */ jsx(Heading, { as: "h2", children: title }),
            /* @__PURE__ */ jsx(
              TabList,
              {
                borderColor: "tabs.list.border",
                borderBottomWidth: "3px",
                gap: "tabs.items",
                children: list.map((item, index) => /* @__PURE__ */ jsx(
                  Tab,
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
          /* @__PURE__ */ jsx(
            TabIndicator,
            {
              mt: "-1.5px",
              height: "2px",
              bg: "tabs.item.text.selected",
              borderRadius: "1px"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(TabPanels, { children: list.map((item, index) => /* @__PURE__ */ jsx(TabPanel, { p: 0, children: /* @__PURE__ */ jsxs(
          Grid,
          {
            templateColumns: ["1fr", "1fr 40%"],
            templateRows: ["1fr 1fr", "1fr"],
            gap: 6,
            children: [
              /* @__PURE__ */ jsx(
                Grid,
                {
                  templateColumns: ["1fr", "1fr 1fr"],
                  gap: 6,
                  children: item.list.map((item2, index2) => /* @__PURE__ */ jsxs(
                    Grid,
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
                        /* @__PURE__ */ jsx(
                          Box,
                          {
                            aspectRatio: "1 / 1",
                            bgColor: "gray.200",
                            rounded: "lg",
                            w: "60px"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Heading,
                          {
                            as: "h4",
                            color: "grid.text.1",
                            fontSize: "grid.text",
                            fontWeight: "bold",
                            children: item2.title
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Flex,
                          {
                            justify: "flex-end",
                            align: "center",
                            children: /* @__PURE__ */ jsx(
                              Text,
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
              /* @__PURE__ */ jsx(
                Box,
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
export {
  view_default as default
};
