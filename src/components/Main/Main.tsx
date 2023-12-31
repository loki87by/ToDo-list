import React, { ReactElement, useState, useEffect } from "react";
import { MainProps, ApiObject } from "../../utils/types";
import Item from "../Item/Item";
import * as styles from "./Main.scss";

function Main(props: MainProps): ReactElement {
  const [scrollTop, setScrollTop] = useState(0);
  const [pageScrolled, setPageScrolled] = useState(false);

  useEffect(() => {
    const startDate =
      scrollTop < (props.data as ApiObject[]).length
        ? Date.parse((props.data as ApiObject[])[scrollTop].startDate as string)
        : (props.data as ApiObject[]).length;

    if (isNaN(props.currentDate) || props.currentDate !== startDate) {
      props.setCurrentDate(startDate);
    }
  });

  useEffect(() => {
    if (pageScrolled) {
      const timer = setTimeout(() => {
        setPageScrolled(false);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [pageScrolled]);

  return (
    <section
      className={`${styles.main} ${pageScrolled && styles.mainScrolled}`}
      onScroll={(e) => {
        setPageScrolled(true);
        setScrollTop(Math.floor((e.target as HTMLElement).scrollTop / 182));
      }}
    >
      {(props.data as ApiObject[]).map((i) => (
        <div key={i.id as string} className={styles.item}>
          <Item data={i} />
        </div>
      ))}
    </section>
  );
}

export default Main;
