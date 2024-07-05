// src/grid-text/1/grommet/view.tsx
import { Box, Grid, Heading, Paragraph, ResponsiveContext } from "grommet";
import { useContext } from "react";
import DEF_VALUE from "../defaults.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
var GridText = (props) => {
  const { id = 0, value = DEF_VALUE } = props;
  const { title = "", list = [] } = value;
  const size = useContext(ResponsiveContext);
  return /* @__PURE__ */ jsxs(Box, { pad: "xlarge", gap: "large", children: [
    /* @__PURE__ */ jsx(Box, { align: "center", children: /* @__PURE__ */ jsx(Heading, { level: 2, children: title }) }),
    /* @__PURE__ */ jsx(
      Grid,
      {
        columns: size !== "small" ? list.map(() => "1fr") : "100%",
        gap: "small",
        align: "center",
        justify: "center",
        children: list.map((item, index) => /* @__PURE__ */ jsxs(
          Box,
          {
            pad: "medium",
            background: { color: "light-2" },
            round: "small",
            height: "small",
            direction: "column",
            justify: "around",
            children: [
              /* @__PURE__ */ jsx(Heading, { level: 3, children: item.title }),
              /* @__PURE__ */ jsx(Paragraph, { size: "small", children: item.subtitle })
            ]
          },
          index
        ))
      }
    )
  ] });
};
var view_default = GridText;
export {
  view_default as default
};
