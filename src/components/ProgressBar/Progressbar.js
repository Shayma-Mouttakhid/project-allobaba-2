import React from "react";
// import { Link } from "react-router-dom";
import "./Progressbar.css";

const Progressbar = ({ currentStep, setCurrentStep }) => {
  const steps = [
    { id: 1, step: "Service", path: "/" },
    { id: 2, step: "Catégorie", path: "/clientCategory" },
    { id: 3, step: "Sous Catégorie", path: "/clientSubCategory" },
    { id: 4, step: "Infos Personnels", path: "/Infos" },
    { id: 5, step: "Confirmation", path: "/Confirmation" },
  ];

  // const handleStepClick = (stepId) => {
  //   setCurrentStep(stepId);
  // };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {steps?.map((step) => (
          <div
            key={step.id}
            className={`step-item position-relative d-flex flex-column justify-content-center align-items-center col-md-auto ${
              currentStep === step.id && "active"
            } ${(step.id < currentStep) && "complete"}`}
            // onClick={() => handleStepClick(step.id)}
          >
            <div className="step">{step.id}</div>
            <p>{step.step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressbar;
