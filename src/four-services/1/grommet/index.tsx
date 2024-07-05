import { MouseEventHandler } from "react"

import { EnumSchemeItemType } from "@undermuz/react-json-form"
import { IScheme } from "@undermuz/react-json-form"
import { IBlock } from "../../../types"

import DEF_VALUE from "./defaults"
import view from "./view"

export interface IFourServicesValueService {
    description: string
    text: string
}

export interface IFourServicesValueServices {
    first_service: IFourServicesValueService
    second_service: IFourServicesValueService
    third_service: IFourServicesValueService
    fourth_service: IFourServicesValueService
}

export interface IFourServicesValue {
    main: {
        title: string
    }
    services: IFourServicesValueServices
}

export interface IFourServices {
    id: number
    value: IFourServicesValue
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> &
        MouseEventHandler<HTMLButtonElement>
}

/*SCHEME BEGIN*/

const WidgetName = "FourServices"
const WidgetTitle = `Блок "4 сервиса`

const scheme: IScheme = {
    id: WidgetName,
    title: WidgetTitle,
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
}

const setting: IBlock = {
    id: WidgetName,
    title: WidgetTitle,
    description: `Блог/Новости 1`,
    image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
    value: DEF_VALUE,
    scheme,
    view,
}

export { scheme }

export default setting

/*SCHEME END*/
