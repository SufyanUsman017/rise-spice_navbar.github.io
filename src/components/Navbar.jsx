import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container py-2">
        <h3 className="chng">
          <span> Rice &</span> Spice
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menu */}
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          {/* SupportedContent */}
          <ul className="navbar-nav ms-auto nav-ul align-items-center ">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <Link className="nav-link " to="/follow">
                    Follow Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/education">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/experience">
                    Experience
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link " to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " nav-link to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/more">
                More
              </Link>
            </li>

            <div className="mx-3">
              <Link to="/signup">
                <button type="button" className="btn2 mx-2">
                  Sign Up
                </button>
              </Link>

              <Link to="/signin">
                <button type="button" className="btn2 mx-2">
                  Sign In
                </button>
              </Link>
            </div>

            <div className="form-check form-switch  ">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </ul>
          {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        </div>
        {/* End Menu */}
      </div>
    </nav>
  );
}
