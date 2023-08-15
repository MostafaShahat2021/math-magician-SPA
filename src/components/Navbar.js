import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="calc-cont">
      <h1>Math Magicians</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="quote">Quote</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
