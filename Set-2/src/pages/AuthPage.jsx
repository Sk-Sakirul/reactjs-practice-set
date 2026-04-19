{/* Question - 12 */}
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthProvider";

const AuthPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <main style={{textAlign: "center"}}>
        {isLoggedIn ? (
          <h2>You can browse the webpage</h2>
        ) : (
          <p style={{fontStyle: "italic"}}>You need to login first to access the content.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
