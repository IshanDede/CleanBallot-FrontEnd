import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CandidatePage = () => {
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

  const handleDeleteCandidate = (id) => {
    // Send a DELETE request to your API
    fetch(`${process.env.REACT_APP_API_URL}/api/candidates/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        // Remove the deleted candidate from the state
        //prevCandidates is  builtin function that gets created alongside setCandidates
        setCandidates((prevCandidates) =>
          prevCandidates.filter((candidate) => candidate._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Registered Candidates</h1>
      <Link to="/admin">
        <button className="btn btn-primary mb-3">Back to Admin</button>
      </Link>
      <Link to="/admin/addCandidate">
        <button className="btn btn-primary ms-3 mb-3">Add Candidate</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Symbol</th>
            <th>State</th>
            <th>Votes Recieved</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate._id}>
              <td>{candidate.name}</td>
              <td>{candidate.party}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_API_URL}${candidate.partyPhoto}`}
                  alt={`${candidate.party} Symbol`}
                  className="img-thumbnail"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </td>
              <td>{candidate.state}</td>
              <td>{candidate.voteCount}</td>
              <td>{candidate.status}</td>
              <td>
                <Link
                  to={{
                    pathname: `/admin/editCandidate/${candidate._id}`,
                  }}
                >
                  <button className="btn btn-warning me-2">
                    <i className="fas fa-edit"></i> Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteCandidate(candidate._id)}
                >
                  <i className="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding/editing a candidate */}
      <div className="modal" tabIndex="-1" role="dialog">
        {/* ... (your modal content) */}
      </div>
    </div>
  );
};

export default CandidatePage;
