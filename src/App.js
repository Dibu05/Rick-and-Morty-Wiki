import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import CardDetail from "./components/Cards/CardDetail";
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/:id' element={<CardDetail/>} />
      </Routes>
      </div>
    </Router>
  );
}




export default App;
