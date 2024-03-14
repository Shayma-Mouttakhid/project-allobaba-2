import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function StartupType({ Client, selectedSubCategory, setStartupType, startupType, setCurrentStep }) {
    setCurrentStep(4);
    const navigate = useNavigate();

    const handleGoBack = () => {
        setStartupType('');
        setCurrentStep(3);
        navigate('/clientSubCategory');
    };

    return (
        <div className="container text-center ">
            <div className="container text-center d-flex justify-content-center align-items-center row">
            <h1>Quel est le type de votre Start-up?</h1>
                {Client.map((clientItem, index) => (
                    clientItem.subcategory.find(sub => sub.title === "Start-up") && (
                        <select>
                            {clientItem.subcategory
                                .filter(sub => sub.title === "Start-up")[0]
                                .type.map((t, i) => (
                                    <option key={i}>{t}</option>
                                ))}
                        </select>
                    )
                ))}
            </div>
            <div className="text-center mt-3">
                <Button className="return-button" onClick={handleGoBack}>Retour</Button>
            </div>
        </div>
    )
}
