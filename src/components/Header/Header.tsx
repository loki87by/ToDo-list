import React, { ReactElement } from "react";
import { HeaderProps } from "../../utils/types";
import add from "../../assets/add.png";
import "./Header.css";

function Header(props: HeaderProps): ReactElement {
  return (
    <section className="Header">
      <h3 className="Header__day">{props.currentDay}</h3>
      <article className="Header__items">
        <button className="Header__items-button" disabled>
          <img src={add} alt="add" className="Header__items-image" />
        </button>
        <h4 className="Header__items-text">{props.items.toString()}</h4>
      </article>
    </section>
  );
}

export default Header;
