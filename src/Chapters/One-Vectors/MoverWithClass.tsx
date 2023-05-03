import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import Mover from './Mover';

interface ComponentProps {
  // Your component props
}
  
const MoverWithClass: React.FC<ComponentProps> = (props: ComponentProps) => {

  const mover = new Mover(500, 500, "PERLIN");

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(255);
    mover.checkEdges(p5);
    mover.update(p5);
    mover.display(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default MoverWithClass;