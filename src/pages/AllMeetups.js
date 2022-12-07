import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MeetUpList from "../components/MeetUpList/MeetUpList";
import { fetchData } from "../helpers/helpers";
import { setMeetups } from "../redux/actions/allMeetups.action";

function AllMeetups(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(props, setLoading);
  }, []);

  return (
    <div>
      {loading && props.allMeetups.length === 0 && <p>Loading...</p>}
      <MeetUpList meetups={props.allMeetups} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setMeetups: (meetups) => dispatch(setMeetups(meetups)),
});
const mapStateToProps = ({ allMeetups }) => ({
  allMeetups,
});

export default connect(mapStateToProps, mapDispatchToProps)(AllMeetups);
