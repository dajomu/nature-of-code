import React from 'react';
import PerlinRandomWalk from './PerlinRandomWalk';
import RandomWalk from './RandomWalk';
import RandomNumberDistribution from './RandomNumberDistribution';
import GaussianDistribution from './GaussianDistribution';

function IntroductionChapter() {
  return (
    <div>
      <PerlinRandomWalk />
      <RandomWalk />
      <GaussianDistribution />
      <RandomNumberDistribution randomType={'montecarlo'} />
    </div>
  );
}

export default IntroductionChapter;
