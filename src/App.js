import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import AdminPage from "./pages/AdminPage";
import Home from "./pages/Home";
import CandidatePage from "./pages/CandidatePage";
import AddCandidateForm from "./features/AddCandidateForm";
import VoterPage from "./pages/VoterPage";
import AddVoterForm from "./features/AddVoterForm";
import EditCandidateForm from "./features/EditCandidateForm";
import EditVoterForm from "./features/EditVoterForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/candidate",
    element: <CandidatePage />,
  },
  {
    path: "/addCandidate",
    element: <AddCandidateForm />,
  },
  {
    path: "/editCandidate/:id",
    element: <EditCandidateForm />,
  },
  {
    path: "/voter",
    element: <VoterPage />,
  },
  {
    path: "/addVoter",
    element: <AddVoterForm />,
  },
  {
    path: "/editVoter/:id",
    element: <EditVoterForm />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
        />
      </RouterProvider>
    </>
  );
}

export default App;
