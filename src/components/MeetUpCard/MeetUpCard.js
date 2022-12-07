import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  addFavourites,
  removeFavourites,
} from "../../redux/actions/allMeetups.action";
import Button from "../Button/Button";
import "./Card.css";

function Card({ meetup, addFavourites, favourites, removeFavourites }) {
  const [isFavourite, setIsFavourite] = useState(false);

  function isFavouriteFn(id) {
    return favourites.some((fav) => fav === id);
  }

  useEffect(() => {
    setIsFavourite(isFavouriteFn(meetup.id));
  }, []);

  const onClickFn = () => {
    if (!isFavourite) {
      setIsFavourite((prev) => !prev);
      addFavourites(meetup.id);
    } else {
      removeFavourites(meetup.id);
      setIsFavourite((prev) => !prev);
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
                isFavourite ? "Remove from Favourites" : "Add to Favourites"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addFavourites: (meetupId) => dispatch(addFavourites(meetupId)),
  removeFavourites: (meetupId) => dispatch(removeFavourites(meetupId)),
});

const mapStateToProps = ({ isFavourite, favourites }) => ({
  isFavourite,
  favourites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
