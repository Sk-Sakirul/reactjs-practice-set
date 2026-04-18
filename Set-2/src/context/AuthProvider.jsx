import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn((prev) => !prev);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
