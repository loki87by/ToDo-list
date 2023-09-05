import React, { ReactElement, useState, useEffect } from "react";
import { BasicProps, ApiObject } from "../../utils/types";
import Header from "../Header/Header";
import Main from "../Main/Main";
import * as styles from "./Content.css";

function Content(props: BasicProps): ReactElement {
  const [currentDate, setCurrentDate] = useState(NaN);
  const [currentDateItems, setCurrentDateItems] = useState(NaN);
  const [currentDateStringify, setCurrentDateStringify] = useState("");

  useEffect(() => {
    const date = new Date();
    const string = date.toLocaleString().split(",")[0];
    const dateParts = string.split(".");
    const today = new Date(
      `${+dateParts[2]}, ${+dateParts[1]}, ${+dateParts[0]}`
    );
    const day = 24 * 60 * 60 * 1000;
    const todayParse = Date.parse(today as unknown as string);
    const days = (currentDate - todayParse) / day;

    if (days === 0) {
      setCurrentDateStringify("Today");
    } else if (days === 1) {
      setCurrentDateStringify("Tommorow");
    } else if (days === 2) {
      setCurrentDateStringify("Day after tomorrow");
    } else {
      setCurrentDateStringify("Near future");
    }
  }, [currentDate]);

  useEffect(() => {
    const todayData = props.data?.filter(
      (i) => Date.parse(i.startDate as unknown as string) === currentDate
    );
    setCurrentDateItems((todayData as ApiObject[]).length);
  }, [props.data, currentDate]);

  return (
    <section className={ styles.content }>
      <Header currentDay={currentDateStringify} items={currentDateItems} />
      <Main
        data={props.data}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
    </section>
  );
}

export default Content;
