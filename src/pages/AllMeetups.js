import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MeetUpList from "../components/MeetUpList/MeetUpList";
import { setMeetups } from "../redux/actions/allMeetups.action";

function AllMeetups(props) {
  const [loading, setLoading] = useState(false);
  const URL = "https://react-app-f7a02-default-rtdb.firebaseio.com";

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetch(`${URL}/meetups.json`)
        .then((res) => res.json())
        .then((data) => {
          const meetups = [];
          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
          console.log(meetups);
          props.setMeetups(meetups);
          console.log(props.allMeetups);
          setLoading(false);
        });
    };
    fetchData();
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
