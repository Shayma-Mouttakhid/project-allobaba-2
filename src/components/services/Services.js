import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/style.css";
import { useNavigate } from "react-router-dom";

export default function Services({ setCurrentStep, setService }) {
  const Services = [
    { id: 1, name: "Marketing Digitale", img: "/images/marketing.jpg" },
    { id: 2, name: "Développement web/mobile", img: "/images/web.jpg" },
    { id: 3, name: "Audio-visuel", img: "/images/audiov.jpg" },
    { id: 4, name: "Design/Infographie", img: "/images/design.jpg" },
    { id: 5, name: "Montage des vidéos", img: "/images/montage.jpg" },
    { id: 6, name: "Formation/Coaching", img: "/images/coaching.jpg" }
  ];

  useEffect(() => {
    setCurrentStep(1);
  }, []);

  const navigate = useNavigate();
  const handleSave = (name) => {
    setCurrentStep(2);
    navigate("/clientCategory");
    localStorage.setItem("selectedService", name);
    setService(name);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 0,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true, // Autoplay slides
    autoplaySpeed: 1500, // Delay between slides in milliseconds
    arrows: false, // Show navigation arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0,
          centerMode: true,
          focusOnSelect: true
        }
      }
    ]
  };


  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark m-5">Our Services</h1>
      <Slider {...settings}>
        {Services.map((service) => (
          <div key={service.id} className="col-md-4 mb-4 m-10 ">
            <div className="card" style={{ backgroundImage: `url(${service.img})` }}>
              <div className="card-overlay">
                <h2 className="card-title">{service.name}</h2>
                <button onClick={() => handleSave(service.name)} className="btn">
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
