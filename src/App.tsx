import React from 'react';
import './App.css';
import RandomWalk from './Chapters/Introduction/RandomWalk';
import RandomNumberDistribution from './Chapters/Introduction/RandomNumberDistribution';
import GaussianDistribution from './Chapters/Introduction/GaussianDistribution';

function App() {
  return (
    <div className="App">
      <GaussianDistribution />
      <RandomWalk />
      <RandomNumberDistribution />
    </div>
  );
}

export default App;
