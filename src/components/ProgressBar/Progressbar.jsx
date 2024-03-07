import React from "react";
import "./Progressbar.css";

const Progressbar = ({ currentStep }) => {
  const steps = [
    "select Service",
    "Type Client",
    "Catégorie Client",
    "Infos Personnels",
    "Confirmation"
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item position-relative d-flex flex-column justify-content-center align-items-center col-md-auto ${currentStep===i+1 && "active"} ${i+1<currentStep && "complete"}`}
          >
            <div className="step">
              {i + 1}
            </div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progressbar;
