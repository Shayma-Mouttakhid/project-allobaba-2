// Services.js
import React from "react";
import "./Services.css";
export default function Services({ setCurrentStep}) {
  const Services = [
    { id: 1, name: "Marketing Digitale", img: "/images/marketing.jpg" },
    { id: 2, name: "Développement web/mobile", img: "/images/web.jpg" },
    { id: 3, name: "Audio-visuel", img: "/images/audiov.jpg" },
    { id: 4, name: "Design/Infographie", img: "/images/design.jpg" },
    { id: 5, name: "Montage des vidéos", img: "./images/montage.jpg" },
    { id: 6, name: "Formation/Coaching", img: "./images/coaching.jpg" }
  ];

  const handleSave = () => {
    setCurrentStep(2);
    
  };

  return (
    <div className="container">
      <h1 className="text-center m-5">Our Services</h1>
      <div className="row">
        {Services.map((service) => (
          <div key={service.id} className="col-md-4 mb-4">
            <div className="card">
              <img className="card-img-top" src={service.img} alt={service.name} />
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p className="card-text">{service.desc}</p>
                <button onClick={handleSave} className="btn">Save</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
