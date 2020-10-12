import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm">
        <Link className="navbar-brand" to="/">
          <span class="brandName">Andrew Yen</span>
        </Link>
        <div>
          <ul className="navbar-nav ml-auto">
            <Link className="nav-link active hover" 
              to="/">
              <li>About</li>
            </Link>
            <Link className="nav-link active hover" to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link className="nav-link active hover" to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;