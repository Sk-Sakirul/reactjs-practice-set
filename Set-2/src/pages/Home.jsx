import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      <h2>This is the home page of my webpage</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam
        adipisci quae.
      </p>
    </div>
  );
};

export default Home;
