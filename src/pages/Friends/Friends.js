import "./Friends.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Friends() {
  const [users, setUsers] = useState(null);

  const url = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get(`${url}/users`);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  if (!users) {
    return <p>Loading user details...</p>;
  }

  return (
    <main className="friends">
      <h1>Friends Page</h1>
      {users.map((user) => {
        return (
          <article key={user.id}>
            <p>User: {user.id}</p>
            <p>
              Name: {user.first_name} {user.last_name}
            </p>
            <p>Email: {user.email}</p>
          </article>
        );
      })}
    </main>
  );
}

export default Friends;
