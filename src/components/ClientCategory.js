import React from 'react';
import { Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom/dist';

const ClientCategory = ({ setCurrentStep, Client, setSelectedCategory }) => {
    setCurrentStep(2);
    const navigate = useNavigate();

    const handleChooseCategory = (category) => {
        setSelectedCategory(category);
        setCurrentStep(3);
        navigate('/clientSubCategory');
    };

    const handleGoBack = () => {
        setSelectedCategory('');
        setCurrentStep(1);
        navigate('/');
    };

    return (
        <div className="container">
            <h1 className=" text-center ">Which category are you?</h1>
            <div className="container   d-flex justify-content-center align-items-center row p-10">
                {Client.map((c, index) => (
                    <div key={index} className="col-md-4 mb-4 ">
                        <Card className="shadow text-center ">
                            <Card.Img variant="top" src={c.img} alt={`Image for ${c.category}`} />
                            <Card.Body>
                                <Card.Title>{c.category}</Card.Title>
                                <button className="custom-button" onClick={() => handleChooseCategory(c.category)}>Choisir</button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <button className="return-button" onClick={handleGoBack}>Retour</button>
            </div>
        </div>
    );
};

export default ClientCategory;
