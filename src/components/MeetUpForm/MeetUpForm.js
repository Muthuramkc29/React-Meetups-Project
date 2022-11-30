import React, { useState } from "react";
import classes from "./MeetUpForm.module.css";

function MeetUpForm(props) {
  const [formData, setFormData] = useState({
    meetupTitle: "",
    meetupImage: "",
    meetupAddress: "",
    meetupDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(formData);
  };

  return (
    <div className={classes.formWrapper}>
      <h1>Add New Meetup</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            onChange={handleChange}
            type="text"
            required
            id="title"
            name="meetupTitle"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            onChange={handleChange}
            type="text"
            required
            id="image"
            name="meetupImage"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            onChange={handleChange}
            type="text"
            required
            id="address"
            name="meetupAddress"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={handleChange}
            id="description"
            required
            rows="5"
            name="meetupDescription"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </div>
  );
}

export default MeetUpForm;
