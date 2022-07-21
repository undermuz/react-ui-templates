"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme = void 0;
var tslib_1 = require("tslib");
var react_json_form_1 = require("@undermuz/react-json-form");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var view_1 = tslib_1.__importDefault(require("./view"));
/*SCHEME BEGIN*/
var WidgetName = "Feature1";
var WidgetTitle = "Feature 2";
var scheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Title",
            type: react_json_form_1.EnumSchemeItemType.Text,
            def_value: defaults_1.default.title,
        },
        {
            name: "subtitle",
            title: "Sub-title",
            type: react_json_form_1.EnumSchemeItemType.Text,
            def_value: defaults_1.default.subtitle,
        },
        {
            name: "description",
            title: "Description",
            type: react_json_form_1.EnumSchemeItemType.TextBlock,
            def_value: defaults_1.default.description,
        },
    ],
    single: true,
    multiple: false,
    title: WidgetTitle,
    name: WidgetName,
};
exports.scheme = scheme;
var setting = {
    id: WidgetName,
    title: WidgetTitle,
    description: "Feature 1",
    image: "/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png",
    value: defaults_1.default,
    scheme: scheme,
    view: view_1.default,
};
exports.default = setting;
/*SCHEME END*/
