import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Infosform.css";

export default function Infos({ setCurrentStep, setForm, Form }) {
  const [nameError, setNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const navigate = useNavigate();


  // Retrieve form data from local storage on component mount
  useEffect(() => {
    setCurrentStep(4)
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
      case "name":
        isValidInput = /^[a-zA-Z]+$/.test(value);
        error = isValidInput ? "" : `Invalid ${id}`;
        setNameError(error);
        break;
      case "lastName":
        isValidInput = /^[a-zA-Z]+$/.test(value);
        error = isValidInput ? "" : `Invalid ${id}`;
        setLastNameError(error);
        break;
      case "Email":
        isValidInput = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        error = isValidInput ? "" : `Invalid ${id}`;
        setEmailError(error);
        break;
      case "telephone":
        isValidInput = /^[0-9]{10}$/.test(value);
        error = isValidInput ? "" : `Invalid ${id}`;
        setTelephoneError(error);
        break;
      default:
        break;
    }

    const inputStyle = isValidInput ? "" : { Color: "red" };
    setForm((prevState) => ({ ...prevState, [id]: value, [`${id}Style`]: inputStyle }));
  };

  const handleconfirmer = (e) => {
    if (nameError || lastNameError || emailError || telephoneError) {
      e.preventDefault();
      alert("fix your errors");

      //if there any error in inputs don't navigate to the next page
      return;
    } else if (!Form.name || !Form.lastName || !Form.Email || !Form.telephone) {
      e.preventDefault();
      alert("you should write you infos");

      //if the inputs are empty don't go to the next page
      return;
    } else {
      setCurrentStep(5);
      navigate("/Confirmation");
    }

  };

  const handleGoBack = () => {
    setCurrentStep(3);
    navigate(-1);
  };

  // Save form data to local strage whenever it changes
  useEffect(() => {
    localStorage.setItem("Form", JSON.stringify(Form));
  }, [Form]);

  return (
    <div className="Cont">
      <form className="Form">
        <h1>infos</h1>
        <div className="inputRow">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handlechange} value={Form.name} style={Form.inputStyle} required />
        </div>
        <div className="inputRow">
          <label htmlFor="lastName">Last_Name</label>
          <input type="text" id="lastName" onChange={handlechange} value={Form.lastName} style={Form.inputStyle} required />
        </div>
        <div className="inputRow">
          <label htmlFor="Email">Email</label>
          <input type="email" id="Email" onChange={handlechange} value={Form.Email} style={Form.inputStyle} required />
        </div>
        <div className="inputRow">
          <label htmlFor="telephone">telephone </label>
          <input type="text" id="telephone" onChange={handlechange} value={Form.telephone} style={Form.inputStyle} required />
        </div>
        <button onClick={handleconfirmer}>Confirmer</button>
        <div className="text-center mt-3">
          <button className="return-button" onClick={handleGoBack}>Retour</button>
        </div>
      </form>
    </div>
  );
}
