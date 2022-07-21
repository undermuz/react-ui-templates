import { IScheme } from "@undermuz/react-json-form/build/types/types";
import { IBlock } from "@undermuz/react-page-builder/build/types/types";
export interface IFeature1Value {
    title: string;
    subtitle: string;
    description: string;
}
export interface IFeature1 {
    id: number;
    value: IFeature1Value;
}
declare const scheme: IScheme;
declare const setting: IBlock;
export { scheme };
export default setting;
