import React from "react";
import { useNavigate } from "react-router-dom";
import MeetUpForm from "../components/MeetUpForm/MeetUpForm";

function AddMeetups() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;

  const submitHandler = async (formData) => {
    await fetch(`${URL}/meetups.json`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/");
  };
  return (
    <div>
      <MeetUpForm submitHandler={submitHandler} />
    </div>
  );
}

export default AddMeetups;
