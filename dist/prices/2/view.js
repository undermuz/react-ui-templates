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

// src/prices/2/view.tsx
var view_exports = {};
__export(view_exports, {
  default: () => view_default
});
module.exports = __toCommonJS(view_exports);
var import_grommet = require("grommet");
var import_grommet_icons = require("grommet-icons");
var import_defaults = __toESM(require("./defaults.js"));
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_grommet.Box,
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { basis: "1/4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_grommet.Heading,
            {
              level: 3,
              size: "small",
              margin: { top: "none", bottom: "small" },
              children: title
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Text, { size: "xlarge", weight: "bolder", children: [
            price,
            " \u20BD"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { basis: "2/4", align: "center", alignContent: "center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_grommet.List,
          {
            data: list,
            border: false,
            pad: { vertical: "xxsmall" },
            style: { columns: 2 },
            children: (listItem) => {
              return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { direction: "row", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet_icons.StatusGood, { size: "medium", color: "brand" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  import_grommet.Text,
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_grommet.Button,
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
    value = import_defaults.default,
    onButtonClick = exampleButtonClick
  } = props;
  const {
    title = import_defaults.default.title,
    subtitle = import_defaults.default.subtitle,
    button_text = import_defaults.default.button_text,
    prices = import_defaults.default.prices
  } = value;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { background: { color: "light-3" }, align: "center", pad: "xlarge", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_grommet.Box, { width: "xxlarge", gap: "large", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_grommet.Box,
      {
        width: "100%",
        direction: "column",
        align: "center",
        gap: "small",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Heading, { level: 2, children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_grommet.Paragraph, { children: subtitle }) })
        ]
      }
    ),
    prices.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_grommet.Box,
      {
        direction: "column",
        background: "light-3",
        gap: "medium",
        basis: "full",
        children: prices.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
