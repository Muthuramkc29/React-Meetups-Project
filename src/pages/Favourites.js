import React, { useContext } from "react";
import { connect } from "react-redux";
import MeetUpList from "../components/MeetUpList/MeetUpList";
import FavouriteContext from "../context/FavouriteContextProvider";

function Favourites(props) {
  console.log(props.favourites);
  return (
    <div>
      {props.favouritesCount === 0 && <p>No favourites added so far...</p>}
      <MeetUpList meetups={props.favourites} />
    </div>
  );
}

const mapStateToProps = ({ favourites }) => ({
  favourites,
});

export default connect(mapStateToProps, null)(Favourites);
