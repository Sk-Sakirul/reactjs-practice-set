import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserCard from "../components/UserCard";

const DisplayUserProfiles = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users?.filter((user) => user?.name.toLowerCase().includes(searchInput.toLowerCase()))

//   console.log(users);

  return (
    <div className="user-container">
      <h1 className="title">User Profiles</h1>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}

      <input
        className="search-input"
        type="text"
        placeholder="search by name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <div className="card-grid">
        {filteredUsers &&
          filteredUsers.map((user) => (
            // <div key={user.id}></div>
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              city={user.address.city}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayUserProfiles;
