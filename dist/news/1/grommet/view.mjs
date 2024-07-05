// src/news/1/grommet/view.tsx
import styled from "styled-components";
import { Box, Heading, Paragraph, Text, Grid } from "grommet";
import DEF_VALUE from "./defaults.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
var exampleButtonClick = () => {
  alert("click");
};
var BlogItemSmall = ({
  data,
  onButtonClick = exampleButtonClick
}) => {
  const { title, date, is_active } = data;
  return /* @__PURE__ */ jsxs(
    Box,
    {
      pad: { horizontal: "medium", vertical: "small" },
      justify: "end",
      margin: { vertical: "xsmall" },
      hoverIndicator: {
        background: {
          color: "accent-1"
        }
      },
      background: {
        color: "light-1",
        opacity: "strong"
      },
      onClick: onButtonClick,
      round: "small",
      children: [
        /* @__PURE__ */ jsx(Heading, { level: 3, size: "small", margin: "none", children: title }),
        /* @__PURE__ */ jsx(Text, { as: "div", size: "xsmall", margin: { top: "xsmall" }, children: date })
      ]
    }
  );
};
var BlogItemBig = ({
  data,
  onButtonClick = exampleButtonClick
}) => {
  const { title, description, date, is_active } = data;
  return /* @__PURE__ */ jsx(
    Box,
    {
      direction: "row",
      margin: { vertical: "xsmall" },
      style: {
        gridRow: "1 / 3"
        // aspectRatio: is_active ? "auto" : "1.5"
      },
      hoverIndicator: {
        background: {
          color: "accent-1"
        }
      },
      background: {
        color: "accent-1",
        opacity: "strong"
      },
      onClick: onButtonClick,
      round: "small",
      overflow: "hidden",
      pad: "xlarge",
      children: /* @__PURE__ */ jsxs(Grid, { width: "100%", columns: ["60%", "1fr"], children: [
        /* @__PURE__ */ jsx(Box, { fill: "vertical", background: { color: "neutral-1" } }),
        /* @__PURE__ */ jsxs(
          Box,
          {
            pad: { horizontal: "medium", vertical: "small" },
            justify: "between",
            children: [
              /* @__PURE__ */ jsxs(Box, { fill: "vertical", justify: "center", children: [
                /* @__PURE__ */ jsx(Heading, { level: 3, size: "small", margin: "none", children: title }),
                /* @__PURE__ */ jsx(Paragraph, { size: "small", children: description })
              ] }),
              /* @__PURE__ */ jsx(Text, { as: "div", size: "xsmall", margin: { top: "xsmall" }, children: date })
            ]
          }
        )
      ] })
    }
  );
};
var CustomGrid = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 30%;
    gap: 10px;
`;
var Blog1 = (props) => {
  const {
    id = 0,
    value = DEF_VALUE,
    onButtonClick = exampleButtonClick
  } = props;
  const {
    title = DEF_VALUE.title,
    subtitle = DEF_VALUE.subtitle,
    list = DEF_VALUE.list
  } = value;
  return /* @__PURE__ */ jsx(Box, { background: { color: "light-3" }, align: "center", pad: "xlarge", children: /* @__PURE__ */ jsxs(Box, { width: "xlarge", gap: "medium", children: [
    /* @__PURE__ */ jsxs(Box, { direction: "column", align: "start", gap: "small", children: [
      /* @__PURE__ */ jsx(Heading, { level: 2, margin: { vertical: "xsmall" }, children: title }),
      /* @__PURE__ */ jsx(Paragraph, { margin: { vertical: "xsmall" }, children: subtitle })
    ] }),
    list.length > 0 && /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
      Grid,
      {
        columns: ["1fr", "30%"],
        rows: "small",
        gap: "medium",
        children: list.map(
          (item) => item.is_active ? /* @__PURE__ */ jsx(BlogItemBig, { data: item }, item.id) : /* @__PURE__ */ jsx(BlogItemSmall, { data: item }, item.id)
        )
      }
    ) })
  ] }) });
};
var view_default = Blog1;
export {
  view_default as default
};
