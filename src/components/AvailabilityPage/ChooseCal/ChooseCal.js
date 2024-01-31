import MyCal from "../MyCal/MyCal";
import ChooseGrp from "../ChooseGrp/ChooseGrp";
import "./ChooseCal.scss";
import { useState } from "react";

function ChooseCalen() {
  const [myCalen, setMyCalen] = useState(true);
  const changeToMyCal = () => {
    setMyCalen(true);
  };
  const changeToGrpCal = () => {
    setMyCalen(false);
  };
  return (
    <section>
      <article className="choose">
        <button onClick={changeToMyCal}>My Calendar</button>
        <button onClick={changeToGrpCal}>Choose a group calendar</button>
      </article>
      {myCalen ? <MyCal /> : <ChooseGrp />}
    </section>
  );
}

export default ChooseCalen;
