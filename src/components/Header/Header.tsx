import React, { ReactElement } from "react";
import { HeaderProps } from "../../utils/types";
import add from "../../assets/add.png";
import * as styles from "./Header.scss";

function Header(props: HeaderProps): ReactElement {
  return (
    <section className={styles.header}>
      <h3 className={styles.day}>{props.currentDay}</h3>
      <article className={styles.items}>
        <button className={styles.itemsButton} disabled>
          <img src={add} alt="add" className={styles.itemsImage} />
        </button>
        <h4 className={styles.itemsText}>{props.items.toString()}</h4>
      </article>
    </section>
  );
}

export default Header;
