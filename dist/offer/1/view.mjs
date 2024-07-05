// src/offer/1/view.tsx
import { Box, Button, Heading, Paragraph } from "grommet";
import DEF_VALUE from "./defaults.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
var exampleButtonClick = () => {
  alert("click");
};
var GrommetOffer1 = (props) => {
  const { value = DEF_VALUE, onButtonClick = exampleButtonClick } = props;
  const {
    title = DEF_VALUE.title,
    subtitle = DEF_VALUE.subtitle,
    show_button = DEF_VALUE.show_button,
    button_text = DEF_VALUE.button_text,
    show_adv = DEF_VALUE.show_adv,
    advantage = DEF_VALUE.advantage
  } = value;
  return /* @__PURE__ */ jsxs(Box, { background: { color: "neutral-2", opacity: true }, children: [
    /* @__PURE__ */ jsxs(Box, { pad: "xlarge", align: "center", gap: "medium", children: [
      /* @__PURE__ */ jsx(Heading, { children: title }),
      /* @__PURE__ */ jsx(Paragraph, { children: subtitle }),
      show_button && /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
        Button,
        {
          primary: true,
          size: "large",
          onClick: onButtonClick,
          label: button_text
        }
      ) })
    ] }),
    show_adv && advantage.length > 0 && /* @__PURE__ */ jsx(Box, { pad: "medium", background: { color: "neutral-2" }, children: /* @__PURE__ */ jsx(Box, { direction: "row", justify: "around", children: advantage.map((item, index) => /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx("img", { src: item.image, alt: "" }),
      /* @__PURE__ */ jsx("strong", { children: item.title })
    ] }, index)) }) })
  ] });
};
var view_default = GrommetOffer1;
export {
  view_default as default
};
