import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./QuestionForm.css";
// import emailjs from "@emailjs/browser";
//  import "../Style/style.css";
// import "./QuestionForm.css";

function QuestionForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomComplet: '',
    numeroTelephone: '',
    votreMessage: ''
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // //the Email details 
    // const Serviceid = "service_w0m2tmi";
    // const Templateid = "template_xvdjszo";
    // const publicKey = "AL-p2PQ2haf2rWheB";
    // // create a new object that contains the dynamic  template params 
    // const tamplateparams = {
    //   Nom_Complete: formData.nomComplet,
    //   Telephone: formData.numeroTelephone,
    //   message: formData.votreMessage,
    //   to_name: "Allo Baba Agence"
    // }
    // //send this infos to the email 
    // emailjs.send(Serviceid, Templateid, tamplateparams, publicKey).then((res) => {
    //   console.log("email sent successfully ", res);

    // }).catch((error) => {
    //   console.log("error sending email: ", error);
    // })

    // Validate inputs
    const errors = {};
    if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(formData.nomComplet)) {
      errors.nomComplet = 'Nom complet doit contenir uniquement des lettres.';
    }
    if (!/^\d+$/.test(formData.numeroTelephone)) {
      errors.numeroTelephone = 'Numéro de téléphone ne doit contenir que des chiffres.';
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
      console.log(formData);
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
              <button type="reset" className="btn btn-secondary m-2">Effacer</button>
              <button type="submit" className="btn btn-primary m-2">Suivant</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default QuestionForm;
