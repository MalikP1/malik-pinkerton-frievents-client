import Calendar from "react-calendar";
import "./Dates.scss";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dates(props) {
  const url = process.env.REACT_APP_BASE_URL;

  const [eventName, setEventName] = useState(null);
  const [eventLocation, setEventLocation] = useState(null);
  const [eventTime, setEventTime] = useState(null);
  const [eventDate, setEventDate] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleName = (e) => {
    setEventName(e.target.value);
  };
  const handleLoc = (e) => {
    setEventLocation(e.target.value);
  };
  const handleTime = (e) => {
    setEventTime(e.target.value);
  };
  const handleDate = (e) => {
    setEventDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventName || !eventLocation || !eventTime || !eventDate) {
      return;
    }
    const newEvent = {
      name: eventName,
      location: eventLocation,
      time: eventTime,
      date: eventDate,
      group_id: props.num,
    };
    await axios.post(`${url}/events`, newEvent);
    e.target.reset();
    setSubmit(true);
  };
  return (
    <section className="dates">
      <h1 className="dates__header">
        Dates everyone is available for Group: {props.num}
      </h1>
      <Calendar />

      <form className="dates__form" onSubmit={handleSubmit}>
        <label>
          Choose Event: <input onChange={handleName} name="name" />
        </label>
        <label>
          Choose Location: <input onChange={handleLoc} name="location" />
        </label>
        <label>
          Choose date: <input onChange={handleDate} name="date" type="date" />
        </label>
        <label>
          Choose time: <input onChange={handleTime} name="time" type="time" />
        </label>
        <button>Create Event</button>
      </form>
      {submit ? (
        <>
          <p>
            {" "}
            Successfully created an Event called {eventName} at {eventLocation}{" "}
            on {eventDate}!{" "}
          </p>{" "}
          <Link className="dates__link" to="/home">
            Go to current events page to see all planned events
          </Link>
        </>
      ) : null}
    </section>
  );
}

export default Dates;
