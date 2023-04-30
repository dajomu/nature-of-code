import React from 'react';
import RandomWalk from './RandomWalk';
import RandomNumberDistribution from './RandomNumberDistribution';
import GaussianDistribution from './GaussianDistribution';

function IntroductionChapter() {
  return (
    <div>
      <RandomWalk />
      <GaussianDistribution />
      <RandomNumberDistribution randomType={'montecarlo'} />
    </div>
  );
}

export default IntroductionChapter;
