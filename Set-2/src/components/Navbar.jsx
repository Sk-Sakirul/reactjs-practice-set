import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {
    const { isLoggedIn, toggleLoginStatus } = useContext(AuthContext);
  return (
    <div style={{ display: "flex", justifyContent: "space-around", height: '40px', backgroundColor: "lightgreen", padding: "6px" }}>
      <button onClick={toggleLoginStatus} style={{padding: "3px 12px", backgroundColor: "blue", border: 'none', color: 'white', cursor: 'pointer', borderRadius: "3px"}}>{isLoggedIn ? "Logout" : 'Login'}</button>
      <ul
        style={{ display: "flex", gap: "15px" }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;