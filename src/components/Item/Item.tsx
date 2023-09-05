import React, { ReactElement } from "react";
import { ItemProps } from "../../utils/types";
import { dateHandler, capitalizer } from "../../utils/helpers";
import arrow from "../../assets/arrow.png";
import avatar from "../../assets/avatar.png";
import * as styles from "./Item.css";

function Item(props: ItemProps): ReactElement {
  return (
    <section className={styles.item}>
      <article className={styles.title}>
        <input
          className={styles.titleCheckbox}
          defaultChecked={props.data.completed as boolean}
          id={`Item__${props.data.id}-checkbox`}
          name={`Item__${props.data.id}-checkbox`}
          type="checkbox"
        />
        <label
          className={styles.titleText}
          htmlFor={`Item__${props.data.id}-checkbox`}
        >
          {capitalizer(props.data.title as string)}
        </label>
      </article>
      <article className={styles.description}>
        <div className={styles.descriptionDates}>
          <h3 className={styles.descriptionDate}>
            {dateHandler(props.data.endDate as Date)}
          </h3>
          <h3 className={styles.descriptionDate}>
            {dateHandler(props.data.startDate as Date)}
          </h3>
        </div>
        <div className={styles.descriptionText}>
          {capitalizer(props.data.description as string)}
        </div>
      </article>
      <article className={styles.descriptionAdditionaly}>
        <div className={styles.descriptionTags}>
          <h5 className={styles.descriptionTag}>Entity title</h5>
          <h5 className={styles.descriptionTag}>Front-end</h5>
          <img src={arrow} alt="arrow" className={styles.descriptionArrow} />
        </div>
        <img src={avatar} alt="arrow" className={styles.descriptionAvatar} />
      </article>
    </section>
  );
}

export default Item;
