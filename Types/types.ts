import { MouseEventHandler } from "react";

export interface customButtonProps {
    isDisabled?:boolean;
    btnType?:"button" | "submit";
    containerStyles?:string;
    textStyles?:string;
    title:string;
    rightIcon?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

}