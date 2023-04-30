import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

import PerlinWalker from './PerlinWalker';

interface ComponentProps {
  // Your component props
}
  
const PerlinRandomWalk: React.FC<ComponentProps> = (props: ComponentProps) => {

  const walker = new PerlinWalker(500, 500);

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.frameRate(10);
  };

  const draw = (p5: p5Types) => {
    walker.step(p5);
    walker.display(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default PerlinRandomWalk;