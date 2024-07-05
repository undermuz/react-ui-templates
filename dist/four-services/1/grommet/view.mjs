// src/four-services/1/grommet/view.tsx
import { Box, Heading } from "grommet";
import DEF_VALUE from "./defaults.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
var FourServices = (props) => {
  const { id = 0, value = DEF_VALUE } = props;
  const { main = DEF_VALUE.main, services = DEF_VALUE.services } = value;
  const { title = "" } = main;
  return /* @__PURE__ */ jsx(Box, { id: `block-${id}`, children: /* @__PURE__ */ jsxs(Box, { width: "large", children: [
    /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Heading, { level: 2, children: title }) }),
    /* @__PURE__ */ jsxs(Box, { children: [
      Object.keys(services).map((key) => {
        const item = services[key];
        return /* @__PURE__ */ jsxs("div", { className: "block", children: [
          /* @__PURE__ */ jsx(Heading, { level: 3, children: item.description }),
          /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
            "div",
            {
              dangerouslySetInnerHTML: {
                __html: item.text
              }
            }
          ) })
        ] }, key);
      }),
      ","
    ] })
  ] }) });
};
var view_default = FourServices;
export {
  view_default as default
};
