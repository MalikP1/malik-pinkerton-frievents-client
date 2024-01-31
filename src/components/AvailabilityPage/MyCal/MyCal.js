import "./MyCal.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComp() {
  return (
    <section className="my-calendar">
      <h1 className="my-calendar__title">My Calendar</h1>
      <Calendar />
    </section>
  );
}

export default CalendarComp;
