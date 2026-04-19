import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`p-4 text-center ${
        theme === "light" ? "bg-gray-200 text-black" : "bg-gray-900 text-white"
      }`}
    >
      Footer © 2026
    </footer>
  );
};

export default Footer;

{
  /* Question - 12 */
}
// import React, { useContext } from 'react'

// import { AuthContext } from '../context/AuthProvider';

// const Footer = () => {
//  const {isLoggedIn} = useContext(AuthContext);
//   return (
//     <div style={{width: "40px", backgroundColor: "lightgreen", textAlign: "center",  padding: "10px", minWidth: '100%', position: 'absolute', bottom: '0' }}>
//         <p>{isLoggedIn ? "Welcome, User" : "Please log in"}</p>
//     </div>
//   )
// }

// export default Footer;
