import React from "react";
import Card from "../MeetUpCard/MeetUpCard";

function MeetUpList({ meetups }) {
  return (
    <div>
      {meetups.map((meetup) => (
        <Card key={meetup.id} meetup={meetup} />
      ))}
    </div>
  );
}

export default MeetUpList;
