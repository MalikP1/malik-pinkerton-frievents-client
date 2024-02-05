import "./AddUsers.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function AddUsers({ num, name }) {
  const [users, setUsers] = useState(null);
  const [chosenUser, setChosenUser] = useState([]);
  const [submit, setSubmit] = useState(false);

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

  // setUsers([..users, newUserId])

  // const handleClick = (event) => {
  //   setChosenUser([...chosenUser, user.id]);
  // };
  if (!users) {
    return <p>Loading user details...</p>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const usersToSend = {
      user_id: chosenUser,
    };
    await axios.post(`${url}/groups/${num}`, usersToSend);
    e.target.reset();
    setSubmit(true);
  };
  return (
    <main className="add-users">
      <h1 className="add-users__title">Successfully created: {name}</h1>
      <h3 className="add-users__sub-header">Choose Users:</h3>
      <div className="add-users__cards">
        {users.map((user) => {
          return (
            <article
              className="add-users__card"
              onClick={() => {
                setChosenUser([...chosenUser, user.id]);
              }}
              key={user.id}
            >
              <p>
                {user.first_name} {user.last_name}
              </p>
            </article>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <button className="add-users__button">Submit chosen users</button>
      </form>
      {submit ? (
        <p>
          Added {chosenUser.length} users to {name}!
        </p>
      ) : null}
    </main>
  );
}

export default AddUsers;
