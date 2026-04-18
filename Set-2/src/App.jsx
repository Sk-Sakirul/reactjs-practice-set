import React, { useContext } from 'react'
import DailyQuoteGenerator from './components/DailyQuoteGenerator'
import DisplayUserProfiles from './pages/DisplayUserProfiles'
import './App.css';
import ReactStopwatch from './pages/ReactStopwatch';
import Home from './pages/Home';
import { ThemeContext } from './context/ThemeProvider';
import AuthPage from './pages/AuthPage';

const App = () => {
  // const {theme, toggleTheme} = useContext(ThemeContext);
  // console.log(theme);
  
  return (
    <>
      {/* Question-2 */}
      {/* <DailyQuoteGenerator /> */}

      {/* Question-3 */}
      {/* <DisplayUserProfiles /> */}

      {/* Question-4 */}
      {/* <ReactStopwatch /> */}

      {/* ** Context API in React ** */}
      {/* Question - 11 */}
      {/* <div>
          <button onClick={toggleTheme}> Switch to {theme === 'light' ? 'Dark' : 'Light'} </button>
          <Home />
        </div> */}

      {/* Question - 12 */}
        <AuthPage />
    </>
  );
}

export default App