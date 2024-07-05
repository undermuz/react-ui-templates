// src/features/1/grommet/view.tsx
import { Box, Heading, Paragraph, Grid } from "grommet";
import styled from "styled-components";
import DEF_VALUE from "../defaults.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
var UiImageBox = styled(Box)`
    aspect-ratio: 1;
`;
var ImageBox = () => {
  return /* @__PURE__ */ jsx(
    UiImageBox,
    {
      fill: "horizontal",
      background: { color: "light-3" },
      round: "small"
    }
  );
};
var GridBox = () => {
  return /* @__PURE__ */ jsx(Box, { fill: "horizontal", children: /* @__PURE__ */ jsx(ImageBox, {}) });
};
var GrommetFeature1 = (props) => {
  const { value = DEF_VALUE } = props;
  const {
    title = DEF_VALUE.title,
    subtitle = DEF_VALUE.subtitle,
    description = DEF_VALUE.description
  } = value;
  return /* @__PURE__ */ jsx(Box, { align: "center", fill: "horizontal", children: /* @__PURE__ */ jsx(Box, { width: "xlarge", children: /* @__PURE__ */ jsxs(Box, { direction: "row", gap: "xlarge", pad: { vertical: "medium" }, children: [
    /* @__PURE__ */ jsxs(
      Box,
      {
        direction: "column",
        justify: "center",
        fill: "horizontal",
        gap: "medium",
        children: [
          /* @__PURE__ */ jsxs(
            Box,
            {
              direction: "column",
              justify: "center",
              fill: "horizontal",
              gap: "xxsmall",
              children: [
                /* @__PURE__ */ jsx(
                  Paragraph,
                  {
                    color: "dark-3",
                    fill: true,
                    size: "small",
                    style: {
                      textTransform: "uppercase"
                    },
                    children: /* @__PURE__ */ jsx("strong", { children: subtitle })
                  }
                ),
                /* @__PURE__ */ jsx(Heading, { color: "dark-1", level: 2, size: "medium", children: title })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Paragraph,
            {
              color: "dark-2",
              margin: { top: "xsmall", bottom: "xsmall" },
              fill: true,
              size: "medium",
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
        justify: "center",
        fill: "horizontal",
        rows: ["1fr", "1fr"],
        columns: ["1fr", "1fr"],
        gap: "medium",
        children: [
          /* @__PURE__ */ jsx(GridBox, {}),
          /* @__PURE__ */ jsx(GridBox, {}),
          /* @__PURE__ */ jsx(GridBox, {}),
          /* @__PURE__ */ jsx(GridBox, {})
        ]
      }
    )
  ] }) }) });
};
var view_default = GrommetFeature1;
export {
  view_default as default
};
