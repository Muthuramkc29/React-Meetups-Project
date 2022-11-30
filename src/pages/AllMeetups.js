import React, { useEffect, useState } from "react";
import Card from "../components/MeetUpCard/MeetUpCard";

function AllMeetups() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
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
      });
  }, []);

  return (
    <div>
      {meetups.length === 0 && <p>Loading...</p>}
      {meetups.map((meetup, idx) => (
        <Card key={idx.toString()} text="Add to Favourites" meetup={meetup} />
      ))}
    </div>
  );
}

export default AllMeetups;
