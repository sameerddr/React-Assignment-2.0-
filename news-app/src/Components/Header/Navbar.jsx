import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Theme from "./Theme";
// import Theme from "./Theme";

function Navbar(props) {
  const [theme, setTheme] = useState("dark-theme");
  function toggletheme() {
    if (theme === "dark-mode") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  function myFunction() {
    console.log("Working");
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">News-Crap</Link>
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
          <input
            type="search"
            placeholder="Search News By Title"
            onChange={(e) => {
              props.getfun(e.target.value);
            }}
          />
        </li>
        <button onClick={() => toggletheme()}>Theme</button>
      </ul>
      <a href="#" className="top">
        Back to Top &#8593;
      </a>
      <button className="btn" onClick={myFunction}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default Navbar;
