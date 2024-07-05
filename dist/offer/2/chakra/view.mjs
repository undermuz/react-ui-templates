// src/offer/2/chakra/view.tsx
import DEF_VALUE from "../defaults.mjs";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Text,
  VStack
} from "@chakra-ui/react";
import { jsx, jsxs } from "react/jsx-runtime";
var exampleButtonClick = () => {
  alert("click");
};
var ChakraUIOffer2 = (props) => {
  const { value = DEF_VALUE, onButtonClick = exampleButtonClick } = props;
  const {
    title = DEF_VALUE.title,
    subtitle = DEF_VALUE.subtitle,
    show_button = DEF_VALUE.show_button,
    button_text = DEF_VALUE.button_text,
    show_adv = DEF_VALUE.show_adv,
    advantage = DEF_VALUE.advantage
  } = value;
  return /* @__PURE__ */ jsx(
    Container,
    {
      maxW: "container.xl",
      bgColor: "bg-block",
      p: "block.pad.1",
      paddingTop: "block.pad.1.top",
      paddingBottom: "block.pad.1.bot",
      children: /* @__PURE__ */ jsx(
        Box,
        {
          rounded: "1rem",
          boxShadow: "md",
          bgColor: "gray.900",
          color: "gray.100",
          children: /* @__PURE__ */ jsxs(Grid, { templateColumns: "7fr 3fr", gap: 20, children: [
            /* @__PURE__ */ jsxs(
              VStack,
              {
                align: "stretch",
                spacing: "3.25rem",
                pl: "5rem",
                pt: "2.5rem",
                children: [
                  /* @__PURE__ */ jsxs(VStack, { align: "stretch", spacing: "1.25rem", children: [
                    /* @__PURE__ */ jsx(Heading, { as: "h1", fontSize: "block.title.1", children: title }),
                    /* @__PURE__ */ jsx(Text, { fontSize: "block.desc.1", children: subtitle })
                  ] }),
                  show_adv && advantage.length > 0 && /* @__PURE__ */ jsx(HStack, { spacing: "2.25rem", children: advantage.map((item, index) => /* @__PURE__ */ jsxs(VStack, { align: "stretch", children: [
                    /* @__PURE__ */ jsx(
                      Text,
                      {
                        fontSize: "0.875rem",
                        fontFamily: "Rubik",
                        children: item.subtitle
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Text,
                      {
                        as: "strong",
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        fontSize: "1.25rem",
                        children: item.title
                      }
                    )
                  ] }, index)) }),
                  show_button && /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Button, { size: "lg", onClick: onButtonClick, children: button_text }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
              Box,
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
export {
  view_default as default
};
