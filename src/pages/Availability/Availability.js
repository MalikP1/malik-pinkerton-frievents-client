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
      <article className="ava__header">
        <button onClick={changeToSelectAva}>Select Availability</button>
        <button onClick={changeToCalendar}>Calender</button>
      </article>
      {isCalendar ? <ChooseCal /> : <SelectAva />}
    </main>
  );
}

export default Availability;
