import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { GoX } from "react-icons/go";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link
          to="/"
          className="logo"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <img src={Logo} alt="Logo"></img>
        </Link>
        <ul className={`nav__links ${isOpen ? "show__nav" : "hide__nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button
          className="nav__toggle-btn"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <GoX /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
