import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ClientCategory = ({ setCurrentStep, Client }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
        const handleChooseCategory = (category) => {
        setSelectedCategory(category);
    };

    const handleGoBack = () => {
        setSelectedCategory('');
        setCurrentStep(1);
    };

    return (
        <div className="container vh-100 ">
            <div className="container d-flex justify-content-center align-items-center row pt-20">
                {Client.map((c, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <Card className="shadow text-center">
                            <Card.Img variant="top" src={c.img} alt={`Image for ${c.category}`} />
                            <Card.Body>
                                <Card.Title>{c.category}</Card.Title>
                                <Button variant="orange" onClick={() => handleChooseCategory(c.category)}>Choisir</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <Button className="btn btn-orange btn-rounded" onClick={handleGoBack}>Retour</Button>
            </div>
        </div>
    );
};

export default ClientCategory;
