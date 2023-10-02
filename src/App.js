import React from 'react';
import './App.css';

import 
  {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import Aboutpage from './AboutPage/AboutPage';
import Loginpage from './LoginPage/LoginPage';
import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';

function App() {
  return (
    <Router className="App">
      <Menu/>
      <Hero/>
      <div className="main Container">
        
        <Routes>
          <Route path="/About" element={<Aboutpage/>}/>
          <Route path="/Login" element={<Loginpage/>}/>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}


export default App;
