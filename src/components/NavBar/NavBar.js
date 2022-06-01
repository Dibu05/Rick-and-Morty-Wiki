import React from "react";
import { Link } from "react-router-dom";
import  '../../App.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid justify-content-center">
        <Link to='/home' className="fs-3 ubuntu navbar-brand">
          <span className="text-primary">Wiki</span> Rick and Mortis!
        </Link>
        </div>
    </nav>
  );  
};

export default NavBar;
