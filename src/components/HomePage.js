import React from "react";
import Info from "./Info";
import Votingcard from "./Votingcard";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts";
import Webcam from "react-webcam";


export default function HomePage(props) {
  const { socket } = useGlobalContext();
  const [candidates, setCandidates] = useState([]);
  const [frame, setFrame] = useState(null);

  // useEffect(()=>{
  //   socket.current.emit("imageFrame", {frame});

  // },[frame]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

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

  const handleButtonClick = (id) => {
    const item = candidates.find((obj) => obj._id === id);
    const number = item.voteCount + 1;

    // Handle the button click for the specific item with the given id
    console.log(`Button with id ${id} clicked.`);
    fetch(`${process.env.REACT_APP_API_URL}/api/cast-vote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type as needed
        // You may need to include authentication headers, if required
        // 'Authorization': 'Bearer <token>',
      },
      body: JSON.stringify({ candId: id }), // Replace with your data
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
      <div className="container mx-auto">
        <div className="row justify-content-center">
          <Webcam
            audio={false}
            height={360}
            screenshotFormat="image/jpeg"
            width={480}
            videoConstraints={videoConstraints}

          >
          {(({getScreenshot})=>{
              console.log(getScreenshot());
              setFrame(getScreenshot())
          })}

          </Webcam>
        </div>
      </div>

      <Votingcard
        votingCandidate={candidates}
        handleClick={handleButtonClick}
      />
    </>
  );
}
