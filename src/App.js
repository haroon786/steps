import React, { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //const step = 2;

  function handlePrevious() {
    // always update current state like this
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  return (
    <React.Fragment>
      <button className="cloase" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              color="white"
              onClick={handlePrevious}
              text="Previous"
            >
              <span>👈 Previous</span>
            </Button>
            <Button
              backgroundColor="#7950f2"
              color="white"
              onClick={handleNext}
            >
              <span>👉 Next</span>
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function Button({ backgroundColor, color, children, onClick }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
