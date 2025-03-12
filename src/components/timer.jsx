import { useState, useEffect } from "react";
import CircularProgressBar from "./circularprogress";
import "./timer.css";
import "./button.css";

const CoffeeTimer = () => {
  const [currentTimer, setCurrentTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    {
      name: "Add Coffee",
      time: 0,
      description: "Add ground coffee according to the calculator",
    },
    {
      name: "Add Water to start bloom",
      time: 0,
      description: "Add hot water according to the calculator",
    },
    {
      name: "Let it bloom",
      time: 30,
      description: "Let the coffee bloom to bring out the flavors",
    },
    {
      name: "Add rest of water",
      time: 0,
      description: "Add the remaining water",
    },
    { name: "Wait", time: 210, description: "Wait for the coffee to be ready" },
    {
      name: "Skim the top",
      time: 0,
      description: "Remove foam from the top of the cup",
    },
    {
      name: "Press down the plunger",
      time: 0,
      description:
        "Press the plunger down to separate the coffee so that it sits at the top",
    },
    {
      name: "Wait again",
      time: 240,
      description: "Wait for the coffee to settle",
    },
    {
      name: "Pour the coffee",
      time: 0,
      description: "Pour the coffee into the cup",
    },
    { name: "Enjoy", time: 0, description: "Enjoy your coffee" },
  ];

  useEffect(() => {
    setCurrentTimer(steps[step].time);

    if (currentTimer === 0) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }, [step]);

  useEffect(() => {
    let timer;

    if (isRunning && currentTimer > 0) {
      timer = setInterval(() => {
        setCurrentTimer((prev) => {
          if (prev <= 1) {
            if (step < steps.length - 1) {
              console.log("BOING");
            } else {
              setIsRunning(false);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, currentTimer]);

  const resetTimer = () => {
    setStep(0);
  };

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className='timer-box'>
      <CircularProgressBar current={currentTimer} max={steps[step].time} />
      <div>
        <h2>{steps[step].name}</h2>
        <p>{steps[step].description}</p>
      </div>

      <div className='controls'>
        <button className='styledBtn' onClick={prevStep}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='4'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <polyline points='15 18 9 12 15 6'></polyline>
          </svg>
        </button>
        <button
          className='styledBtn largeBtn'
          onClick={toggleTimer}
          style={{ fontSize: "1.5rem" }}
          disabled={currentTimer === 0}>
          {isRunning ? "Pause" : "Go"}
        </button>
        <button className='styledBtn' onClick={nextStep}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='4'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <polyline points='9 18 15 12 9 6'></polyline>
          </svg>
        </button>
      </div>

      <div className='steps'>
        {steps.map((s, i) => (
          <div
            key={i}
            onClick={() => setStep(i)}
            className={`step ${
              i <= step ? "step-done" : "step-not-done"
            }`}></div>
        ))}
      </div>
      <button className='resetBtn' onClick={resetTimer}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='4'
          stroke-linecap='round'
          stroke-linejoin='round'>
          <polyline points='23 4 23 10 17 10'></polyline>
          <polyline points='1 20 1 14 7 14'></polyline>
          <path d='M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15'></path>
        </svg>
      </button>
    </div>
  );
};

export default CoffeeTimer;
