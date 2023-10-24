// import React from "react";
// import { useEffect, useState } from "react";

// import Confetti from "react-confetti";

// export default function Winner() {
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     // Fetch candidate data from the API
//     fetch(`${process.env.REACT_APP_API_URL}/api/candidates`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Set the fetched data to the candidates state
//         setCandidates(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []); // Empty dependency array ensures this effect runs only once

//   return (
//     <>
//       <Confetti />
//       <div
//         className="container w-50 p-3"
//         style={{ fontFamily: " Georgia Times New Roman Times, serif" }}
//       >
//         <div className="card">
//           {/* <img className="card-img-top" src={candidates[0].img} alt="winner" /> */}
//           <div className="card-body">
//             <h3 className="card-title">Winner</h3>
//             <h4 className="card-subtitle">{candidates[0].name}</h4>
//             <h4 className="card-subtitle">{candidates[0].party}</h4>
//             <p className="card-text">Votes Count : {candidates[0].vote}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
