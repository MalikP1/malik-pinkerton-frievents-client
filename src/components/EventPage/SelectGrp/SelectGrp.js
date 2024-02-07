import Dates from "../Dates/Dates";
import "./SelectGrp.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function SelectGrp() {
  const [groups, setGroups] = useState(null);
  const [groupId, setGroupId] = useState(null);

  const url = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get(`${url}/groups`);
        setGroups(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGroups();
  }, []);

  if (!groups) {
    return <p>Loading groups...</p>;
  }
  return (
    <section className="select-group">
      <h1 className="select-group__header">Select friend group:</h1>
      <div className="select-group__buttons">
        {groups.map((group) => {
          return (
            <article className="select-group__card" key={group.id}>
              <button
                className="select-group__button"
                onClick={() => {
                  setGroupId(group.id);
                }}
              >
                {group.name}
              </button>
            </article>
          );
        })}
      </div>
      {groupId ? <Dates num={groupId} /> : null}
    </section>
  );
}

export default SelectGrp;
