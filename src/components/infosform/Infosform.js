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
  },[]);

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
        isValidInput = /^\+\d{1,3}\s?\d{5,14}$/.test(value);
        error = isValidInput ? "" : `Le numéro de téléphone doit commencer par le code du pays (ex: +1) suivi du reste du numéro.`;
        setTelephoneError(error);
        break;
      default:
        break;
    }
    setForm((prevState) => ({ ...prevState, [id]: value, }))

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
    <div className="container-fluid">
      <div className="container-fluid  rounded d-flex justify-content-center align-items-center">
        <div className="col-sm-10 col-md-6 col-lg-4">
          <h1 className='headerQF text-center mb-4'>Informations</h1>
          <form className="border p-4 rounded border-secondary">
            <div className="form-group mb-3">
              <label htmlFor="name">Nom</label>
              <input type="text" id="Nom" className={`form-control ${nameError && 'is-invalid'}` }onChange={handlechange} value={Form.Nom} required />
              {nameError && <div className="invalid-feedback">{nameError}</div>}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastName">Prénom</label>
              <input type="text" id="Prénom"  className={`form-control ${lastNameError && 'is-invalid'}` } onChange={handlechange} value={Form.Prénom} required />
              {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}

            </div>
            <div className="form-group mb-3">
              <label htmlFor="Email">Email</label>
              <input type="email" id="Email"  className={`form-control ${emailError && 'is-invalid'}` }onChange={handlechange} value={Form.Email} required />
              {emailError && <div className="invalid-feedback">{emailError}</div>}

            </div>
            <div className="inputRow">
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="Téléphone"  className={`form-control ${telephoneError && 'is-invalid'}` }onChange={handlechange} value={Form.Téléphone} required />
              {telephoneError && <div className="invalid-feedback">{telephoneError}</div>}

            </div>


            <div className="button-container">
              <button className="styled-button" onClick={handleGoBack}>Retour</button>
              <button className="styled-button " onClick={handleconfirmer}>Confirmer</button> <ToastContainer />

            </div>
          </form>
        </div>
      </div>
      

    </div>
  );
}
