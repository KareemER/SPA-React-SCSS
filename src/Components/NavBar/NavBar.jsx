import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.component.scss'

export default function NavBar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top py-4">
        <div className="container">
          <NavLink className="navbar-brand text-white text-uppercase fw-bolder fs-2" to={'/'}>
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse show" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bolder"
                  aria-current="page"
                  to={'about'}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bolder"
                  aria-current="page"
                  to={'Portfolio'}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bolder"
                  aria-current="page"
                  to={'contact'}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
