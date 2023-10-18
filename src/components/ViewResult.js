import React from "react";
import "../Styles/Result.css";
import { Link } from "react-router-dom";
export default function ViewResult(props) {
  return (
    <>
      <h1 className="result">The Results are out !!</h1>
      <p className="result">
        click here to check winner <Link to="/winner">check winner</Link>
      </p>
      <div
        className="votingCard container"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="m-5 row my-2">
          {props.votingCandidate.map((candidate) => (
            <div
              className="col-lg-4"
              style={{ paddingTop: "20px", paddingBottom: "20px" }}
            >
              <div className="container">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}${candidate.candidatePhoto}`}
                    class="card-img-top"
                    alt="..."
                    style={{ width: "200px", height: "150px" }}
                  />
                  <div class="card-body">
                    <p class="card-text">Name : {candidate.name}</p>
                    <p className="card-text">
                      <p className="votingCard">Party : {candidate.party}</p>
                    </p>
                    <p class="card-text">Total Votes : {candidate.voteCount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
