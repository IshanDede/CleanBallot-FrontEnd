import React from "react";
import Manifesto from "./Manifesto";
import { useState } from "react";

export default function Votingcard(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="votingCard">
        <div
          className="m-5 my-5 d-flex justify-content-center"
          style={{ margin: "20px", padding: "30px" }}
        >
          <div className="row my-2">
            {props.votingCandidate.map((votingcandidate) => (
              <div
                className="container col-lg-4"
                style={{ paddingBottom: "30px" }}
                key={votingcandidate._id}
              >
                <div className="card mx-10 my-10" style={{ width: "18rem" }}>
                  <img
                    src={`${process.env.REACT_APP_API_URL}${votingcandidate.candidatePhoto}`}
                    className="card-img-top"
                    alt="..."
                    style={{ width: "18rem", height: "150px" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title" style={{ color: "#006778" }}>
                      {votingcandidate.name}
                    </h3>
                    <span>
                      <h6 className="votingCard">
                        Runnung to Be: Prime Minister
                      </h6>
                    </span>
                    <p className="card-text">
                      <p className="votingCard">
                        Party : {votingcandidate.party}
                      </p>
                    </p>
                    <button
                      onClick={() => setButtonPopup(true)}
                      className="btn btn-primary mx-2"
                    >
                      View Manifesto
                    </button>
                    <Manifesto
                      trigger={buttonPopup}
                      setTrigger={setButtonPopup}
                      key={votingcandidate._id}
                    ></Manifesto>
                    <button
                      onClick={() => props.handleClick(votingcandidate._id)}
                      className="btn btn-danger mx-2"
                    >
                      Vote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
