import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./QuestionForm.css";
//  import "../Style/style.css";
// import "./QuestionForm.css";

function QuestionForm( {setCurrentStep}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomComplet: '',
    numeroTelephone: '',
    votreMessage: ''
  });
  setCurrentStep(4);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error message when user starts typing
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };
  const handleBack=()=>{
    setCurrentStep(3);
    navigate("/clientSubCategory");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate inputs
    const errors = {};
    if (!/^[a-zA-Z\s-]+$/.test(formData.nomComplet.trim())) {
      errors.nomComplet = 'Le nom complet doit contenir uniquement des lettres, des espaces ou des tirets.';
    } else if (!/\s/.test(formData.nomComplet.trim())) {
      errors.nomComplet = 'Le nom complet doit inclure à la fois le nom et le prénom.';
    }
    
    if (!formData.numeroTelephone.trim()) {
      errors.numeroTelephone = 'Le numéro de téléphone est obligatoire!';
    } else if (!/^\+\d{1,3}\s?\d{5,14}$/.test(formData.numeroTelephone.trim())) {
          errors.numeroTelephone = 'Le numéro de téléphone doit commencer par le code du pays (ex: +1) suivi du reste du numéro.';
      } 
    
    
    
    if (!/\S/.test(formData.votreMessage)) {
      errors.votreMessage = 'Veuillez entrer un message.';
    }

    // If there are errors, display them and prevent form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      localStorage.setItem('formData', JSON.stringify(formData));
      setFormData({
        nomComplet: '',
        numeroTelephone: '',
        votreMessage: ''
      });
      navigate('/ConfirmationQF');
    }
  };

  return (
    <div className="container-fluid">
      <div className="container-fluid p-4 rounded d-flex justify-content-center align-items-center">
        <div className="col-sm-10 col-md-6 col-lg-4">
          <h1 className='headerQF text-center mb-4'>Questions/réponses</h1>
          <form className="border p-4 rounded border-secondary" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="nomComplet">Nom Complet</label>
              <input
                type="text"
                className={`form-control ${formErrors.nomComplet && 'is-invalid'}`}
                id="nomComplet"
                name="nomComplet"
                value={formData.nomComplet}
                onChange={handleInputChange}
              />
              {formErrors.nomComplet && <div className="invalid-feedback">{formErrors.nomComplet}</div>}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="numeroTelephone">Numéro de téléphone</label>
              <input
                type="text"
                className={`form-control ${formErrors.numeroTelephone && 'is-invalid'}`}
                id="numeroTelephone"
                name="numeroTelephone"
                value={formData.numeroTelephone}
                onChange={handleInputChange}
              />
              {formErrors.numeroTelephone && <div className="invalid-feedback">{formErrors.numeroTelephone}</div>}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="votreMessage">Votre message</label>
              <textarea
                className={`form-control ${formErrors.votreMessage && 'is-invalid'}`}
                id="votreMessage"
                name="votreMessage"
                rows="1"
                style={{ minHeight: '38px' }}
                value={formData.votreMessage}
                onChange={handleInputChange}
              ></textarea>

              {formErrors.votreMessage && <div className="invalid-feedback">{formErrors.votreMessage}</div>}
            </div>
            <div className="text-center m-2">
              <button  onClick={handleBack}className="btn btn-secondary m-2">Retour</button>
              <button type="submit" className="btn btn-primary m-2">Suivant</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
