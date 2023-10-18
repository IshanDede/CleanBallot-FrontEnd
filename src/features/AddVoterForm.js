import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddVoterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
    gender: "Male", // Default to "Male"
    age: "",
    dateOfBirth: "",
    state: "Andhra Pradesh", // Default to "Andhra Pradesh"
    district: "Anantapur",
    status: "Pending", // Default to "Pending"
  });

  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    if (formData.dateOfBirth) {
      // Calculate age based on Date of Birth and the current year
      const birthDate = new Date(formData.dateOfBirth);
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();
      setFormData({
        ...formData,
        age: age,
      });
    }
  }, [formData.dateOfBirth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const folderName = "voters";
    const relativePath = `/public/images/${folderName}/${files[0].name}`;
    setFormData({
      ...formData,
      [name]: relativePath, // Save the relative path in your form data
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/api/voters`, {
      method: "POST",
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
        toast.success("Voter saved successfully!"); // Display a success toast
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
        toast.error("Error saving voter"); // Display an error toast
      });
  };

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
  const indianDistricts = [
    // Andhra Pradesh
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "Krishna",
    "Kurnool",
    "Nellore",
    "Prakasam",
    "Srikakulam",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "Y.S.R. Kadapa",

    // Arunachal Pradesh
    "Tawang",
    "West Kameng",
    "East Kameng",
    "Papum Pare",
    "Lower Subansiri",
    "Upper Subansiri",
    "West Siang",
    "East Siang",
    "Upper Siang",
    "Lower Dibang Valley",
    "Dibang Valley",
    "Anjaw",
    "Lohit",
    "Namsai",
    "Changlang",
    "Tirap",
    "Longding",

    // Assam
    "Baksa",
    "Barpeta",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup Metropolitan",
    "Kamrup Rural",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong",

    // Bihar
    "Araria",
    "Arwal",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur (Bhabua)",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",

    //Mah
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",

    // Add more districts and states as needed...
  ];

  const uploadedPhoto = formData.photo ? (
    <div className="mt-3">
      <h4 className="text-center">Uploaded Voter Photo:</h4>
      <div className="text-center">
        {/* Center the photo */}
        <img
          src={`${process.env.REACT_APP_API_URL}${formData.photo}`}
          alt="Voter"
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
      photo: null,
      gender: "Male",
      age: "",
      state: "Andhra Pradesh",
      district: "",
      status: "Pending",
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
            <h1 className="text-center">Add Voter</h1>
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
                <label htmlFor="photo" className="form-label">
                  Photo
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="photo"
                  name="photo"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="dateOfBirth" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date" // Use 'date' input type for DOB
                  className="form-control"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  readOnly // Make the age field read-only
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
                <label htmlFor="district" className="form-label">
                  District
                </label>
                <select
                  className="form-select"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                >
                  {indianDistricts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select
                  className="form-select"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Pending">Pending</option>
                  <option value="Voted">Voted</option>
                  <option value="Not Voted">Not Voted</option>
                </select>
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
              <Link to="/admin/voter" className="btn btn-secondary ms-2">
                Back to Voter Page
              </Link>
            </form>
          </div>
          <div className="col-md-6 border p-4">{uploadedPhoto}</div>
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

export default AddVoterForm;
