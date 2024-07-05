// src/grid-text/1/chakra/view.tsx
import DEF_VALUE from "../defaults.mjs";
import { Box, Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { jsx, jsxs } from "react/jsx-runtime";
var ChakraUiGridText = (props) => {
  const { id = 0, value = DEF_VALUE } = props;
  const { title = "", list = [] } = value;
  return /* @__PURE__ */ jsx(
    Container,
    {
      maxW: "container.xl",
      p: "block.pad.1",
      paddingTop: "block.pad.1.top",
      paddingBottom: "block.pad.1.bot",
      bgColor: "block.bg",
      children: /* @__PURE__ */ jsxs(VStack, { align: "stretch", spacing: 6, children: [
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Heading, { as: "h2", children: title }) }),
        /* @__PURE__ */ jsx(
          Grid,
          {
            templateColumns: ["100%", list.map(() => "1fr").join(" ")],
            gap: "block.pad.2",
            children: list.map((item, index) => /* @__PURE__ */ jsxs(
              VStack,
              {
                bgColor: "white",
                spacing: "block.pad.6",
                p: "block.pad.3",
                rounded: 6,
                align: "stretch",
                children: [
                  /* @__PURE__ */ jsx(Heading, { as: "h3", fontSize: "block.title.2", children: item.title }),
                  /* @__PURE__ */ jsx(Text, { fontSize: "block.desc.2", children: item.subtitle })
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
export {
  view_default as default
};
