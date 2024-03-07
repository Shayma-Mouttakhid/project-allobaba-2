import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/services/Services';
import Progressbar from './components/ProgressBar/Progressbar';
function App() {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <div className="App">
      <Progressbar currentStep={currentStep} />
      <Service setCurrentStep={setCurrentStep} />
    </div>
  );
}

export default App;
