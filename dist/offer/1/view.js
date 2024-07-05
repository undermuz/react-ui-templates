"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/offer/1/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_grommet = require("grommet");
var import_defaults = __toESM(require("./defaults.js"));
var import_jsx_runtime = require("react/jsx-runtime");
var exampleButtonClick = () => {
  alert("click");
};
var GrommetOffer1 = (props) => {
  const { value = import_defaults.default, onButtonClick = exampleButtonClick } = props;
  const {
    title = import_defaults.default.title,
    subtitle = import_defaults.default.subtitle,
    show_button = import_defaults.default.show_button,
    button_text = import_defaults.default.button_text,
    show_adv = import_defaults.default.show_adv,
    advantage = import_defaults.default.advantage
  } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { background: { color: "neutral-2", opacity: true }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { pad: "xlarge", align: "center", gap: "medium", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Paragraph, { children: subtitle }),
      show_button && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_grommet.Button,
        {
          primary: true,
          size: "large",
          onClick: onButtonClick,
          label: button_text
        }
      ) })
    ] }),
    show_adv && advantage.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { pad: "medium", background: { color: "neutral-2" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { direction: "row", justify: "around", children: advantage.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: item.image, alt: "" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: item.title })
    ] }, index)) }) })
  ] });
};
var view_default = GrommetOffer1;
