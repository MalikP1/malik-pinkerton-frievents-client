import Calendar from "react-calendar";
import "./GrpCal.scss";

function GrpCal(props) {
  return (
    <section className="group-calendar">
      <h1 className="group-calendar__title">Group {props.num} Calendar</h1>
      <Calendar />
    </section>
  );
}
export default GrpCal;
