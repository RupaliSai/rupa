import React from 'react';
import Header from './components/Header';
import TollCalculator from './components/TollCalculator';
import Map from './components/Map';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TollCalculator />
      <Map />
    </div>
  );
}

export default App;
