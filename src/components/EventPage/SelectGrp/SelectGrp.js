import Dates from "../Dates/Dates";
import "./SelectGrp.scss";
import { useState } from "react";

function SelectGrp() {
  const [group, setGroup] = useState(null);
  const selectGrp1 = () => {
    setGroup(1);
  };
  const selectGrp2 = () => {
    setGroup(2);
  };
  const selectGrp3 = () => {
    setGroup(3);
  };

  return (
    <section className="select-group">
      <h1 className="select-group__header">Select friend group:</h1>
      <article className="select-group__buttons">
        <button className="select-group__button" onClick={selectGrp1}>
          Group 1
        </button>
        <button className="select-group__button" onClick={selectGrp2}>
          Group 2
        </button>
        <button className="select-group__button" onClick={selectGrp3}>
          Group 3
        </button>
      </article>
      {group ? <Dates num={group} /> : null}
    </section>
  );
}

export default SelectGrp;
