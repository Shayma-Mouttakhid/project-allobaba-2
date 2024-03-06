import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/services/Services';
import Progressbar from './components/ProgressBar/Progressbar';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <div className="App">
      <Progressbar currentStep={currentStep} complete={complete}/>
      <Service setCurrentStep={setCurrentStep} setComplete={setComplete}/>
    </div>
  );
}

export default App;
