import React from "react";
import { useNavigate } from "react-router-dom";
import MeetUpForm from "../components/MeetUpForm/MeetUpForm";

function AddMeetups() {
  const navigate = useNavigate();

  const submitHandler = (formData) => {
    fetch("https://react-app-f7a02-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res));

    console.log(formData);
    navigate("/");
  };
  return (
    <div>
      <MeetUpForm submitHandler={submitHandler} />
    </div>
  );
}

export default AddMeetups;
