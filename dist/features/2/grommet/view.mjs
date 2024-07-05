// src/features/2/grommet/view.tsx
import { Box, Heading, Paragraph } from "grommet";
import DEF_VALUE from "./defaults.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
var Feature1 = (props) => {
  const { value = DEF_VALUE } = props;
  const {
    title = DEF_VALUE.title,
    // subtitle = DEF_VALUE.subtitle,
    description = DEF_VALUE.description
  } = value;
  return /* @__PURE__ */ jsx(Box, { align: "center", fill: "horizontal", children: /* @__PURE__ */ jsx(Box, { width: "xlarge", children: /* @__PURE__ */ jsxs(Box, { direction: "row", gap: "xlarge", pad: { vertical: "medium" }, children: [
    /* @__PURE__ */ jsx(Box, {}),
    /* @__PURE__ */ jsxs(Box, { direction: "column", justify: "center", fill: "horizontal", children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          color: "dark-1",
          level: 2,
          size: "medium",
          margin: { top: "none", bottom: "medium" },
          children: title
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
    ] })
  ] }) }) });
};
var view_default = Feature1;
export {
  view_default as default
};
