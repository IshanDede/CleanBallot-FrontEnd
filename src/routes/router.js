import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import ViewResult from "../components/ViewResult";
import Winner from "../components/Winner";
import AdminPage from "../pages/AdminPage"
import AdminLogin from "../pages/AdminLogin";
import AdminRegister from "../pages/AdminRegister";
import CandidatePage from "../pages/CandidatePage";
import AddCandidateForm from "../features/AddCandidateForm";
import VoterPage from "../pages/VoterPage";
import AddVoterForm from "../features/AddVoterForm";
import EditCandidateForm from "../features/EditCandidateForm";
import EditVoterForm from "../features/EditVoterForm";
import VoteCastPage from "../pages/VoteCastPage";
import VotingQueue from "../pages/VotingQueue";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <><div>Landing page Add here</div></>,
        errorElement: <><div>There is some error in react App</div></>,
    },
    {
        path:"/vote-queue",
        element:<VotingQueue/>
    },
    {
        path:"/midoff",
        element:<><Navbar/><Outlet/></>,
        children:[
            {
                index:true,
                element:<><div>mediator page</div></>
            },
            {
                path:"/midoff/add-to-queue",
                element:<><div>about to develop</div></>
            },
            {
                path:"/midoff/cast-vote",
                element:<VoteCastPage/>
            }
        ]
    }
    ,
    {
        path:"/admin", 
        element:< ><Navbar/><Outlet></Outlet></>,
        children:[
            {
                index:true,
                element:<AdminPage/>
            },
            {
                path:"/admin/candidate",
                element:<CandidatePage />
            },
            {
                path:"/admin/addCandidate", 
                element:<AddCandidateForm />
            },
            {
                path:"/admin/editCandidate/:id", element:<EditCandidateForm />
            },
            {
                path:"/admin/voter", element: <VoterPage />
            },
            {
                path:"/admin/editVoter/:id", element:<EditVoterForm />
            },
            {
                path:"/admin/addVoter", element:<AddVoterForm />
            }
        ]
    },
    {
        path:"/login", 
        element:<AdminLogin />
    },
    

]);

/**
 * 
 * <Router>
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
          /> 
      //     <Route path="/admin" element={<AdminPage />} />
      //     <Route path="/login" element={<AdminLogin />} />
      //     <Route path="/register" element={<AdminRegister />} />
      //     <Route path="/candidate" element={<CandidatePage />} />
      //     <Route path="/addCandidate" element={<AddCandidateForm />} />
      //     <Route path="/editCandidate/:id" element={<EditCandidateForm />} />
      //     <Route path="/voter" element={<VoterPage />} />
      //     <Route path="/addVoter" element={<AddVoterForm />} />
      //     <Route path="/editVoter/:id" element={<EditVoterForm />} />
      //   </Routes>
      // </Router>
 */