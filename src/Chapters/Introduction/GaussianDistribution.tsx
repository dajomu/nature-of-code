import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface ComponentProps {
  // Your component props
}

const colourMode = true;
  
const GaussianDistribution: React.FC<ComponentProps> = (props: ComponentProps) => {

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    const randomX = Math.floor(p5.randomGaussian(p5.width / 2, p5.width / 10));
    const randomY = Math.floor(p5.randomGaussian(p5.height / 2, p5.height / 10));
    p5.noStroke();
    if(colourMode) {
        p5.colorMode(p5.HSB);
        p5.fill(randomX, randomY * 100 / p5.height, 100, 10);
    } else {
        p5.fill(0, 10);
    }
    p5.ellipse(randomX, randomY, 16, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default GaussianDistribution;