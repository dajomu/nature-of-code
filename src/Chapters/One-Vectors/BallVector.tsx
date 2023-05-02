import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import PVector from "./PVector";

interface ComponentProps {
  // Your component props
}

const widthandHeight = 500;
  
const BallVector: React.FC<ComponentProps> = (props: ComponentProps) => {
  const position = new PVector(1,1);
  const veolicty = new PVector(1,3.3);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(widthandHeight, widthandHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(255);

    position.addVector(veolicty);

    if ((position.x > p5.width) || (position.x < 0)) {
      veolicty.x = veolicty.x * -1;
    }
    if ((position.y > p5.height) || (position.y < 0)) {
      veolicty.y = veolicty.y * -1;
    }

    p5.stroke(0);
    p5.fill(175);
    p5.ellipse(position.x,position.y,16,16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default BallVector;