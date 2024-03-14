import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../Style/style.css";

export default function ClientSubCategory({ setCurrentStep, Client, selectedSubCategory, setSelectedSubCategory }) {
    const selectedCategory = localStorage.getItem('category');

    setCurrentStep(3);
    const navigate = useNavigate();
    const handleChooseSubCategory = (subcategory) => {
        localStorage.setItem('SelectedSubCategory', JSON.stringify(subcategory));
        // setSelectedSubCategory(subcategory);
        setCurrentStep(4);
        if (subcategory === "Start-up") {
            navigate('/startupType');
        } else if (subcategory === "Auto-entrepreneur" || subcategory === "Offline Busines" || subcategory === "Profession libérale") {
            navigate('/sectors');
        } else if (subcategory === "Questions/réponses") {  
            navigate('/questionForm')
        } else {
            navigate('/info');
        }
    };
    const handleGoBack = () => {
        setSelectedSubCategory('');
        setCurrentStep(2);
        navigate('/clientCategory');
    };

    return (
        <div className="container ">
            <h1 className=" text-center ">Which Subcategory describes you?</h1>
            <div className="container  d-flex justify-content-center align-items-center row">
                {Client.map((clientItem, index) => (
                    clientItem.category === selectedCategory && (
                        <div key={index} className="container container-fluid d-flex justify-content-center align-items-center ">
                            {clientItem.subcategory.map((subcategory, subIndex) => (
                                <Card key={subIndex} className="shadow text-center transparent-background">
                                    <Card.Img variant="top" src={subcategory.img} alt={`Image for ${subcategory.title}`} />
                                    <Card.Body>
                                        <Card.Title>{subcategory.title}</Card.Title>
                                        <Button className="custom-button" onClick={() => handleChooseSubCategory(subcategory.title)}>Choisir</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    )
                ))}
            </div>
            <div className="text-center mt-3">
                <Button className="return-button" onClick={handleGoBack}>Retour</Button>
            </div>
        </div>
    );
}
