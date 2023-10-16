import React from "react";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="body">
        <div className="footerBody">
          <h1>Clean-Ballot</h1>
          <p>
            The innovative and secure digital platform designed to modernize the
            traditional voting process.
          </p>
        </div>
        <div className="contact">
          <h3>Keep in Touch !!</h3>
          <form action="get">
            <input
              type="email"
              name="candidatemail"
              placeholder="Enter Email Address"
            />
            <input className="submit" type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <h5 className="socialFormat">
            <span className="social">Linked In</span>
            <span className="social">Instagram</span>
            <span className="social">Facebook</span>
          </h5>
        </div>
        <div style={{ textAlign: "center" }}>
          <span className="final">DOCUMENTATION</span>
          <span className="final">MADE WITH LOVE</span>
        </div>
      </div>
    </>
  );
}
