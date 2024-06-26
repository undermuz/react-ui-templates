import { IScheme } from "@undermuz/react-json-form"
import { FunctionComponent } from "react"

export type BlockId = string
export type BlockValueItem = Record<string, any>
export type BlockValue = BlockValueItem | BlockValueItem[]
export type BlockScheme = IScheme

export interface IBlockResultValue {
    id: number
    blockId: BlockId
    value: BlockValue
}

export interface IBlock {
    id: BlockId
    title: string
    description: string
    image: string
    value: BlockValue
    scheme: BlockScheme
    view: FunctionComponent<{ id?: number; value?: any }>
}
