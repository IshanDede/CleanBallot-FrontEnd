import React from "react";
import Info from "./Info";
import Votingcard from "./Votingcard";

import { useEffect, useState } from "react";

export default function HomePage(props) {
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

  const updateVote = (id) => {
    const item = candidates.find((obj) => obj._id === id);
    const number = item.voteCount + 1;

    // Handle the button click for the specific item with the given id

    fetch(`${process.env.REACT_APP_API_URL}/api/candidates/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Set the content type as needed
        // You may need to include authentication headers, if required
        // 'Authorization': 'Bearer <token>',
      },
      body: JSON.stringify({ voteCount: number }), // Replace with your data
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Data:", data); // Handle the response data
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
      });
  };

  return (
    <>
      <Info />
      <Votingcard votingCandidate={candidates} updateVote={updateVote} />
    </>
  );
}
