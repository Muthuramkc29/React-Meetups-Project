import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MeetUpList from "../components/MeetUpList/MeetUpList";
import { fetchData } from "../helpers/helpers";
import { setMeetups } from "../redux/actions/allMeetups.action";

function Favourites(props) {
  const [loading, setLoading] = useState(false);
  const favouritesId = props.favourites;

  useEffect(() => {
    fetchData(props, setLoading);
  }, []);

  const favs = props.allMeetups.reduce((acc, curr) => {
    if (favouritesId.includes(curr.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  return (
    <div>
      {loading && favs.length === 0 && <p>Loading...</p>}
      {favs.length === 0 && !loading && <p>No favourites added so far...</p>}
      <MeetUpList meetups={favs} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setMeetups: (meetups) => dispatch(setMeetups(meetups)),
});

const mapStateToProps = ({ allMeetups, favourites }) => ({
  allMeetups,
  favourites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
