import React from "react";
import "../Styles/Info.css";
export default function Info() {
  return (
    <>
      <div
        className="d-flex justify-content-center my-20"
        style={{ margin: "20px", padding: "30px" }}
      >
        <div className="row section-title">
          <h2
            className="fs-4 d-flex justify-content-center"
            style={{ textAlign: "center" }}
          >
            Clean Ballot - The Online Voting System
          </h2>
          <p>
            The Clean Ballot Online Voting System is an innovative and secure
            digital platform designed to modernize the traditional voting
            process. With robust security measures in place to safeguard the
            integrity of votes and ensure transparency, Clean Ballot Online
            Voting System aims to enhance the democratic experience and
            encourage higher voter turnout in an increasingly digital world.
          </p>
        </div>
      </div>
    </>
  );
}
