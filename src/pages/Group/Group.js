import "./Group.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import NewGroup from "../../components/NewGroup/NewGroup";
import EditGroup from "../../components/EditGroup/EditGroup";

function Group() {
  const [isNewGroup, setIsNewGroup] = useState(true);
  const changeToNewGr = () => {
    setIsNewGroup(true);
  };
  const changeToEditGr = () => {
    setIsNewGroup(false);
  };
  return (
    <main className="group">
      <article className="group-links">
        <button onClick={changeToNewGr}>Create new group</button>
        <button onClick={changeToEditGr}>Edit existing group</button>
      </article>
      {isNewGroup ? <NewGroup /> : <EditGroup />}
    </main>
  );
}

export default Group;
