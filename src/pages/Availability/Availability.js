import { useState } from "react";
import "./Availability.scss";
import SelectAva from "../../components/AvailabilityPage/SelectAva/SelectAva";
import ChooseCal from "../../components/AvailabilityPage/ChooseCal/ChooseCal";

function Availability() {
  const [isCalendar, setIsCalendar] = useState(false);
  const changeToCalendar = () => {
    setIsCalendar(true);
  };
  const changeToSelectAva = () => {
    setIsCalendar(false);
  };
  return (
    <main className="ava">
      <h1 className="ava__title">Availability Page</h1>
      <article className="ava__header">
        <button className="ava__button" onClick={changeToSelectAva}>
          Update Availability
        </button>
        <button className="ava__button" onClick={changeToCalendar}>
          View Availability
        </button>
      </article>
      {isCalendar ? <ChooseCal /> : <SelectAva />}
    </main>
  );
}

export default Availability;
