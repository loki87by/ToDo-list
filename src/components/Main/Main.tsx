import React, { ReactElement, useState, useEffect } from "react";
import { MainProps, ApiObject } from "../../utils/types";
import Item from "../Item/Item";
import "./Main.css";

function Main(props: MainProps): ReactElement {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const startDate =
      scrollTop < (props.data as ApiObject[]).length
        ? Date.parse((props.data as ApiObject[])[scrollTop].startDate as string)
        : (props.data as ApiObject[]).length;

    if (isNaN(props.currentDate) || props.currentDate !== startDate) {
      props.setCurrentDate(startDate);
    }
  });

  return (
    <section
      className="Main"
      onScroll={(e) => {
        setScrollTop(Math.floor((e.target as HTMLElement).scrollTop / 182));
      }}
    >
      {(props.data as ApiObject[]).map((i) => (
        <div key={i.id as string} className="Main__item">
          <Item data={i} />
        </div>
      ))}
    </section>
  );
}

export default Main;
