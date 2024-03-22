import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ClientSubCategory.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/style.css";

export default function ClientSubCategory({ setCurrentStep }) {
    useEffect(() => {
        setCurrentStep(3);
    }, [setCurrentStep]);

    const selectedCategory = localStorage.getItem('selectedCategory');
    const Client = JSON.parse(localStorage.getItem('StoredClient'));
    const navigate = useNavigate();

    const handleChooseSubCategory = (subcategory) => {
        localStorage.setItem('SelectedSubCategory', JSON.stringify(subcategory));
        setCurrentStep(4);
        if (subcategory === "Start-up") {
            navigate('/startupType');
        } else if (subcategory === "Auto-entrepreneur" || subcategory === "Offline Busines" || subcategory === "Profession libérale") {
            navigate('/sectors');
        } else if (subcategory === "Questions/réponses") {
            navigate('/questionForm');
        } else {
            navigate('/Infos');
        }
    };

    const handleGoBack = () => {
        setCurrentStep(2);
        navigate('/clientCategory');
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    };

    return (
        <div className="container-fluid">
            <h1 className="text-center text-dark m-5">Quelle est votre sous catégorie?</h1>
            {Client && Client.map((clientItem, index) => (
                clientItem.category === selectedCategory && (
                    <div key={index} className="row justify-content-center">
                        {clientItem.subcategory.map((subcategory, subIndex) => (
                            <div key={subIndex} className="col-md-3 mb-4">
                                <div className="card" style={{ backgroundImage: `url(${subcategory.img})` }}>
                                    <div className="card-overlay">
                                        <h2 className="card-title">{subcategory.title}</h2>
                                        <button className="btn" onClick={() => handleChooseSubCategory(subcategory.title)}>Choisir</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            ))}
            <div className="text-center">
                <button className="return-button" onClick={handleGoBack}>Retour</button>
            </div>
        </div>
    );
}
