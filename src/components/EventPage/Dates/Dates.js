import Calendar from "react-calendar";
import "./Dates.scss";

function Dates(props) {
  return (
    <section className="dates">
      <h1 className="dates__header">
        Dates everyone is available for Group: {props.num}
      </h1>
      <form>
        <Calendar />

        <label>
          Choose Event
          <input />
        </label>
        <label>
          Choose time
          <input />
        </label>
        <button>Create Event</button>
      </form>
    </section>
  );
}

export default Dates;
