import React from 'react';
import "./App.css";
// import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LoginPage';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        {/* <Route path='/home' element={<Home />}/> */}
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;