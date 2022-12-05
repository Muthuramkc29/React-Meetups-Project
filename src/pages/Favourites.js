import React, { useContext } from "react";
import MeetUpList from "../components/MeetUpList/MeetUpList";
import FavouriteContext from "../store/FavouriteContextProvider";

function Favourites() {
  const context = useContext(FavouriteContext);

  return (
    <div>
      {context.favouritesCount === 0 && <p>No favourites added so far...</p>}
      <MeetUpList meetups={context.favourites} />
    </div>
  );
}

export default Favourites;
