import React, { useState } from 'react';

function TollCalculator() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [tollCost, setTollCost] = useState(0);

  const calculateToll = () => {
    // Add your toll calculation logic here
    // You may fetch data from an external API like TollGuru
    // For simplicity, let's assume toll cost is $10
    setTollCost(10);
  };

  return (
    <div>
      <label>Start Location:</label>
      <input type="text" value={startLocation} onChange={(e) => setStartLocation(e.target.value)} />

      <label>End Location:</label>
      <input type="text" value={endLocation} onChange={(e) => setEndLocation(e.target.value)} />

      <button onClick={calculateToll}>Calculate Toll</button>

      {tollCost > 0 && <p>Toll Cost: ${tollCost}</p>}
    </div>
  );
}

export default TollCalculator;
