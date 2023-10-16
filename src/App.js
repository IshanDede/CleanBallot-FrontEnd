import "./App.css";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// AdminSide's Work
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import CandidatePage from "./pages/CandidatePage";
import AddCandidateForm from "./features/AddCandidateForm";
import VoterPage from "./pages/VoterPage";
import AddVoterForm from "./features/AddVoterForm";
import EditCandidateForm from "./features/EditCandidateForm";
import EditVoterForm from "./features/EditVoterForm";

// Non-Admin's Work
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ViewResult from "./components/ViewResult";
import Winner from "./components/Winner";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/admin",
//     element: <AdminPage />,
//   },
//   {
//     path: "/candidate",
//     element: <CandidatePage />,
//   },
//   {
//     path: "/addCandidate",
//     element: <AddCandidateForm />,
//   },
//   {
//     path: "/editCandidate/:id",
//     element: <EditCandidateForm />,
//   },
//   {
//     path: "/voter",
//     element: <VoterPage />,
//   },
//   {
//     path: "/addVoter",
//     element: <AddVoterForm />,
//   },
//   {
//     path: "/editVoter/:id",
//     element: <EditVoterForm />,
//   },
// ]);
function App() {
  const votingcandidates = [
    {
      id: 1,
      name: "Narendra Modi",
      candidateImg:
        "https://c.ndtvimg.com/2023-08/s6p410ng_narendra-modi-ani_625x300_25_August_23.jpg",
      party: "BJP",
      votingCount: 0,
      Manifesto: "ijisgi",
    },
    {
      id: 2,
      name: "Rahul Gandhi",
      candidateImg:
        "https://images.deccanherald.com/deccanherald%2F2023-09%2F5b177dbb-be44-40a1-a330-e782d315ddfd%2FPTI09_01_2023_000188B.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&w=900&dpr=1.5",
      party: "Congress",
      votingCount: 0,
      Manifesto: ["jaaaaaa", "bhwwrggsg", "afdssf"],
    },
    {
      id: 3,
      name: "Arvind Kejriwal",
      candidateImg:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS-uQU5sWlVPYX8horySMHMsb4gYV7kbeZhphjoO0Jjl-mj_nH5LZ8il-PRRpcgJZa4i7GJjQp_Pt-Gi0Q",
      party: "AAP",
      votingCount: 0,
      Manifesto: ["ohoiio", "bfqgegqeeba", "hwwwwwwua"],
    },
    {
      id: 4,
      name: "Mamta Banerjee",
      candidateImg:
        "https://www.livemint.com/lm-img/img/2023/09/05/600x338/Mamata_Banerjee_1693880556426_1693880556708.jpg",
      party: "BSP",
      votingCount: 0,
      Manifesto: ["jenfj", "bheba", "hugdua"],
    },
    {
      id: 5,
      name: "Sharad Pawar",
      candidateImg:
        "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-3coomq3l3744re2t8kqmlvnpc3-20190929055044.Medi.jpeg",
      party: "RVC",
      votingCount: 0,
      Manifesto: ["jenfj", "bheba", "hugdua"],
    },
  ];

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

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      {/* <RouterProvider router={router}>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
        />
      </RouterProvider> */}
      {console.log(candidates)}
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                votingCandidate={candidates}
                handleClick={handleClick}
              />
            }
          />
          <Route
            path="/viewResult"
            element={<ViewResult votingCandidate={candidates} />}
          />
          {/* <Route
            path="/winner"
            element={
              <Winner
                img={}
                name={candidates[0].name}
                party={candidates[0].party}
                vote={candidates[0].voteCount}
              />
            }
          /> */}
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/register" element={<AdminRegister />} />
          <Route path="/candidate" element={<CandidatePage />} />
          <Route path="/addCandidate" element={<AddCandidateForm />} />
          <Route path="/editCandidate/:id" element={<EditCandidateForm />} />
          <Route path="/voter" element={<VoterPage />} />
          <Route path="/addVoter" element={<AddVoterForm />} />
          <Route path="/editVoter/:id" element={<EditVoterForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
