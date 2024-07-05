"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/themes/chakra/chakra-bw.tsx
var chakra_bw_exports = {};
__export(chakra_bw_exports, {
  ChakraBwThemeFonts: () => ChakraBwThemeFonts,
  chakraBwTheme: () => chakraBwTheme,
  tabsTheme: () => tabsTheme
});
module.exports = __toCommonJS(chakra_bw_exports);
var import_anatomy = require("@chakra-ui/anatomy");
var import_react = require("@chakra-ui/react");
var import_react2 = require("@emotion/react");
var import_jsx_runtime = require("react/jsx-runtime");
var { definePartsStyle, defineMultiStyleConfig } = (0, import_react.createMultiStyleConfigHelpers)(import_anatomy.tabsAnatomy.keys);
var baseStyle = definePartsStyle({
  tab: {},
  tabpanel: {}
});
var sizes = {
  xl: definePartsStyle({
    root: {
      gap: "2.25rem"
    },
    tab: {
      fontFamily: `"Montserrat", 'Open Sans', sans-serif`,
      fontWeight: "700",
      fontSize: "1.37rem",
      paddingTop: "1.5rem",
      paddingBottom: "1.25rem",
      px: "0"
    },
    tabpanel: {
      py: "0",
      px: "0"
    },
    tablist: {
      gap: "3.75rem"
    }
  })
};
var tabsTheme = defineMultiStyleConfig({ baseStyle, sizes });
var chakraBwTheme = (0, import_react.extendTheme)({
  fonts: {
    heading: `"Montserrat", 'Open Sans', sans-serif`,
    body: `"Rubik", 'Open Sans', sans-serif;`
  },
  colors: {
    "block.bg": "#F3F3F3",
    "block.bg.2": "#222222",
    "block.text.1": "#222222",
    "block.text.2": "#FFFFFF",
    "grid.text.1": "#222222",
    "grid.text.2": "#5252521A",
    "tabs.list.border": "#E1E1E1",
    "tabs.item.text": "#222222",
    "tabs.item.text.selected": "#222222",
    "tabs.list.border.2": "#545454",
    "tabs.item.text.2": "#FFFFFF",
    "tabs.item.text.2.selected": "#FFFFFF",
    "tabs.item.bg.2": "#313131"
  },
  fontSizes: {
    "block.title.1": "2.5rem",
    "block.title.2": "1.5rem",
    "block.title.3": "1.75rem",
    "block.title.4": "1.25rem",
    "block.title.5": "1rem",
    "block.desc.1": "1.25rem",
    "block.desc.2": "1.12rem",
    "block.desc.3": "1rem",
    "tabs.item": "1.25rem",
    "grid.text": "18px",
    "grid.text.2": "36px"
  },
  space: {
    "block.pad.1": 0,
    "block.pad.1.top": "2.75rem",
    "block.pad.1.top.2": "6.25rem",
    "block.pad.1.bot": "4rem",
    "block.pad.2": "48px",
    "block.pad.3": "40px",
    "block.pad.5": "1.75rem",
    "block.pad.6": "24px",
    "tabs.items": "3.75rem"
  },
  components: {
    Button: {
      variants: {
        "variant.2": {
          bg: "block.bg.2",
          color: "block.text.2"
        }
      }
    },
    Tabs: tabsTheme
  }
});
var ChakraBwThemeFonts = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  import_react2.Global,
  {
    styles: `
            @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
            @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
        `
  }
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChakraBwThemeFonts,
  chakraBwTheme,
  tabsTheme
});
