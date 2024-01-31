import "./MyCal.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarComp() {
  return (
    <section className="calendar">
      <Calendar />
    </section>
  );
}

export default CalendarComp;
