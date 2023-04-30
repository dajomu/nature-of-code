import React from 'react';
import './App.css';
import IntroductionChapter from './Chapters/Introduction/IntroductionChapter';
import RandomNumberDistribution from './Chapters/Introduction/RandomNumberDistribution';
import GaussianDistribution from './Chapters/Introduction/GaussianDistribution';

function App() {
  return (
    <div className="App">
      <IntroductionChapter />
    </div>
  );
}

export default App;
