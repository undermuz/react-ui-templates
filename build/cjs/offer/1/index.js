"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// SYSTEM
var react_json_form_1 = require("@undermuz/react-json-form");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var view_1 = tslib_1.__importDefault(require("./view"));
/*SCHEME BEGIN*/
var WidgetName = "Offer";
var WidgetTitle = "Оффер";
var scheme = {
    id: WidgetName,
    name: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: react_json_form_1.EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "subtitle",
            title: "Подзаголовок",
            type: react_json_form_1.EnumSchemeItemType.TextBlock,
            def_value: "",
        },
        {
            name: "button_text",
            title: "Текст кнопки",
            type: react_json_form_1.EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "show_button",
            title: "Показывать кнопку?",
            type: react_json_form_1.EnumSchemeItemType.Checkbox,
            def_value: true,
        },
        {
            name: "show_adv",
            title: "Показывать преимущества",
            type: react_json_form_1.EnumSchemeItemType.Checkbox,
            def_value: true,
        },
        {
            name: "image",
            title: "Изображение",
            type: react_json_form_1.EnumSchemeItemType.Files,
            def_value: "",
        },
        {
            name: "advantage",
            title: "Преимущества",
            type: react_json_form_1.EnumSchemeItemType.Widget,
            multiple: true,
            def_value: "",
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: react_json_form_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "image",
                    title: "Изображение",
                    type: react_json_form_1.EnumSchemeItemType.Files,
                    def_value: "",
                },
            ],
        },
    ],
    single: true,
    multiple: false,
    title: WidgetTitle,
};
var Offer = {
    id: WidgetName,
    title: WidgetTitle,
    description: "\u041E\u0444\u0444\u0435\u0440 \u0441 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u043C\u0438",
    image: "/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png",
    value: defaults_1.default,
    scheme: scheme,
    view: view_1.default,
};
exports.default = Offer;
