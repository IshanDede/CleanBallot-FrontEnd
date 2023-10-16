import React from "react";

import Confetti from "react-confetti";

export default function Winner(props) {
  return (
    <>
      <Confetti />
      <div
        className="container w-50 p-3"
        style={{ fontFamily: " Georgia Times New Roman Times, serif" }}
      >
        <div className="card">
          <img className="card-img-top" src={props.img} alt="winner" />
          <div className="card-body">
            <h3 className="card-title">Winner</h3>
            <h4 className="card-subtitle">{props.name}</h4>
            <h4 className="card-subtitle">{props.party}</h4>
            <p className="card-text">Votes Count : {props.vote}</p>
          </div>
        </div>
      </div>
    </>
  );
}
