// src/prices/2/view.tsx
import { Box, Button, Heading, Paragraph, Text, List } from "grommet";
import { StatusGood } from "grommet-icons";
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
  const color = !is_active ? "light-1" : "accent-2";
  return /* @__PURE__ */ jsxs(
    Box,
    {
      pad: "medium",
      basis: "full",
      justify: "between",
      direction: "row",
      align: "center",
      alignContent: "center",
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
        /* @__PURE__ */ jsxs(Box, { basis: "1/4", children: [
          /* @__PURE__ */ jsx(
            Heading,
            {
              level: 3,
              size: "small",
              margin: { top: "none", bottom: "small" },
              children: title
            }
          ),
          /* @__PURE__ */ jsxs(Text, { size: "xlarge", weight: "bolder", children: [
            price,
            " \u20BD"
          ] })
        ] }),
        /* @__PURE__ */ jsx(Box, { basis: "2/4", align: "center", alignContent: "center", children: /* @__PURE__ */ jsx(
          List,
          {
            data: list,
            border: false,
            pad: { vertical: "xxsmall" },
            style: { columns: 2 },
            children: (listItem) => {
              return /* @__PURE__ */ jsxs(Box, { direction: "row", children: [
                /* @__PURE__ */ jsx(StatusGood, { size: "medium", color: "brand" }),
                /* @__PURE__ */ jsx(
                  Text,
                  {
                    size: "small",
                    margin: { left: "small" },
                    children: listItem.title
                  },
                  listItem.id
                )
              ] });
            }
          }
        ) }),
        /* @__PURE__ */ jsx(
          Button,
          {
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
var Price2 = (props) => {
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
  return /* @__PURE__ */ jsx(Box, { background: { color: "light-3" }, align: "center", pad: "xlarge", children: /* @__PURE__ */ jsxs(Box, { width: "xxlarge", gap: "large", children: [
    /* @__PURE__ */ jsxs(
      Box,
      {
        width: "100%",
        direction: "column",
        align: "center",
        gap: "small",
        children: [
          /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Heading, { level: 2, children: title }) }),
          /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Paragraph, { children: subtitle }) })
        ]
      }
    ),
    prices.length > 0 && /* @__PURE__ */ jsx(
      Box,
      {
        direction: "column",
        background: "light-3",
        gap: "medium",
        basis: "full",
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
var view_default = Price2;
export {
  view_default as default
};
