import { useState } from "react";
import "./ChooseGrp.scss";
import GrpCal from "../GrpCal/GrpCal";

function ChooseGrp() {
  const [group, setGroup] = useState(null);
  const chooseGrp1 = () => {
    setGroup(1);
  };
  const chooseGrp2 = () => {
    setGroup(2);
  };
  const chooseGrp3 = () => {
    setGroup(3);
  };

  return (
    <section className="choose-group">
      <h1 className="choose-group__header">Select friend group:</h1>
      <article className="choose-group__buttons">
        <button className="choose-group__button" onClick={chooseGrp1}>
          Group 1
        </button>
        <button className="choose-group__button" onClick={chooseGrp2}>
          Group 2
        </button>
        <button className="choose-group__button" onClick={chooseGrp3}>
          Group 3
        </button>
      </article>
      {group ? <GrpCal num={group} /> : null}
    </section>
  );
}

export default ChooseGrp;
