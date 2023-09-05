import React, { ReactElement } from "react";
import { ItemProps } from "../../utils/types";
import { dateHandler, capitalizer } from "../../utils/helpers";
import arrow from "../../assets/arrow.png";
import avatar from "../../assets/avatar.png";
import "./Item.css";

function Item(props: ItemProps): ReactElement {
  return (
    <section className="Item">
      <article className="Item__title">
        <input
          className="Item__title-checkbox"
          defaultChecked={props.data.completed as boolean}
          id={`Item__${props.data.id}-checkbox`}
          name={`Item__${props.data.id}-checkbox`}
          type="checkbox"
        />
        <label
          className="Item__title-text"
          htmlFor={`Item__${props.data.id}-checkbox`}
        >
          {capitalizer(props.data.title as string)}
        </label>
      </article>
      <article className="Item__description">
        <div className="Item__description-dates">
          <h3 className="Item__description-date">
            {dateHandler(props.data.endDate as Date)}
          </h3>
          <h3 className="Item__description-date">
            {dateHandler(props.data.startDate as Date)}
          </h3>
        </div>
        <div className="Item__description-text">
          {capitalizer(props.data.description as string)}
        </div>
      </article>
      <article className="Item__description-additionaly">
        <div className="Item__description-tags">
          <h5 className="Item__description-tag">Entity title</h5>
          <h5 className="Item__description-tag">Front-end</h5>
          <img src={arrow} alt="arrow" className="Item__description-arrow" />
        </div>
        <img src={avatar} alt="arrow" className="Item__description-avatar" />
      </article>
    </section>
  );
}

export default Item;
