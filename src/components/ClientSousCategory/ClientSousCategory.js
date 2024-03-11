import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ClientSousCategory({ setCurrentStep, Client }) {
    const [selectedSousCategory, setSelectedSousCategory] = useState('');
    const Navigate=useNavigate()
    
    const handleChooseSousCategory = (souscategory) => {
        setSelectedSousCategory(souscategory);
        setCurrentStep(4)
        
    };

    const handleGoBack = () => {
        setSelectedSousCategory('');
        Navigate("-1")
    };

    return (
        <div className="container vh-100">
            <div className="container d-flex justify-content-center align-items-center row">
                {Client.map((category, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        {category.souscategory.map((souscategory, subIndex) => (
                            <Card key={subIndex} className="shadow text-center">
                                <Card.Img variant="top" src={souscategory.img} alt={`Image for ${souscategory.title}`} />
                                <Card.Body>
                                    <Card.Title>{souscategory.title}</Card.Title>
                                    <Button variant="orange" onClick={() => handleChooseSousCategory(souscategory.title)}>Choisir</Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <Button className="btn btn-orange btn-rounded" onClick={handleGoBack}>Retour</Button>
            </div>
        </div>
    );
}
