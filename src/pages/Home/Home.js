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

  return (
    <main className="home">
      <h1 className="home__title">Home Page</h1>
      <h2 className="home__sub-title">Current events organised</h2>
      {eventDetails.map((event) => {
        return (
          <section key={event.id} className="events">
            <article className="event-attendees">
              <p className="event-attendees__inputs">Event: {event.name}</p>
              <p className="event-attendees__inputs">Group: {event.group_id}</p>
            </article>
            <article className="event-specifics">
              <p className="event-specifics__inputs">
                Date of event: {moment(event.date).format("DD/MM/YYYY")}
              </p>
              <p className="event-specifics__inputs">
                Location of event: {event.location}
              </p>
              <p className="event-specifics__inputs">
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
