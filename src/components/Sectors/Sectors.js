import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Sectors({ setCurrentStep }) {
    setCurrentStep(4);
    const navigate = useNavigate();
    const storedClient = JSON.parse(localStorage.getItem('Client'));
    const selectedSubCategory = JSON.parse(localStorage.getItem('SelectedSubCategory'));

    const [selectedSector, setSelectedSector] = useState('');

    const handleSectorChange = (event) => {
        const selectedSector = event.target.value;
        setSelectedSector(selectedSector);
        localStorage.setItem('SelectedSector', selectedSector);
    };

    const handleGoBack = () => {
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
                            <select value={selectedSector} onChange={handleSectorChange}>
                                <option value="">Sélectionner un secteur</option>
                                {subcategory.secteurs.map((sector, i) => (
                                    <option key={i} value={sector}>{sector}</option>
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
