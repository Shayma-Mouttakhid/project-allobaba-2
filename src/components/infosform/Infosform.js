import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Infosform.css";

export default function Infos({ setCurrentStep, setForm, Form }) {
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const navigate = useNavigate();

  // Retrieve form data from local storage on component mount
  useEffect(() => {
    setCurrentStep(4);
    const storedForm = localStorage.getItem("Form");
    if (storedForm) {
      setForm(JSON.parse(storedForm));
    }
  }, []);

  const handlechange = (e) => {
    const { id, value } = e.target;

    let isValidInput = true;
    let error = "";

    switch (id) {
      case "Nom":
        isValidInput = /^[a-zA-Z]+\s*[a-zA-Z]*$/.test(value);
        error = isValidInput ? "" : `Invalide ${id}`;
        setNameError(error);
        break;
      case "Prénom":
        isValidInput = /^[a-zA-Z]+\s*[a-zA-Z]*$/.test(value);
        error = isValidInput ? "" : `Invalide ${id}`;
        setLastNameError(error);
        break;
      case "Email":
        isValidInput = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        error = isValidInput ? "" : `Invalide ${id}`;
        setEmailError(error);
        break;
      case "Téléphone":
        isValidInput = /^\d+$/.test(value);
        error = isValidInput ? "" : `Invalide ${id}`;
        setTelephoneError(error);
        break;
      default:
        break;
    }
    setForm((prevState) => ({ ...prevState, [id]: value, }))

    // Show notification for each error
    if (error) {
      toast.error(error);
    }
  };

  const handleconfirmer = (e) => {
    if (nameError || lastNameError || emailError || telephoneError) {
      e.preventDefault();
      toast.error("Vous devez remplir tous les champs");
      return;
    } else if (!Form.Nom || !Form.Prénom || !Form.Email || !Form.Téléphone) {
      e.preventDefault();
      toast.error("Vous devez remplir tous les champs");
      return;
    } else {
      setCurrentStep(5);
      navigate("/Confirmation");
    }
  };

  const handleGoBack = () => {
    setCurrentStep(3);
    navigate("/clientSubCategory");
  };

  // Save form data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("Form", JSON.stringify(Form));
  }, [Form]);

  return (
    <div className="Cont">
      <form className="Form">
        
        <h1>Informations</h1>
        <div className="inputRow">
          <label htmlFor="name">Nom</label>
          <input type="text" id="Nom" onChange={handlechange} value={Form.Nom} required />
        </div>
        <div className="inputRow">
          <label htmlFor="lastName">Prénom</label>
          <input type="text" id="Prénom" onChange={handlechange} value={Form.Prénom} required />
        </div>
        <div className="inputRow">
          <label htmlFor="Email">Email</label>
          <input type="email" id="Email" onChange={handlechange} value={Form.Email} required />
        </div>
        <div className="inputRow">
          <label htmlFor="telephone">Téléphone</label>
          <input type="tel" id="Téléphone" onChange={handlechange} value={Form.Téléphone} required />
        </div>
        
        
        <div className="button-container">
          <button className="styled-button "onClick={handleconfirmer}>Confirmer</button> <ToastContainer  />
          <button className="styled-button" onClick={handleGoBack}>Retour</button>
        </div>
      </form>
    </div>
  );
}
