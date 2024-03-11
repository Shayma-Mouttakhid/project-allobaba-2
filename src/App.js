import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientSousCategory from './components/ClientSousCategory/ClientSousCategory';
import Progressbar from './components/ProgressBar/Progressbar';
import ClientCategory from './components/ClientCategory/ClientCategory';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './components/services/Services';

function App() {
    const Client = [
      { "category": "Particulier", "souscategory": [{ "title": "Auto-entrepreneur", "img": "/images/Auto-entrepreneur.png" }, { "title": "Profession libérale", "img": "/images/PL.png" }, { "title": "Offline Busines", "img": "/images/Offline business.png" }], "img": "/images/Particulier1.jpg" },
      { "category": "Entreprise", "souscategory": [{ "title": "Start-up", "img": "/images/startup.png" }, { "title": "TPE-PME", "img": "/images/tpe-pme.png" }, { "title": "Grande Entreprise/Multi-nationale", "img": "/images/ge2.png" }], "img": "/images/Particulier1.jpg" },
      { "category": "Association/NGO", "souscategory": [{ "title": "Prestation", "img": "/images/prestation.png" }, { "title": "Questions/réponses", "img": "/images/qr.png" }], "img": "/images/Particulier1.jpg" }
    ];
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const storedStep = localStorage.getItem('currentStep');
    if (storedStep) {
      setCurrentStep(parseInt(storedStep, 10));
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Progressbar currentStep={currentStep} />
        <Routes>
          <Route path="/" element={<Services setCurrentStep={setCurrentStep} />} />
          <Route path="/clientCategorie" element={<ClientCategory setCurrentStep={setCurrentStep} Client={Client} />} />
          <Route path="/ClientSousCategory" element={<ClientSousCategory setCurrentStep={setCurrentStep} Client={Client} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
