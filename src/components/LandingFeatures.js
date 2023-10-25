import React from "react";
import "../Styles/LandingFeatures.css";
import f1 from "../assets/images/accessible.png";
import f2 from "../assets/images/f2.png";
import f3 from "../assets/images/f3.png";
import f4 from "../assets/images/f4.png";

export default function LandingFeatures() {
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "#CAF1DE",
          textAlign: "center",
          padding: "100px",
        }}
      >
        <h1
          style={{
            color: "#006778",
            fontSize: "40px",
            fontFamily: "Anton sans-serif",
          }}
        >
          Features
        </h1>
        <div className="row feature">
          <div className="col-lg-6">
            <h3>Accessibility</h3>
            <p>
              Support for a variety of devices, including smartphones, tablets,
              and computers, to ensure a wide range of voters can participate.
            </p>
          </div>
          <div className="col-lg-6 ">
            <img className="featureImg" src={f1} alt="f1" />
          </div>
        </div>
        <div className="row feature">
          <div className="col-lg-6">
            <img className="featureImg" src={f2} alt="f2" />
          </div>
          <div className="col-lg-6">
            <h3>Security</h3>
            <p>
              Robust encryption to protect the integrity and confidentiality of
              the voting data. Measures to prevent voter fraud. Regular security
              audits and updates to safeguard against vulnerabilities.
            </p>
          </div>
        </div>
        <div className="row feature">
          <div className="col-lg-6">
            <h3>Ease of Use</h3>
            <p>
              Intuitive and user-friendly interfaces to simplify the voting
              process for all demographics. Clear instructions and guidance for
              voters
            </p>
          </div>
          <div className="col-lg-6">
            <img className="featureImg" src={f3} alt="f3" />
          </div>
        </div>
        <div className="row feature">
          <div className="col-lg-6">
            <img className="featureImg" src={f4} alt="f4" />
          </div>
          <div className="col-lg-6">
            <h3>Real-time Results</h3>
            <p>
              Instantaneous tabulation and publication of results once the
              voting period ends. Elimination of manual counting errors and
              delays.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
