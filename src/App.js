import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/services/Services';
import Progressbar from './components/ProgressBar/Progressbar';
import ClientCategory from './components/ClientCategory/ClientCategory';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientSubCategory from './components/ClientSubCategory/ClientSubCategory';
import StartupType from './components/StartupType/StartupType';
import Sectors from './components/Sectors/Sectors';
import QuestionForm from './components/QuestionForm/QuestionForm';
function App() {
  
const Client =[
  {"category":"Particulier","subcategory":[{"title":"Auto-entrepreneur","img": "/images/Auto-entrepreneur.png", "secteurs" : ["Services de conseil en marketing","Services de design graphique","Services de photographie","Services de développement web","Services de formation","Services de coaching","Services de jardinage","Services de réparation et de maintenance"]},{"title":"Profession libérale","img": "/images/PL.png","secteurs":["Services informatiques","Services techniques","Services éducatifs","Services artistiques","Services de santé mentale","Services médicaux et paramédicaux","Services de conseil","Services comptables et fiscaux","Services juridiques"]},{"title":"Offline Busines","img": "/images/Offline business.png","secteurs" : ["Restauration","Bâtiment","Transport","Santé","Éducation","Tourisme","Beauté","Artisanat","Sécurité","Recyclage"]}],"img": "/images/Particulier1.jpg"},
  {"category":"Entreprise","subcategory":[{"title":"Start-up","type":["Startups sociales","E-Commerce","Technologie Financière","Technologie de la santé","SaaS","Biotechnologie","Education"],"img": "/images/startup.png"},{"title":"TPE-PME","img": "/images/tpe-pme.png"},{"title":"Grande Entreprise/Multi-nationale","img": "/images/ge2.png"}],"img": "/images/Entreprise.jpg"},
  {"category":"Association/NGO","subcategory":[{"title":"Prestation","img": "/images/prestation.png"},{"title":"Questions/réponses","img": "/images/qr.png"}],"img": "/images/association.jpg"}
]
// Stockage dans le local storage
localStorage.setItem('Client', JSON.stringify(Client));

const [selectedCategory, setSelectedCategory] = useState('');
const [selectedSubCategory, setSelectedSubCategory] = useState('');
const [currentStep, setCurrentStep] = useState(1);
const [startupType, setStartupType]= useState('');
const [selectedSectors, setSelectedSectors]= useState('');
return (
    <div className="App">
      <Progressbar currentStep={currentStep}  />
     <Router>
      <Routes>
        <Route path="/" element={<Service setCurrentStep={setCurrentStep}/>} />
        <Route path="/clientCategory" element={<ClientCategory Client={Client} setCurrentStep={setCurrentStep} setSelectedCategory={setSelectedCategory}/>} />
        <Route path="/clientSubCategory" element={<ClientSubCategory Client={Client} setCurrentStep={setCurrentStep}  setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} setSelectedSubCategory={setSelectedSubCategory}  />} />
        <Route path="/startupType" element={<StartupType Client={Client} setCurrentStep={setCurrentStep}  selectedSubCategory={selectedSubCategory} setStartupType={setStartupType} startupType={startupType}/>} />
        <Route path="/sectors" element={<Sectors Client={Client} setCurrentStep={setCurrentStep}  selectedSubCategory={selectedSubCategory} setSelectedSectors={setSelectedSectors} selectedSectors={selectedSectors}/>} />
        <Route path="questionForm" element={<QuestionForm />} />
      
      </Routes>
    </Router> 
    </div>
  );
}

export default App;


