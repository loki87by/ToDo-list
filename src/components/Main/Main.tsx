import React, { ReactElement } from "react";
import { BasicProps, ApiObject } from "../../utils/types";
import "./Main.css";

function Main(props: BasicProps): ReactElement {
  return (
    <>
      <h2>{(props.data as ApiObject[]).length}</h2>
    </>
  );
}

export default Main;
