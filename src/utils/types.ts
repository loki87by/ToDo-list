// import { Dispatch, SetStateAction } from "react";

export interface ApiObject {
  [key: string]: string | number | boolean;
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
  data: ApiObject[];
}

export interface MainProps {
  data: ApiObject[];
}
