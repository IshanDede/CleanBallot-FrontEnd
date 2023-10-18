import React from "react";
import { useEffect, useState } from "react";
import "../Styles/Result.css";
import { Link } from "react-router-dom";
export default function ViewResult() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch candidate data from the API
    fetch(`${process.env.REACT_APP_API_URL}/api/candidates`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to the candidates state
        setCandidates(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <h1 className="result">The Results are out !!</h1>
      <p className="result">
        click here to check winner{" "}
        <Link to="/midoff/check-winner">check winner</Link>
      </p>
      <div
        className="votingCard container"
        style={{ backgroundColor: "whitesmoke" }}
      >
        <div className="m-5 row my-2">
          {candidates.map((candidate) => (
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
