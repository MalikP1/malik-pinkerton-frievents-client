import "./Group.scss";
import { useState } from "react";
import NewGroup from "../../components/CreateGroupPage/NewGroup/NewGroup";
import EditGroup from "../../components/CreateGroupPage/EditGroup/EditGroup";

function Group() {
  const [isNewGroup, setIsNewGroup] = useState(true);
  const changeToNewGr = () => {
    setIsNewGroup(true);
  };
  // const changeToEditGr = () => {
  //   setIsNewGroup(false);
  // };

  return (
    <main className="group">
      <h1 className="group__title">Group Page</h1>
      <article className="group-links">
        <button className="group-links__button" onClick={changeToNewGr}>
          Create new group
        </button>
        {/* <button className="group-links__button" onClick={changeToEditGr}>Edit existing group</button> */}
      </article>
      {isNewGroup ? <NewGroup /> : <EditGroup />}
    </main>
  );
}

export default Group;
