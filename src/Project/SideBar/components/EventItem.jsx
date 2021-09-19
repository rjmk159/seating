import React from "react";
import { CIcon } from "@coreui/icons-react";
import { Image } from "../Images/Basic";
import './styles/EventItem.scss';

const EventItem = () => {
  return (
    <div className="event-item__container">
      <div className="event-item__favorite-edit">
        <div className="event-item__favorite">
          <CIcon name={"cilStar"} size="sm" />
          <CIcon name={"cilPencil"} size="sm" />
          

        </div>
        <div className="event-item__edit"></div>
      </div>
      <div className="event-item__image">
        <Image />
      </div>
      <div className="event-item__desc">
        <p>Round Table</p>
        <p>63" round</p>
        <p>10 seats</p>
      </div>
      <div className="event-item__count-drag">
        <div className="event-item__count">3</div>
        <div className="event-item__drag"></div>
      </div>
    </div>
  );
};

export default EventItem;
