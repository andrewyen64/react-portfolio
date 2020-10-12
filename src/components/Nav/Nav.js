import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-sm">
        <Link className="navbar-brand" to="/react-portfolio">
          <span class="brandName">Andrew Yen</span>
        </Link>
        <div>
          <ul className="navbar-nav ml-auto">
            <Link className="nav-link border-light active hover" 
              to="/react-portfolio">
              <li>About</li>
            </Link>
            <Link className="nav-link active hover" to="/react-portfolio/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link className="nav-link active hover" to="/react-portfolio/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;