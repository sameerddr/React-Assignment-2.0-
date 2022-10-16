import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJWcWFi-jLkp4UeeMH-x6WztwGV51iJMLuw&usqp=CAU"
              alt="error"
              className="imgnav"
            />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <input type="search" placeholder="Search News" />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
