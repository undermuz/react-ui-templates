"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme = void 0;
var tslib_1 = require("tslib");
var types_1 = require("containers/build/landing/widget-builder/types");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var view_1 = tslib_1.__importDefault(require("./view"));
/*SCHEME BEGIN*/
var WidgetName = "Blog1";
var WidgetTitle = "Блог/Новости 1";
var scheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Заголовок",
            type: types_1.EnumSchemeItemType.Text,
            def_value: defaults_1.default.title,
        },
        {
            name: "subtitle",
            title: "Подзаголовок",
            type: types_1.EnumSchemeItemType.TextBlock,
            def_value: defaults_1.default.subtitle,
        },
        {
            name: "list",
            title: "Новости",
            type: types_1.EnumSchemeItemType.Widget,
            multiple: true,
            def_value: defaults_1.default.list,
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: types_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "description",
                    title: "Описание",
                    type: types_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "date",
                    title: "Дата",
                    type: types_1.EnumSchemeItemType.Text,
                    def_value: "",
                },
                {
                    name: "is_active",
                    title: "Активная?",
                    type: types_1.EnumSchemeItemType.Checkbox,
                    def_value: false,
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
    description: "\u0411\u043B\u043E\u0433/\u041D\u043E\u0432\u043E\u0441\u0442\u0438 1",
    image: "/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png",
    value: defaults_1.default,
    scheme: scheme,
    view: view_1.default,
};
exports.default = setting;
/*SCHEME END*/
