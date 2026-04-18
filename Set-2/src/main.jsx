import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeApp from "./ThemeApp.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>

    {/* Question-1  */}
    {/* <ThemeApp /> */}
  </StrictMode>,
);
