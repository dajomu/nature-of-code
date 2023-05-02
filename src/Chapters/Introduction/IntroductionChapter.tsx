import React from 'react';
import PerlinNoiseCloud from './PerlinNoiseCloud';
import PerlinLandscape from './PerlinLandscape';
import PerlinRandomWalk from './PerlinRandomWalk';
import RandomWalk from './RandomWalk';
import RandomNumberDistribution from './RandomNumberDistribution';
import GaussianDistribution from './GaussianDistribution';

function IntroductionChapter() {
  return (
    <div>
      <PerlinLandscape />
      {/* <PerlinNoiseCloud />
      <PerlinRandomWalk />
      <RandomWalk />
      <GaussianDistribution />
      <RandomNumberDistribution randomType={'montecarlo'} /> */}
    </div>
  );
}

export default IntroductionChapter;
