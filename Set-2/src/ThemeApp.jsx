import React, { useState } from 'react'
import ThemedBox from './components/ThemedBox';

const ThemeApp = () => {
    const [theme, setTheme] = useState(() =>  localStorage.getItem('theme')  || "");

    const toggleTheme = () => {
        if(theme === 'light'){
            setTheme("dark");
            localStorage.setItem('theme', 'dark')
        }else if(theme === 'dark'){
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }

  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      <button className="btn" onClick={() => toggleTheme()}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
      <div className="container">
        <ThemedBox />
        <ThemedBox />
        <ThemedBox />
        <ThemedBox />
        <ThemedBox />
        <ThemedBox />
        <ThemedBox />
      </div>
    </div>
  );
}

export default ThemeApp;