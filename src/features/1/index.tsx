import { EnumSchemeItemType } from "@undermuz/react-json-form"
import { IScheme } from "@undermuz/react-json-form/build/types/types"
import { IBlock } from "@undermuz/react-page-builder/build/types/types"

import DEF_VALUE from "./defaults"
import view from "./view"

export interface IFeature1Value {
    title: string
    subtitle: string
    description: string
}

export interface IFeature1 {
    id: number
    value: IFeature1Value
}

/*SCHEME BEGIN*/

const WidgetName = "Feature1"
const WidgetTitle = "Feature 2"

const scheme: IScheme = {
    id: WidgetName,
    scheme: [
        {
            name: "title",
            title: "Title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.title,
        },
        {
            name: "subtitle",
            title: "Sub-title",
            type: EnumSchemeItemType.Text,
            def_value: DEF_VALUE.subtitle,
        },
        {
            name: "description",
            title: "Description",
            type: EnumSchemeItemType.TextBlock,
            def_value: DEF_VALUE.description,
        },
    ],
    single: true,
    multiple: false,
    title: WidgetTitle,
    name: WidgetName,
}

const setting: IBlock = {
    id: WidgetName,
    title: WidgetTitle,
    description: `Feature 1`,
    image: `/pic/5aec67ad9e3e1ee17dc8717d1e23e8c5zXnwX.png`,
    value: DEF_VALUE,
    scheme,
    view,
}

export { scheme }

export default setting

/*SCHEME END*/
