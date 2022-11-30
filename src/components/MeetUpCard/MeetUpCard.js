import React from "react";
import Button from "../Button/Button";
import "./Card.css";

function Card({ text, meetup }) {
  return (
    <div>
      <div className="card">
        <div className="img-wrapper">
          <img className="card-img-top" src={meetup.meetupImage} alt="Card" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{meetup.meetupTitle}</h3>
          <p className="card-text">{meetup.meetupAddress}</p>
          <Button text={text} />
        </div>
      </div>
    </div>
  );
}

export default Card;
