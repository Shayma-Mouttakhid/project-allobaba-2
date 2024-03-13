import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/services/Services';
import Infos from './components/infosform/Infosform';
import Progressbar from './components/ProgressBar/Progressbar';
import Confirmation from './components/Confirmation/Confirmation';
import ClientCategory from './components/Clientcategory/ClientCategory';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientSubCategory from './components/ClientSousCategory/ClientSubCategory';
import Activity from './components/Activity';
function App() {
  
const Client =[
  {"category":"Particulier","subcategory":[{"title":"Auto-entrepreneur","img": "/images/Auto-entrepreneur.png"},{"title":"Profession libérale","img": "/images/PL.png"},{"title":"Offline Busines","img": "/images/Offline business.png"}],"img": "/images/Particulier1.jpg"},
  {"category":"Entreprise","subcategory":[{"title":"Start-up","img": "/images/startup.png"},{"title":"TPE-PME","img": "/images/tpe-pme.png"},{"title":"Grande Entreprise/Multi-nationale","img": "/images/ge2.png"}],"img": "/images/Entreprise.jpg"},
  {"category":"Association/NGO","subcategory":[{"title":"Prestation","img": "/images/prestation.png"},{"title":"Questions/réponses","img": "/images/qr.png"}],"img": "/images/association.jpg"}
]
const [Form, setForm] = useState({ name: "", lastName: "", Email: "", telephone: "" });
const [selectedCategory, setSelectedCategory] = useState('');
const [selectedSubCategory, setSelectedSubCategory] = useState('');
const [service,setService]=useState("")
const [currentStep, setCurrentStep] = useState(1);
const [activity, setActivity]= useState('');
  return (
    <div className="App">
      <Progressbar  setCurrentStep={setCurrentStep} currentStep={currentStep}  />
     <Router>
      <Routes>
        <Route path="/" element={<Service setCurrentStep={setCurrentStep} setService={setService}/>} />
        <Route path="/clientCategory" element={<ClientCategory Client={Client} setCurrentStep={setCurrentStep} setSelectedCategory={setSelectedCategory}/>} />
        <Route path="/clientSubCategory" element={<ClientSubCategory Client={Client} setCurrentStep={setCurrentStep} selectedCategory={selectedCategory} setSelectedSubCategory={setSelectedSubCategory} />} />
        <Route path="/Confirmation" element={<Confirmation setCurrentStep={setCurrentStep} Form={Form} selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} Service={service}/>}/>
        <Route path="/activity" element={<Activity Client={Client} setCurrentStep={setCurrentStep}  selectedSubCategory={selectedSubCategory} setActivity={setActivity} activity={activity}/>} />
        <Route  path="/Infos" element={<Infos  Form={Form} setCurrentStep={setCurrentStep} setForm={setForm} />}/>
      </Routes>
    </Router> 
    </div>
  )
}

export default App;
