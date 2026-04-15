import React from "react";

const UserCard = ({ name, email, city }) => {
  return (
    <div className="user-card">
      <h3 className="user-name">{name}</h3>
      <p className="user-email">📧 {email}</p>
      <p className="user-city">📍 {city}</p>
    </div>
  );
};

export default UserCard;
