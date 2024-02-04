import "./Profile.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const url = process.env.REACT_APP_BASE_URL;

function Profile() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const token = sessionStorage.getItem("token");

      if (!token) {
        return setFailedAuth(true);
      }

      try {
        // Get the data from the API
        const { data } = await axios.get(`${url}/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.log(error);
        setFailedAuth(true);
      }
    };
    loadData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setUser(null);
    setFailedAuth(true);
  };

  if (failedAuth) {
    return (
      <main className="Profile">
        <p>You must be logged in to see this page.</p>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="Profile">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="Profile">
      <h1 className="Profile__title">
        Welcome {user.first_name} to FriEvents!
      </h1>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "This is an application designed to organise events with your friends!",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "To get started you'll need to select your availability, and create a group of other users!",
          1000,
          "Once you've done that you can plan an event but make sure everyone is free!",
          1000,
          "Check other users availability on the events page or on the group calender on the availability page!",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={1}
      />
      {/* <p>
        Welcome back, {user.first_name} {user.last_name}
      </p> */}
      <h2>My Profile</h2>
      <p>Email: {user.email}</p>
      <p>
        {" "}
        Name: {user.first_name} {user.last_name}
      </p>
      <button className="Profile__logout" onClick={handleLogout}>
        Log out
      </button>
    </main>
  );
}

export default Profile;