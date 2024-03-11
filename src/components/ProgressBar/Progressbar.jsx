import React from "react";
import "./Progressbar.css";

const Progressbar = ({ currentStep }) => {
  const steps = [
    {id:1,step:"select Service"},
    {id:2,step:"Catégorie Client"},
    {id:3,step:"type client"},
    {id:4,step:"Infos Personnels"},
    {id:5,step:"Confirmation"},
    
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {steps?.map((step) => (
          <div
            key={step.id}

            className={`step-item position-relative d-flex flex-column justify-content-center align-items-center col-md-auto ${
              currentStep === step.id  && "active"
            } ${(step.id < currentStep) && "complete"}`}

          >
           
            <div className="step">
              {step.id}
            </div>
            <p>{step.step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressbar;
