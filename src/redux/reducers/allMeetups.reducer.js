const initState = {
  allMeetups: [],
  favourites: [],
  favouritesCount: 0,
};

export const allMeetups = (state = initState, action) => {
  switch (action.type) {
    case "SET_MEETUPS":
      return { ...state, allMeetups: action.payload };
    case "ADD_FAVOURITES":
      return {
        ...state,
        favourites: state.favourites.push(action.payload),
        ...state,
        favouritesCount: state.favourites.length,
      };
    case "REMOVE_FAVOURITES":
      const newFavs = state.favourites.filter((fav) => {
        return fav !== action.payload;
      });
      return {
        ...state,
        favourites: newFavs,
        favouritesCount: newFavs.length,
      };
    default:
      return state;
  }
};
