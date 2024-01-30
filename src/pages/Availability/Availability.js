import { useState } from "react";
import "./Availability.scss";

function Availability() {
  const [isCalendar, setIsCalendar] = useState(false);
  const changeToCalendar = () => {
    setIsCalendar(true);
  };
  const changeToSelectAva = () => {
    setIsCalendar(false);
  };
  return (
    <main>
      <article>
        <button onClick={changeToSelectAva}>Select Availability</button>
        <button onClick={changeToCalendar}>Calender</button>
      </article>
      {/* {isCalendar ? <Calendar /> : <SelectAva />} */}
    </main>
  );
}

export default Availability;
