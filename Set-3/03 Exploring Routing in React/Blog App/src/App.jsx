import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
// import Home from './pages/Home';
// import About from './pages/About';
// import Navbar from './components/Navbar';
// import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <>
      {/* Question-1 */}
      {/* <Navbar /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/post/:id' element={<PostDetails />}/>
        <Route path='/about' element={<About />} />
      </Routes> */}

      {/* Question-2 */}
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/weather/:city' element={<WeatherPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;