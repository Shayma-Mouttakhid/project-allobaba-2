import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./style.css";

export default function ClientSubCategory({ setCurrentStep, Client, setSelectedSubCategory, selectedCategory}) {
    setCurrentStep(3);
    const navigate = useNavigate();

    const handleChooseSubCategory = (subcategory) => {
        setSelectedSubCategory(subcategory);
        setCurrentStep(4);
        navigate('/');
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
                                         <button className="custom-button" onClick={() => handleChooseSubCategory(subcategory.title)}>Choisir</button>
                                     </Card.Body>
                                 </Card>
                             ))}
                         </div>
                     )
                 ))}
             </div>
             <div className="text-center mt-3">
                 <button className="return-button" onClick={handleGoBack}>Retour</button>
             </div>
         </div>

      
    );
}
