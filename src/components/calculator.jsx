import { useState } from "react";
import "./calculator.css";

const CoffeeCalculator = () => {
  const [numberOfCups, setNumberOfCups] = useState(1);
  const [coffeeWeight, setCoffeeWeight] = useState(8);
  const [waterVolume, setWaterVolume] = useState(250);

  const totalWaterVolume = numberOfCups * waterVolume;
  const totalCoffeeWeight = numberOfCups * coffeeWeight;

  return (
    <div className='calculator-box'>
      <div className='calculator-row'>
        <input
          type='number'
          min='1'
          max='20'
          value={numberOfCups}
          onChange={(e) => setNumberOfCups(e.target.value)}
        />
        <p>cups</p>
      </div>
      <div className='calculator-row'>
        <input
          type='number'
          min='1'
          max='18'
          value={coffeeWeight}
          onChange={(e) => setCoffeeWeight(e.target.value)}
        />
        <p>g/cup</p>
      </div>
      <div className='calculator-row'>
        <input
          type='number'
          min='100'
          max='400'
          value={waterVolume}
          onChange={(e) => setWaterVolume(e.target.value)}
        />
        <p>ml/cup</p>
      </div>
      <p>
        {numberOfCups} cups of {coffeeWeight} g of {waterVolume} ml of water
      </p>
      <p>
        Total water volume: {totalWaterVolume} ml Total coffee weight:{" "}
        {totalCoffeeWeight} g
      </p>
    </div>
  );
};

export default CoffeeCalculator;
