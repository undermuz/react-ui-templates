"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme = void 0;
var tslib_1 = require("tslib");
var react_json_form_1 = require("@undermuz/react-json-form");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var view_1 = tslib_1.__importDefault(require("./view"));
/*SCHEME BEGIN*/
var WidgetName = "Price2";
var WidgetTitle = "Прайсы 2";
var scheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: react_json_form_1.EnumSchemeItemType.Text,
            def_value: defaults_1.default.title,
        },
        {
            name: "subtitle",
            title: "Подзаголовок",
            type: react_json_form_1.EnumSchemeItemType.TextBlock,
            def_value: defaults_1.default.subtitle,
        },
        {
            name: "prices",
            title: "Цены",
            type: react_json_form_1.EnumSchemeItemType.Widget,
            multiple: true,
            def_value: defaults_1.default.prices,
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: react_json_form_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "price",
                    title: "Значение",
                    type: react_json_form_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "is_active",
                    title: "Активная?",
                    type: react_json_form_1.EnumSchemeItemType.Checkbox,
                    def_value: false,
                },
                {
                    name: "list",
                    title: "Пункты",
                    type: react_json_form_1.EnumSchemeItemType.Widget,
                    multiple: true,
                    def_value: [],
                    scheme: [
                        {
                            name: "title",
                            title: "Заголовок",
                            type: react_json_form_1.EnumSchemeItemType.Text,
                            def_value: "",
                        },
                    ],
                },
            ],
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
    description: "\u041F\u0440\u0430\u0439\u0441\u044B 2",
    image: "/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png",
    value: defaults_1.default,
    scheme: scheme,
    view: view_1.default,
};
exports.default = setting;
/*SCHEME END*/
