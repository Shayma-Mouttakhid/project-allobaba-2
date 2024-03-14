import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Sectors({ setSelectedSectors, setCurrentStep }) {
    setCurrentStep(4);
    const navigate = useNavigate();
    const storedClient = JSON.parse(localStorage.getItem('Client'));
    const selectedSubCategory = JSON.parse(localStorage.getItem('SelectedSubCategory'));
    
    console.log('selectedSubCategory:', selectedSubCategory); // Debugging
    console.log('storedClient:', storedClient); // Debugging

    const handleGoBack = () => {
        setSelectedSectors('');
        setCurrentStep(3);
        navigate('/clientSubCategory');
    };

    return (
        <div className="container text-center">
            <h1>Quel est votre secteur d'activités? </h1>
            {storedClient && storedClient.map(client => (
                client.subcategory.map(subcategory => (
                    subcategory.title === selectedSubCategory && (
                        <div key={subcategory.title}>
                            <select>
                                {subcategory.secteurs.map((sector, i) => (
                                    <option key={i}>{sector}</option>
                                ))}
                            </select>
                        </div>
                    )
                ))
            ))}
            <div className="text-center mt-3">
                <Button className="return-button" onClick={handleGoBack}>Retour</Button>
            </div>
        </div>
    );
}
