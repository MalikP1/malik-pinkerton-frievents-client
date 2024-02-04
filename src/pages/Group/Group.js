import "./Group.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NewGroup from "../../components/CreateGroupPage/NewGroup/NewGroup";
import EditGroup from "../../components/CreateGroupPage/EditGroup/EditGroup";
import { jwtDecode } from "jwt-decode";
const url = process.env.REACT_APP_BASE_URL;

function Group() {
  const [isNewGroup, setIsNewGroup] = useState(true);
  const changeToNewGr = () => {
    setIsNewGroup(true);
  };
  const changeToEditGr = () => {
    setIsNewGroup(false);
  };

  const token = sessionStorage.getItem("token");
  const decoded = jwtDecode(token);
  console.log(decoded);

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
