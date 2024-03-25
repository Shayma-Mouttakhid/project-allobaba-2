import React from "react";
// import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import "./Progressbar.css";

const Progressbar = ({ currentStep, setCurrentStep, complete }) => {
  const steps = [
    // { step: "Service" },
    // { step: "Catégorie" },
    // { step: "Sous Catégorie" },
    // { step: "Formulaire" },
    // { step: "Confirmation" },
    1,
    2,
    3,
    4, 5
  ];

  // const handleStepClick = (stepId) => {
  //   setCurrentStep(stepId);
  // };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {steps?.map((step) => (
          <div key={step}
            //  key={i} 
            className={`step-item  ${currentStep === step && "active"} ${(step < currentStep || complete) && "complete"
              } `}
          >
            <div className="step"> {step < currentStep || complete ? <TiTick size={30} /> : step}
            </div>
            {/* <p>{step.step}</p> */}
          </div>
        ))}</div>
    </div>
  );
};

export default Progressbar;
