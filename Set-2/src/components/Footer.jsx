import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const Footer = () => {
 const {isLoggedIn} = useContext(AuthContext);
  return (
    <div style={{width: "40px", backgroundColor: "lightgreen", textAlign: "center",  padding: "10px", minWidth: '100%', position: 'absolute', bottom: '0' }}>
        <p>{isLoggedIn ? "Welcome, User" : "Please log in"}</p>
    </div>
  )
}

export default Footer;