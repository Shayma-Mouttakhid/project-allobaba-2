import React from "react";
import { useNavigate } from "react-router-dom";

export default function Confirmation({setCurrentStep}) {
  setCurrentStep(5) // removed useEffect because it runs a warning
  const navigate = useNavigate();

  const formData = JSON.parse(localStorage.getItem("formData"));
  const { nomComplet, numeroTelephone, votreMessage } = formData;
  const service = localStorage.getItem("selectedService");
  const selectedCategory = localStorage.getItem("selectedCategory");
  const selectedSubCategory = localStorage.getItem("SelectedSubCategory");
  
  const handleSend = () => {
  
  };


  const handleBack = () => {
    navigate(-1); // navigate -1 to return to the previous page
  };

  return (
    <>
      <div className="table-container">
        <table className="styled-table">
            <tr>
              <th>Nom complet</th>
              <td>{nomComplet}</td>
            </tr>
            <tr>
              <th>Numéro de téléphone</th>
              <td>{numeroTelephone}</td>
            </tr>
            <tr>
              <th>Message</th>
              <td>{votreMessage}</td>
            </tr>
            <tr>
              <th>Service</th>
              <td>{service}</td>
            </tr>
            <tr>
              <th>Catégorie</th>
              <td>{selectedCategory}</td>
            </tr>
            <tr>
              <th>Sous-catégorie</th>
              <td>{selectedSubCategory}</td>
            </tr>
        </table>
      </div>
      <div className="button-container">
        <button className="styled-button" onClick={handleBack}>
          Retour
        </button>
        <button className="styled-button" onClick={handleSend}>
          Envoyer
        </button>
      </div>
    </>
  );
}
