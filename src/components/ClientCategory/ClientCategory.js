import { Card, Button} from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom/dist';
import "./ClientCategory.css";

const ClientCategory = ({ setCurrentStep }) => {
    setCurrentStep(2)
    const navigate = useNavigate();
    const Client = JSON.parse(localStorage.getItem('StoredClient'));

    const handleChooseCategory = (category) => {
        localStorage.setItem('selectedCategory', category);
        setCurrentStep(3);
        navigate('/clientSubCategory');
    };

    const handleGoBack = () => {
        localStorage.setItem('category', '');
        setCurrentStep(1);
        navigate('/');
    };

    return (
        <div className="container">
            <h1 className=" text-center ">Quelle est votre catégorie ?</h1>
            <div className="container   d-flex justify-content-center align-items-center row p-10">
                {Client.map((c, index) => (
                    <div key={index} className="col-md-4 mb-4 ">
                        <Card className="shadow text-center ">
                            <Card.Img variant="top" src={c.img} alt={`Image for ${c.category}`} />
                            <Card.Body>
                                <Card.Title>{c.category}</Card.Title>
                                <Button className="custom-button" onClick={() => handleChooseCategory(c.category)}>Choisir</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <Button className="return-button" onClick={handleGoBack}>Retour</Button>
            </div>
        </div>
    );
};

export default ClientCategory;
