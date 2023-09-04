import React, { ReactElement } from "react";
import { BasicProps } from "../../utils/types";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Content.css";

function Content(props: BasicProps): ReactElement {
  return (
    <section className="Content">
      <Header data={props.data} />
      <Main data={props.data} />
    </section>
  );
}

export default Content;
