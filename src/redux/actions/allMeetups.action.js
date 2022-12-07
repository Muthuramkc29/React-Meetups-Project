export const setMeetups = (meetups) => ({
  type: "SET_MEETUPS",
  payload: meetups,
});

export const addFavourites = (favId) => ({
  type: "ADD_FAVOURITES",
  payload: favId,
});

export const isItemFavourite = (meetupId) => ({
  type: "IS_ITEM_FAVOURITE",
  payload: meetupId,
});

export const removeFavourites = (meetupId) => ({
  type: "REMOVE_FAVOURITES",
  payload: meetupId,
});
