import React from "react";
import { useEffect, useState } from "react";

import Confetti from "react-confetti";

export default function Winner() {
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

  const candidateWithMaxVotes = candidates.reduce(
    (maxCandidate, currentCandidate) => {
      return currentCandidate.voteCount > maxCandidate.voteCount
        ? currentCandidate
        : maxCandidate;
    },
    candidates[0]
  );

  return (
    <>
      <Confetti />

      <div
        className="container w-50 p-3"
        style={{ fontFamily: " Georgia Times New Roman Times, serif" }}
      >
        {candidates.length > 0 && (
          <div className="card">
            <img
              className="card-img-top"
              src={`${process.env.REACT_APP_API_URL}${candidateWithMaxVotes.candidatePhoto}`}
              alt="winner"
              height={"400px"}
            />

            <div className="card-body">
              <h3 className="card-title">Winner</h3>
              <h4 className="card-subtitle">{candidateWithMaxVotes.name}</h4>
              <h4 className="card-subtitle">{candidateWithMaxVotes.party}</h4>
              <p className="card-text">
                Votes Count : {candidateWithMaxVotes.voteCount}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
