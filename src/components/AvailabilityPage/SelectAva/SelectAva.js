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
    <form onSubmit={handleSubmit}>
      <label>
        Select dates you are free: <input onChange={handleChange} type="date" />
      </label>
      <button>Save</button>
      {submit ? <p>Date successfully saved!</p> : null}
    </form>
  );
}

export default SelectAva;
