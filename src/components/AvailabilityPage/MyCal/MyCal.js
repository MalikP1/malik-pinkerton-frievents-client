import { useState, useEffect } from "react";
import axios from "axios";
import "./MyCal.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

function CalendarComp() {
  const [userDates, setUserDates] = useState(null);
  const token = sessionStorage.getItem("token");
  const decoded = jwtDecode(token);
  const url = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchUserDates = async () => {
      try {
        const response = await axios.get(`${url}/users/${decoded.id}`);
        setUserDates(response.data.dates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserDates();
  }, []);

  if (!userDates) {
    return <p>Loading users available dates...</p>;
  }
  return (
    <section className="my-calendar">
      <h1 className="my-calendar__title">My Calendar</h1>
      <Calendar />
      <h1 className="my-calendar__sub-title">My availability</h1>
      <div className="my-calendar__dates">
        {userDates.map((date) => {
          return (
            <article key={date.id}>
              <p>{moment(date.date).format("DD/MM/YYYY")}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default CalendarComp;
