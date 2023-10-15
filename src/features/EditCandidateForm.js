import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";

const EditCandidateForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    state: "Andhra Pradesh",
    candidatePhoto: null,
    party: "BJP",
    partyPhoto: null,
    status: "Pending",
    manifesto: "",
    voteCount: 0, // Provide an appropriate initial value
  });

  useEffect(() => {
    // Fetch candidate data based on the 'id' from the URL
    fetch(`${process.env.REACT_APP_API_URL}/api/candidates/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  const [showCancelModal, setShowCancelModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const folderName = name === "candidatePhoto" ? "candidates" : "party";
    const relativePath = `/public/images/${folderName}/${files[0].name}`;
    setFormData({
      ...formData,
      [name]: relativePath, // Save the relative path in your form data
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle saving the formData (e.g., make an API request to save it in your database)
    fetch(`${process.env.REACT_APP_API_URL}/api/candidates/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Adjust the content type as needed
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the successful response from the server
        console.log("Response from server:", data);
        toast.success("Candidate updated successfully!"); // Display a success toast
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        toast.error("Error updating candidate"); // Display an error toast
      });
  };

  // Define an array of Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const uploadedCandidatePhoto = formData.candidatePhoto ? (
    <div className="mt-3">
      <h4 className="text-center">Uploaded Candidate Photo:</h4>
      <div className="text-center">
        {/* Center the photo */}
        <img
          src={`${process.env.REACT_APP_API_URL}${formData.candidatePhoto}`}
          alt="Candidate"
          className="img-fluid img-thumbnail"
          style={{
            maxWidth: "300px", // Adjust the maximum width as needed
            margin: "0 auto", // Center horizontally
            display: "block", // Center vertically
          }}
        />
      </div>
    </div>
  ) : null;

  const uploadedPartyPhoto = formData.partyPhoto ? (
    <div className="mt-3">
      <h4 className="text-center">Uploaded Party Photo:</h4>
      <div className="text-center">
        {/* Center the photo */}
        <img
          src={`${process.env.REACT_APP_API_URL}${formData.partyPhoto}`} // Replace with your actual server URL
          alt="Party"
          className="img-fluid img-thumbnail"
          style={{
            maxWidth: "300px", // Adjust the maximum width as needed
            margin: "0 auto", // Center horizontally
            display: "block", // Center vertically
          }}
        />
      </div>
    </div>
  ) : null;

  const handleCancel = () => {
    setShowCancelModal(true);
  };

  const handleConfirmCancel = () => {
    setFormData({
      name: "",
      state: "Andhra Pradesh",
      candidatePhoto: null,
      party: "BJP",
      partyPhoto: null,
      status: "Pending",
      manifesto: "",
    });
    setShowCancelModal(false);
  };

  const handleCancelModalClose = () => {
    setShowCancelModal(false);
  };

  return (
    <>
      <div className="container-fluid bg-light p-4">
        <div className="row">
          <div className="col-md-6 border p-4">
            <h1 className="text-center">Edit Candidate</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="candidatePhoto" className="form-label">
                  Candidate Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="candidatePhoto"
                  name="candidatePhoto"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="party" className="form-label">
                  Party
                </label>
                <select
                  className="form-select"
                  id="party"
                  name="party"
                  value={formData.party}
                  onChange={handleChange}
                >
                  <option value="BJP">Bharatiya Janata Party (BJP)</option>
                  <option value="Congress">
                    Indian National Congress (INC)
                  </option>
                  <option value="AAP">Aam Aadmi Party (AAP)</option>
                  <option value="BSP">Bahujan Samaj Party (BSP)</option>
                  <option value="SP">Samajwadi Party (SP)</option>
                  <option value="TMC">Trinamool Congress (TMC)</option>
                  <option value="CPI">
                    Communist Party of India (Marxist) (CPI(M))
                  </option>
                  <option value="Shiv Sena">Shiv Sena</option>
                  <option value="NCP">Nationalist Congress Party (NCP)</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Status</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="statusPending"
                      value="Pending"
                      checked={formData.status === "Pending"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="statusPending">
                      Pending
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="statusWon"
                      value="Won"
                      checked={formData.status === "Won"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="statusWon">
                      Won
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="status"
                      id="statusDefeated"
                      value="Defeated"
                      checked={formData.status === "Defeated"}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="statusDefeated"
                    >
                      Defeated
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="partyPhoto" className="form-label">
                  Party Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="partyPhoto"
                  name="partyPhoto"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="manifesto" className="form-label">
                  Manifesto
                </label>
                <textarea
                  className="form-control"
                  id="manifesto"
                  name="manifesto"
                  value={formData.manifesto}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="voteCount" className="form-label">
                  Total votes
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="voteCount"
                  name="voteCount"
                  value={formData.voteCount}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger ms-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <Link to="/candidate" className="btn btn-secondary ms-2">
                Back to Candidate Page
              </Link>
            </form>
          </div>
          <div className="col-md-6 border p-4">
            {uploadedCandidatePhoto}
            {uploadedPartyPhoto}
          </div>
        </div>
      </div>
      {/* Confirmation Modal for Cancel Button*/}
      <div
        className={`modal fade ${showCancelModal ? "show" : ""}`}
        style={{
          display: showCancelModal ? "block" : "none",
        }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Cancel</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleCancelModalClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Are you sure you want to cancel? Your changes will be discarded.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancelModalClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleConfirmCancel}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${showCancelModal ? "show" : ""}`}
        style={{
          display: showCancelModal ? "block" : "none",
        }}
      ></div>
    </>
  );
};

export default EditCandidateForm;
