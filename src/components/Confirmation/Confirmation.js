import React from "react";
import { useNavigate } from "react-router-dom";
import "./Confirmation.css";

export default function Confirmation({
  setCurrentStep,
  Form,
  selectedCategory,
  selectedSubCategory,
  Service,
}) {
  setCurrentStep(4) // removed useEffect because it runs a warning

  const { name, lastName, Email, telephone } = Form;
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Send");
  };

  const handleBack = () => {
    navigate("/Infos");
  };

  return (
    <>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Selected Category</th>
              <th>Selected SubCategory</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{lastName}</td>
              <td>{Email}</td>
              <td>{telephone}</td>
              <td>{selectedCategory}</td>
              <td>{selectedSubCategory}</td>
              <td>{Service}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <button className="styled-button" onClick={handleClick}>
          Send
        </button>
        <button className="styled-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </>
  );
}
