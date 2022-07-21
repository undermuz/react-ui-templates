import { EnumSchemeItemType } from "@undermuz/react-json-form";
import DEF_VALUE from "./defaults";
import view from "./view";
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
                    type: EnumSchemeItemType.Text,
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
                    type: EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            name: "description",
                            title: "Подзаголовок",
                            type: EnumSchemeItemType.TextBlock,
                            def_value: "",
                            rules: [[[Boolean], "Поле обязательное"]],
                        },
                        {
                            name: "text",
                            title: "Содержание",
                            type: EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "second_service",
                    title: "Второй сервис",
                    type: EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: EnumSchemeItemType.TextBlock,
                            def_value: "",
                            rules: [[[Boolean], "Поле обязательное"]],
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "third_service",
                    title: "Третий сервис",
                    type: EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: EnumSchemeItemType.TextBlock,
                            def_value: "",
                            rules: [[[Boolean], "Поле обязательное"]],
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
                {
                    name: "fourth_service",
                    title: "Четвертый сервис",
                    type: EnumSchemeItemType.Widget,
                    def_value: {},
                    scheme: [
                        {
                            title: "Подзаголовок",
                            name: "description",
                            type: EnumSchemeItemType.TextBlock,
                            def_value: "",
                            rules: [[[Boolean], "Поле обязательное"]],
                        },
                        {
                            title: "Содержание",
                            name: "text",
                            type: EnumSchemeItemType.TextEditor,
                            def_value: "",
                        },
                    ],
                },
            ],
        },
    ],
};
var setting = {
    id: WidgetName,
    title: WidgetTitle,
    description: "\u0411\u043B\u043E\u0433/\u041D\u043E\u0432\u043E\u0441\u0442\u0438 1",
    image: "/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png",
    value: DEF_VALUE,
    scheme: scheme,
    view: view,
};
export { scheme };
export default setting;
/*SCHEME END*/
