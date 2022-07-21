"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme = void 0;
var tslib_1 = require("tslib");
var react_json_form_1 = require("@undermuz/react-json-form");
var view_1 = tslib_1.__importDefault(require("./view"));
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var WidgetName = "GridText";
var WidgetTitle = "Текстовая сетка";
exports.scheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: react_json_form_1.EnumSchemeItemType.Text,
            def_value: "",
        },
        {
            name: "list",
            title: "Список",
            type: react_json_form_1.EnumSchemeItemType.Widget,
            def_value: "",
            multiple: true,
            scheme: [
                {
                    name: "image",
                    title: "Изображение",
                    type: react_json_form_1.EnumSchemeItemType.Files,
                    def_value: "",
                },
                {
                    name: "title",
                    title: "Заголовок",
                    type: react_json_form_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "subtitle",
                    title: "Подзаголовок",
                    type: react_json_form_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
            ],
        },
    ],
    single: true,
    multiple: false,
    title: WidgetTitle,
    name: WidgetName,
};
var setting = {
    id: WidgetName,
    title: WidgetTitle,
    description: "\u0414\u043B\u044F \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432",
    image: "/pic/7baf806ceff92c3c9f65c8c029cdd73eOabFY.png",
    scheme: exports.scheme,
    value: defaults_1.default,
    view: view_1.default,
};
exports.default = setting;
