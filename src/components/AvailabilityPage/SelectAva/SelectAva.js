import { useState } from "react";
import "./SelectAva.scss";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function SelectAva() {
  const url = process.env.REACT_APP_BASE_URL;
  const [userDate, setUserDate] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    setUserDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const decoded = jwtDecode(token);
    if (!userDate) {
      return;
    }
    const newDate = {
      date: userDate,
      user_id: decoded.id,
    };
    await axios.post(`${url}/dates`, newDate);
    e.target.reset();
    setSubmit(true);
  };
  return (
    <form className="select-ava" onSubmit={handleSubmit}>
      <label className="select-ava__label">
        Select dates you are free:{" "}
        <input
          className="select-ava__input"
          onChange={handleChange}
          type="date"
        />
      </label>
      <button className="select-ava__button">Save Date</button>
      {submit ? (
        <p className="select-ava__success">Date successfully saved!</p>
      ) : null}
    </form>
  );
}

export default SelectAva;
