import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";
import "./Confirmation.css";

export default function Confirmation({
  setCurrentStep,
}) {
  const notify = () => toast("Vos informations ont été envoyées !");
  setCurrentStep(5) 

  const formData = JSON.parse(localStorage.getItem("Form"));
  const service = localStorage.getItem("selectedService");
  const secteur = localStorage.getItem("SelectedSector");
  const { Nom, Prénom, Email, Téléphone } = formData;
  const selectedCategory = localStorage.getItem("selectedCategory");
  const selectedSubCategory = localStorage.getItem("SelectedSubCategory");
  const handleSave = (notify) => {

    setCurrentStep(6)
    //the Email details 
    const Serviceid = "service_w0m2tmi";
    const Templateid = "template_6lcayu7";
    const publicKey = "AL-p2PQ2haf2rWheB";
    // create a new object that contains the dynamic  template params 
    const tamplateparams = {
      from_name: Nom,
      from_lastname: Prénom,
      from_tele: Téléphone,
      from_Email: Email,
      from_servie: service,
      from_category: selectedCategory,
      from_SousCategorie: selectedSubCategory, // Corrected key
      from_secteur: secteur,
      to_name: "Allo Baba Agence"
    }


    //send this infos to the email 
    emailjs.send(Serviceid, Templateid, tamplateparams, publicKey).then((res) => {
      console.log("email sent successfully ", res);
      notify()

    }).catch((error) => {
      console.log("error sending email: ", error);
    })
  };

  const navigate = useNavigate();

  const handleBack = () => {
    
    navigate("/Infos"); // navigate -1 to return to the previous page
  };

  return (
    <>
      <div className="table-container">
        <table className="styled-table">
          <tr>
            <th>Nom</th>
            <td>{Nom}</td>
          </tr>
          <tr>
            <th>Prénom</th>
            <td>{Prénom}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{Email}</td>
          </tr>
          <tr>
            <th>Téléphone</th>
            <td>{Téléphone}</td>
          </tr>
          <tr>
            <th>Service</th>
            <td>{service}</td>
          </tr>
          <tr>
            <th>  Votre Catégorie</th>
            <td>{selectedCategory}</td>
          </tr>
          <tr>
            <th>Votre Sous Catégorie</th>
            <td>{selectedSubCategory}</td>
          </tr>
          <tr>
            <th> Votre Secteur</th>
            <td>{secteur}</td>
          </tr>
        </table>
      </div>
      <div className="button-container">
        <button className="styled-button" onClick={() => handleSave(notify)}>
         Envoyer
        </button>
        <ToastContainer/>
        <button className="styled-button" onClick={handleBack}>
         Retour
        </button>
      </div>
    </>
  );
}
