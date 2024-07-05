// src/features/1/chakra/view.tsx
import styled from "styled-components";
import DEF_VALUE from "../defaults.mjs";
import {
  Box,
  Container,
  Grid,
  Heading,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import { jsx, jsxs } from "react/jsx-runtime";
var UiImageBox = styled(Box)`
    aspect-ratio: 1;
`;
var ImageBox = () => {
  return /* @__PURE__ */ jsx(UiImageBox, { w: "100%", bgColor: "gray.800", rounded: "lg" });
};
var GridBox = () => {
  return /* @__PURE__ */ jsx(Box, { w: "100%", children: /* @__PURE__ */ jsx(ImageBox, {}) });
};
var ChakraUIFeature1 = (props) => {
  const { value = DEF_VALUE } = props;
  const {
    title = DEF_VALUE.title,
    subtitle = DEF_VALUE.subtitle,
    description = DEF_VALUE.description
  } = value;
  return /* @__PURE__ */ jsx(
    Container,
    {
      maxW: "container.xl",
      bgColor: "bg-block",
      p: "block.pad.1",
      paddingTop: "block.pad.1.top",
      paddingBottom: "block.pad.1.bot",
      children: /* @__PURE__ */ jsxs(HStack, { spacing: 100, p: 6, children: [
        /* @__PURE__ */ jsxs(
          VStack,
          {
            justify: "center",
            w: "100%",
            spacing: 6,
            align: "stretch",
            children: [
              /* @__PURE__ */ jsxs(VStack, { justify: "center", align: "stretch", spacing: 0, children: [
                /* @__PURE__ */ jsx(
                  Text,
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
                /* @__PURE__ */ jsx(Heading, { as: "h2", children: title })
              ] }),
              /* @__PURE__ */ jsx(
                Text,
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
        /* @__PURE__ */ jsxs(
          Grid,
          {
            w: "100%",
            templateRows: "1fr 1fr",
            templateColumns: "1fr 1fr",
            gap: 4,
            children: [
              /* @__PURE__ */ jsx(GridBox, {}),
              /* @__PURE__ */ jsx(GridBox, {}),
              /* @__PURE__ */ jsx(GridBox, {}),
              /* @__PURE__ */ jsx(GridBox, {})
            ]
          }
        )
      ] })
    }
  );
};
var view_default = ChakraUIFeature1;
export {
  view_default as default
};
