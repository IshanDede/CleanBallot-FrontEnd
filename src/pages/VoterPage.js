import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VoterPage = () => {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    // Fetch voter data from the API
    fetch(`${process.env.REACT_APP_API_URL}/api/voters`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data to the voters state
        setVoters(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  const handleDeleteVoter = (id) => {
    // Send a DELETE request to your API
    fetch(`${process.env.REACT_APP_API_URL}/api/voters/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        // Remove the deleted voter from the state
        setVoters((prevVoters) =>
          prevVoters.filter((voter) => voter._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Registered Voters</h1>
      <Link to="/admin">
        <button className="btn btn-primary mb-3">Back to Admin</button>
      </Link>
      <Link to="/addVoter">
        <button className="btn btn-primary ms-3 mb-3">Add Voter</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Gender</th>
            <th>Age</th>
            <th>State</th>
            <th>District</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {voters.map((voter) => (
            <tr key={voter._id}>
              <td>{voter.name}</td>
              <td>
                <img
                  src={`${process.env.REACT_APP_API_URL}${voter.photo}`}
                  alt={`${voter.name}'s Photo`}
                  className="img-thumbnail"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
              </td>
              <td>{voter.gender}</td>
              <td>{voter.age}</td>
              <td>{voter.state}</td>
              <td>{voter.district}</td>
              <td>{voter.status}</td>
              <td>
                <Link
                  to={{
                    pathname: `/editVoter/${voter._id}`,
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
                  onClick={() => handleDeleteVoter(voter._id)}
                >
                  <i className="fas fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding/editing a voter */}
      <div className="modal" tabIndex="-1" role="dialog">
        {/* ... (your modal content) */}
      </div>
    </div>
  );
};

export default VoterPage;
