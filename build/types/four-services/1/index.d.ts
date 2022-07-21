import { MouseEventHandler } from "react";
import { IScheme } from "@undermuz/react-json-form/build/types/types";
import { IBlock } from "@undermuz/react-page-builder/build/types/types";
export interface IFourServicesValueService {
    description: string;
    text: string;
}
export interface IFourServicesValueServices {
    first_service: IFourServicesValueService;
    second_service: IFourServicesValueService;
    third_service: IFourServicesValueService;
    fourth_service: IFourServicesValueService;
}
export interface IFourServicesValue {
    main: {
        title: string;
    };
    services: IFourServicesValueServices;
}
export interface IFourServices {
    id: number;
    value: IFourServicesValue;
    onButtonClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
}
declare const scheme: IScheme;
declare const setting: IBlock;
export { scheme };
export default setting;
