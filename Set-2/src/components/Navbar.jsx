// src/components/Navbar.jsx
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { ThemeContext } from "@/context/ThemeProvider";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center p-4 border-b bg-white dark:bg-gray-900">
      <h1 className="font-bold text-lg">Dashboard</h1>

      <div className="flex gap-2">
        <span>{isLoggedIn ? "Logged In" : "Logged Out"}</span>

        <Button onClick={toggleAuth}>{isLoggedIn ? "Logout" : "Login"}</Button>

        <Button onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;


{
  /* Question - 12 */
}
// import React, { useContext } from 'react'
// import { AuthContext } from '../context/AuthProvider';

// const Navbar = () => {
//     const { isLoggedIn, toggleLoginStatus } = useContext(AuthContext);
//   return (
//     <div style={{ display: "flex", justifyContent: "space-around", height: '40px', backgroundColor: "lightgreen", padding: "6px" }}>
//       <button onClick={toggleLoginStatus} style={{padding: "3px 12px", backgroundColor: "blue", border: 'none', color: 'white', cursor: 'pointer', borderRadius: "3px"}}>{isLoggedIn ? "Logout" : 'Login'}</button>
//       <ul
//         style={{ display: "flex", gap: "15px" }}
//       >
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;
