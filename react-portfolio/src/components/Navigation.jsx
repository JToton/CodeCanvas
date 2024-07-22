import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="space-x-4">
      <NavLink
        to="/"
        end
        className="hover:text-accent transition duration-300"
        activeClassName="font-bold"
      >
        About Me
      </NavLink>
      <NavLink
        to="/portfolio"
        className="hover:text-accent transition duration-300"
        activeClassName="font-bold"
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className="hover:text-accent transition duration-300"
        activeClassName="font-bold"
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        className="hover:text-accent transition duration-300"
        activeClassName="font-bold"
      >
        Resume
      </NavLink>
    </nav>
  );
}

export default Navigation;
