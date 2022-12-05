import React, { useContext } from "react";
import FavouriteContext from "../../store/FavouriteContextProvider";
// import FavouriteContext from "../../store/FavouriteContextProvider";
import Button from "../Button/Button";
import "./Card.css";

function Card({ meetup }) {
  const context = useContext(FavouriteContext);

  const isItemFavourite = context.isItemFavourite(meetup.id);

  const onClickFn = () => {
    console.log(isItemFavourite);
    if (!isItemFavourite) {
      console.log(meetup);
      context.addFavourites(meetup);
    } else {
      context.removeFavourites(meetup.id);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="card">
        <div className="img-wrapper">
          <img className="card-img-top" src={meetup.meetupImage} alt="Card" />
        </div>
        <div className="card-body">
          <h3 className="card-title">{meetup.meetupTitle}</h3>
          <p className="card-text">{meetup.meetupAddress}</p>
          <div onClick={onClickFn}>
            <Button
              btnText={
                isItemFavourite ? "Remove from Favourites" : "Add to Favourites"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
