import React, { ReactElement } from "react";
import * as styles from "./Preloader.scss";

function Preloader(): ReactElement {
  return <i className={styles.preloader}></i>;
}

export default Preloader;
