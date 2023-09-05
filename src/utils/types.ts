import { Dispatch, SetStateAction } from "react";

export interface ApiObject {
  [key: string]: string | number | boolean | Date;
}

export interface DateOptions {
  [key: string]: string;
}

export interface AppState {
  loading: boolean;
  data: null | ApiObject[];
}

export interface DataLoad {
  isLoading: boolean;
  data: null | ApiObject[];
}

export interface BasicProps {
  data: ApiObject[] | null;
}

export interface HeaderProps {
  currentDay: string;
  items: number;
}

export interface MainProps extends BasicProps {
  currentDate: number;
  setCurrentDate: Dispatch<SetStateAction<number>>;
}

export interface ItemProps {
  data: ApiObject;
}
