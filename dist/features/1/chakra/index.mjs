// src/features/1/chakra/index.tsx
import { EnumSchemeItemType } from "@undermuz/react-json-form";
import DEF_VALUE from "../defaults.mjs";
import view from "./view.mjs";
var WidgetName = "feature1-chakra";
var WidgetTitle = "ChakraUI: Feature 1";
var scheme = {
  id: WidgetName,
  scheme: [
    {
      name: "title",
      title: "Title",
      type: EnumSchemeItemType.Text,
      def_value: DEF_VALUE.title
    },
    {
      name: "subtitle",
      title: "Sub-title",
      type: EnumSchemeItemType.Text,
      def_value: DEF_VALUE.subtitle
    },
    {
      name: "description",
      title: "Description",
      type: EnumSchemeItemType.TextBlock,
      def_value: DEF_VALUE.description
    }
  ],
  multiple: false,
  title: WidgetTitle
};
var setting = {
  id: WidgetName,
  title: WidgetTitle,
  description: `Feature 1`,
  image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
  value: DEF_VALUE,
  scheme,
  view
};
var chakra_default = setting;
export {
  chakra_default as default,
  scheme
};
