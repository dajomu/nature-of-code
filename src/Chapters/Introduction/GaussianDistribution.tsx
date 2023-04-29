import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface ComponentProps {
  // Your component props
}
  
const GaussianDistribution: React.FC<ComponentProps> = (props: ComponentProps) => {

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    const randomNumber = Math.floor(p5.randomGaussian(p5.width / 2, p5.width / 10));
    console.log(randomNumber);
    p5.noStroke();
    p5.fill(0, 10);
    p5.ellipse(randomNumber, p5.height / 2, 16, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default GaussianDistribution;