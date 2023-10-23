import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div style={{ backgroundColor: "#006778", padding: "2px" }}>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/">
            Clean-Ballot
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/midoff/cast-vote">
                  Vote
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Admin
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/midoff/view-result">
                  View Result
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
