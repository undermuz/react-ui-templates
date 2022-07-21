import { IScheme } from "@undermuz/react-json-form/build/types/types";
import { MouseEventHandler } from "react";
import { IBlock } from "../../types";
export interface IPrice1ValuePricesItem {
    id: number;
    title: string;
}
export interface IPrice1ValuePrices {
    id: number;
    title: string;
    price: number;
    is_active: boolean;
    list: IPrice1ValuePricesItem[];
}
export interface IPrice1Value {
    title: string;
    subtitle: string;
    button_text: string;
    prices: IPrice1ValuePrices[];
}
export interface IPrice1 {
    id: number;
    value: IPrice1Value;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}
declare const scheme: IScheme;
declare const setting: IBlock;
export { scheme };
export default setting;
