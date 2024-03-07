import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/services/Services';
import Progressbar from './components/ProgressBar/Progressbar';
import ClientCategory from './components/ClientCategory/ClientCategory';
import { Route, Routes, Router } from 'react-router-dom/dist';
import ClientSousCategory from './components/ClientSousCategory/ClientSousCategory';

function App() {
//   const ClientCategories = [
//     { "title": "Particulier", "img": "/images/Particulier1.jpg" },
//     { "title": "Entreprise", "img": "/images/Entreprise.jpg" },
//     { "title": "Association/NGO", "img": "/images/Association.jpg" }
// ];
const Client =[
  {"category":"Particulier","souscategory":[{"title":"Auto-entrepreneur","img": "/images/Auto-entrepreneur.png"},{"title":"Profession libérale","img": "/images/PL.png"},{"title":"Offline Busines","img": "/images/Offline business.png"}],"img": "/images/Particulier1.jpg"},
  {"category":"Entreprise","souscategory":[{"title":"Start-up","img": "/images/startup.png"},{"title":"TPE-PME","img": "/images/tpe-pme.png"},{"title":"Grande Entreprise/Multi-nationale","img": "/images/ge2.png"}],"img": "/images/Particulier1.jpg"},
  {"category":"Association/NGO","souscategory":[{"title":"Prestation","img": "/images/prestation.png"},{"title":"Questions/réponses","img": "/images/qr.png"}],"img": "/images/Particulier1.jpg"}
]
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="App">
      <Progressbar currentStep={currentStep}  />
      <ClientSousCategory setCurrentStep={setCurrentStep}  Client={Client}/>
      {/* <ClientCategory  setCurrentStep={setCurrentStep}  Client={Client}/> */}
    {/* <Router>
      <Routes>
        <Route path="/clientCategorie" element={<ClientCategory  setCurrentStep={setCurrentStep}/>} />
        <Route path="/" element={<Service setCurrentStep={setCurrentStep}/>} />
      </Routes>
    </Router> */}
      
    </div>
  );
}

export default App;


