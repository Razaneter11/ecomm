import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <FontAwesomeIcon icon={faStore} className="icon" />
          <NavLink className="navbar-brand" href="#">E-commarce</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Categore">Categore</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">Products</NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <button className="btn btn-outline-dark">
                <NavLink className="text-info" to="/Login">Login</NavLink>
              </button>
              <button className="btn btn-outline-dark">
                <NavLink className="text-info" to="/Signin">Signup</NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
