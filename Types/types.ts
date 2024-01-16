import { MouseEventHandler } from "react";

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

export interface customButtonProps {
    isDisabled?:boolean;
    btnType?:"button" | "submit";
    containerStyles?:string;
    textStyles?:string;
    title:string;
    rightIcon?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

}
export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }
export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }
export interface filterprops {
  manufacturer:string,
  year:number,
  limit:number,
  model:string,
}
export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber : number;
  isNext : boolean;
}