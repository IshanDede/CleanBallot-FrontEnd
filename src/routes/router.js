import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import ViewResult from "../components/ViewResult";
import Winner from "../components/Winner";
import HomePage from "../components/HomePage";
import AdminPage from "../pages/AdminPage";
import AdminLogin from "../pages/AdminLogin";
import AdminRegister from "../pages/AdminRegister";
import CandidatePage from "../pages/CandidatePage";
import AddCandidateForm from "../features/AddCandidateForm";
import VoterPage from "../pages/VoterPage";
import AddVoterForm from "../features/AddVoterForm";
import EditCandidateForm from "../features/EditCandidateForm";
import EditVoterForm from "../features/EditVoterForm";
import LandingPage from "../components/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LandingPage />
      </>
    ),
    errorElement: (
      <>
        <div>There is some error in react App</div>
      </>
    ),
  },
  {
    path: "/midoff",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <div>mediator page</div>
          </>
        ),
      },
      {
        path: "/midoff/add-to-queue",
        element: (
          <>
            <div>about to develop</div>
          </>
        ),
      },
      {
        path: "/midoff/cast-vote",
        element: <HomePage />,
      },
      {
        path: "/midoff/view-result",
        element: <ViewResult />,
      },
      {
        path: "/midoff/check-winner",
        element: <Winner />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <>
        <Navbar />
        <Outlet></Outlet>
      </>
    ),
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
      {
        path: "/admin/candidate",
        element: <CandidatePage />,
      },
      {
        path: "/admin/addCandidate",
        element: <AddCandidateForm />,
      },
      {
        path: "/admin/editCandidate/:id",
        element: <EditCandidateForm />,
      },
      {
        path: "/admin/voter",
        element: <VoterPage />,
      },
      {
        path: "/admin/editVoter/:id",
        element: <EditVoterForm />,
      },
      {
        path: "/admin/addVoter",
        element: <AddVoterForm />,
      },
    ],
  },
  {
    path: "/login",
    element: <AdminLogin />,
  },
]);
