import React from "react";
import mainImg from "../assets/images/voteImg.webp";
import Footer from "./Footer";
import LandingFeatures from "./LandingFeatures";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";

export default function LandingPage(props) {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#a8e6cf" }}>
        <div className="row">
          <div
            className="col-lg-4"
            style={{
              height: "120px",
              margin: "150px",
              textAlign: "center",
              lineHeight: "1.5",
              fontWeight: "bolder",
            }}
          >
            <h1
              style={{
                color: "#006778",
                fontSize: "70px",
                fontFamily: "Anton sans-serif",
              }}
            >
              Clean-Ballot
            </h1>
            <p>
              The Clean Ballot Online Voting System is an innovative and secure
              digital platform designed to modernize the traditional voting
              process.
            </p>
          </div>
          <div className="container col-lg-4">
            <img src={mainImg} alt="" />
          </div>
        </div>

        <LandingFeatures />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}
