import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import {montecarlo, montecarloSquared} from './utils';

interface ComponentProps {
  // Your component props
  randomType?: 'gaussian' | 'montecarlo' | 'random'
}
  
const RandomNumberDistribution: React.FC<ComponentProps> = (props: ComponentProps) => {

    const randomCounts = Array(20).fill(0);

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(640, 240).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(255);
    let index = Math.floor(Math.random() * randomCounts.length);
    if (props.randomType === 'gaussian') {
        index = Math.floor(p5.randomGaussian(randomCounts.length / 2, randomCounts.length / 8));
    } else if(props.randomType === 'montecarlo') {
        index = Math.floor(montecarloSquared() * randomCounts.length);
    }
    if(index < 20) {
        randomCounts[index]++;
    }
    p5.stroke(0);
    p5.fill(175);
    const w = p5.width/randomCounts.length;
    randomCounts.forEach((count, index) => {
        p5.rect(index*w, p5.height - count, w - 1, count);
    })
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default RandomNumberDistribution;