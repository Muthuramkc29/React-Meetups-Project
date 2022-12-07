const URL = process.env.REACT_APP_API_URL;

export const fetchData = (props, setLoading) => {
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
      props.setMeetups(meetups);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
};
