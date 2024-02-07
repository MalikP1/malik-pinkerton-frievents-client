import "./NewGroup.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import AddUsers from "../AddUsers/AddUsers";
const url = process.env.REACT_APP_BASE_URL;

function NewGroup() {
  const navigate = useNavigate();

  const [groupName, setGroupName] = useState(null);
  const [groupNum, setGroupNum] = useState(null);

  const handleChange = (event) => {
    setGroupName(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const decoded = jwtDecode(token);

    if (!groupName) {
      return;
    }
    const newGroup = {
      name: groupName,
    };

    const response = await axios.post(
      `${url}/users/${decoded.id}/add`,
      newGroup
    );
    setGroupNum(response.data);

    e.target.reset();
  };

  return (
    <section className="new-group">
      <form onSubmit={handleSubmit} className="new-group__form">
        <article className="new-group-inputs">
          <label className="new-group-inputs__label">
            Name group:{" "}
            <input
              className="new-group-inputs__input"
              onChange={handleChange}
            />
          </label>
        </article>
        <article className="new-group-responses">
          <p className="new-group-responses__name">Group Name: {groupName}</p>
          <button className="new-group-responses__button">Create group</button>
        </article>
      </form>
      {groupNum ? <AddUsers num={groupNum} name={groupName} /> : null}
    </section>
  );
}

export default NewGroup;
