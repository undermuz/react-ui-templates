// src/prices/1/view.tsx
import { Box, Button, Heading, Paragraph, Text, List } from "grommet";
import DEF_VALUE from "./defaults.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
var exampleButtonClick = () => {
  alert("click");
};
var PriceItem = ({
  data,
  button_text,
  onButtonClick = exampleButtonClick
}) => {
  const { title, price, list, is_active } = data;
  const color = !is_active ? "light-1" : "accent-1";
  return /* @__PURE__ */ jsxs(
    Box,
    {
      pad: "medium",
      basis: "1/3",
      justify: "center",
      align: "center",
      hoverIndicator: {
        background: {
          color: "accent-1"
        }
      },
      background: {
        color,
        opacity: "strong"
      },
      round: "small",
      children: [
        /* @__PURE__ */ jsx(
          Heading,
          {
            level: 3,
            size: "small",
            textAlign: "center",
            margin: { top: "none", bottom: "small" },
            children: title
          }
        ),
        /* @__PURE__ */ jsxs(Text, { size: "xlarge", textAlign: "center", weight: "bolder", children: [
          price,
          " \u20BD"
        ] }),
        /* @__PURE__ */ jsx(
          Text,
          {
            as: "div",
            size: "small",
            textAlign: "center",
            margin: { top: "small" },
            children: /* @__PURE__ */ jsx(
              List,
              {
                alignSelf: "center",
                data: list,
                border: false,
                pad: { vertical: "xxsmall" },
                children: (listItem) => {
                  return /* @__PURE__ */ jsx(Text, { children: listItem.title }, listItem.id);
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            margin: { top: "medium" },
            size: "medium",
            primary: is_active,
            onClick: onButtonClick,
            label: button_text
          }
        )
      ]
    }
  );
};
var Price1 = (props) => {
  const {
    id = 0,
    value = DEF_VALUE,
    onButtonClick = exampleButtonClick
  } = props;
  const {
    title = DEF_VALUE.title,
    subtitle = DEF_VALUE.subtitle,
    button_text = DEF_VALUE.button_text,
    prices = DEF_VALUE.prices
  } = value;
  return /* @__PURE__ */ jsx(Box, { background: { color: "light-3" }, align: "center", pad: "xlarge", children: /* @__PURE__ */ jsxs(Box, { width: "xxlarge", gap: "medium", children: [
    /* @__PURE__ */ jsxs(Box, { pad: "medium", direction: "column", align: "center", gap: "small", children: [
      /* @__PURE__ */ jsx(Box, { align: "center", children: /* @__PURE__ */ jsx(Heading, { level: 2, children: title }) }),
      /* @__PURE__ */ jsx(Box, { align: "center", children: /* @__PURE__ */ jsx(Paragraph, { children: subtitle }) })
    ] }),
    prices.length > 0 && /* @__PURE__ */ jsx(
      Box,
      {
        direction: "row-responsive",
        justify: "center",
        align: "start",
        pad: "small",
        background: "light-3",
        gap: "medium",
        basis: "full",
        width: "100%",
        children: prices.map((item, index) => /* @__PURE__ */ jsx(
          PriceItem,
          {
            data: item,
            button_text
          },
          item.id
        ))
      }
    )
  ] }) });
};
var view_default = Price1;
export {
  view_default as default
};
