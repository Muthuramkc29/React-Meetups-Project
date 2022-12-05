import React, { useEffect, useState } from "react";
import MeetUpList from "../components/MeetUpList/MeetUpList";

function AllMeetups() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://react-app-f7a02-default-rtdb.firebaseio.com/meetups.json")
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
        setMeetups(meetups);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <MeetUpList meetups={meetups} />
    </div>
  );
}

export default AllMeetups;
