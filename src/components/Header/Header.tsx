import React, { ReactElement } from "react";
import { BasicProps, ApiObject } from "../../utils/types";
import "./Header.css";

function Header(props: BasicProps): ReactElement {
  return (
    <>
      <h2>{(props.data as ApiObject[]).length}</h2>
    </>
  );
}

export default Header;
