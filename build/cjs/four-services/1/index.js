"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme = void 0;
var tslib_1 = require("tslib");
var react_json_form_1 = require("@undermuz/react-json-form");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var view_1 = tslib_1.__importDefault(require("./view"));
/*SCHEME BEGIN*/
var WidgetName = "FourServices";
var WidgetTitle = "\u0411\u043B\u043E\u043A \"4 \u0441\u0435\u0440\u0432\u0438\u0441\u0430";
var scheme = {
    id: WidgetName,
    name: WidgetName,
    title: WidgetTitle,
    single: true,
    multiple: false,
    scheme: [
        {
            name: "main",
            title: "Основное",
            scheme: [
                {
                    name: "title",
                    title: "Заголовок",
                    type: react_json_form_1.EnumSchemeItemType.Text,
                    def_value: "",
                    rules: [[[Boolean], "Поле обязательное"]],
                },
            ],
        },
        {
            name: "services",
            title: "Сервисы",
            scheme: [
                {
                    name: "first_service",
                    title: "Первый сервис",
                    type: react_json_form_1.EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            name: "description",
                            title: "Подзаголовок",
                            type: react_json_form_1.EnumSchemeItemType.TextBlock,
                            def_value: "",
                            rules: [[[Boolean], "Поле обязательное"]],
                        },
                        {
                            name: "text",
                            title: "Содержание",
                            type: react_json_form_1.EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "second_service",
                    title: "Второй сервис",
                    type: react_json_form_1.EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: react_json_form_1.EnumSchemeItemType.TextBlock,
                            def_value: "",
                            rules: [[[Boolean], "Поле обязательное"]],
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: react_json_form_1.EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "third_service",
                    title: "Третий сервис",
                    type: react_json_form_1.EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: react_json_form_1.EnumSchemeItemType.TextBlock,
                            def_value: "",
                            rules: [[[Boolean], "Поле обязательное"]],
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: react_json_form_1.EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "fourth_service",
                    title: "Четвертый сервис",
                    type: react_json_form_1.EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: react_json_form_1.EnumSchemeItemType.TextBlock,
                            def_value: "",
                            rules: [[[Boolean], "Поле обязательное"]],
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: react_json_form_1.EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
            ],
        },
    ],
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
