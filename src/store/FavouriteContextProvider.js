import React, { createContext, useState } from "react";

const FavouriteContext = createContext({
  favourites: [],
  favouritesCount: 0,
  addFavourites: (meetup) => {},
  removeFavourites: (meetupId) => {},
  isItemFavourite: (meetupId) => {},
});

export function FavouriteContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavourites = (meetup) => {
    setUserFavourites((prevUserFavourites) =>
      prevUserFavourites.concat(meetup)
    );
  };

  const removeFavourites = (meetupId) => {
    setUserFavourites((prevUserFavourites) =>
      prevUserFavourites.filter((favourite) => favourite.id !== meetupId)
    );
  };

  const isItemFavourite = (meetupId) => {
    return userFavourites.some((favourite) => favourite.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    favouritesCount: userFavourites.length,
    addFavourites: addFavourites,
    removeFavourites: removeFavourites,
    isItemFavourite: isItemFavourite,
  };

  return (
    <FavouriteContext.Provider value={context}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContext;
