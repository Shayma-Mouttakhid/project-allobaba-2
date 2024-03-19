import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Confirmation.css";

export default function Confirmation({
  setCurrentStep,
}) {
  useEffect(() => {
    setCurrentStep(5);
  }, []);

  const formData = JSON.parse(localStorage.getItem("Form"));
  const service = localStorage.getItem("selectedService");
  const secteur = localStorage.getItem("SelectedSector");
  const { name, lastName, Email, telephone } = formData;
  const selectedCategory = localStorage.getItem("selectedCategory");
  const selectedSubCategory = localStorage.getItem("SelectedSubCategory");
  const handleSave = () => {
  
  
    //the Email details 
    const Serviceid="service_w0m2tmi";
    const Templateid="template_6lcayu7";
    const publicKey="AL-p2PQ2haf2rWheB";
    // create a new object that contains the dynamic  template params 
    const tamplateparams={
      from_name: name,
      from_lastname: lastName,
      from_tele: telephone,
      from_Email: Email,
      from_servie: service,
      from_category: selectedCategory,
      from_SousCategorie: selectedSubCategory, // Corrected key
      from_secteur: secteur,
      to_name: "Allo Baba Agence"
    }
    
  
    //send this infos to the email 
    emailjs.send(Serviceid,Templateid,tamplateparams,publicKey).then((res)=>{
      console.log("email sent successfully ", res);
      
    }).catch((error)=>{
      console.log("error sending email: " , error );
    })
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/Infos");
  };

  return (
    <>
      <div className="table-container">
        <table className="styled-table">
            <tr>
              <th>Name</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{lastName}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{Email}</td>
            </tr>
            <tr>
              <th>Telephone</th>
              <td>{telephone}</td>
            </tr>
            <tr>
              <th>Service</th>
              <td>{service}</td>
            </tr>
            <tr>
              <th>Selected Category</th>
              <td>{selectedCategory}</td>
            </tr>
            <tr>
              <th>Selected SubCategory</th>
              <td>{selectedSubCategory}</td>
            </tr>
            <tr>
              <th>Secteur</th>
              <td>{secteur}</td>
            </tr>
        </table>
      </div>
      <div className="button-container">
        <button className="styled-button" onClick={handleSave}>
          Send
        </button>
        <button className="styled-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </>
  );
}
