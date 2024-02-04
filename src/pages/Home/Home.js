import "./Home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import moment from "moment";
const url = process.env.REACT_APP_BASE_URL;

function Home() {
  const [userDetails, setUserDetails] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);

  const token = sessionStorage.getItem("token");
  const decoded = jwtDecode(token);
  console.log(decoded);

  useEffect(() => {
    // const fetchUserDetails = async () => {
    //   try {
    //     const response = await axios.get(`${url}/users/${decoded.id}`);
    //     setUserDetails(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // fetchUserDetails();
    // };
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`${url}/events`);
        setEventDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEventDetails();
  }, []);

  // if (!userDetails) {
  //   return <p>Loading user details...</p>;
  // }
  if (!eventDetails) {
    return <p>Loading event details...</p>;
  }

  console.log(userDetails);
  console.log(eventDetails);
  return (
    <main className="home">
      <h1 className="home__title">Current events organised</h1>
      {eventDetails.map((event) => {
        return (
          <section key={event.id} className="events">
            <article className="event-attendees">
              <p className="event-attendees__event">Event: {event.name}</p>
              <p className="event-attendees__group">Group: {event.group_id}</p>
            </article>
            <article className="event-specifics">
              <p className="event-specifics__date">
                Date of event: {moment(event.date).format("DD/MM/YYYY")}
              </p>
              <p className="event-specifics__location">
                Location of event: {event.location}
              </p>
              <p className="event-specifics__time">
                Time of event: {event.time}
              </p>
            </article>
          </section>
        );
      })}
    </main>
  );
}

export default Home;
