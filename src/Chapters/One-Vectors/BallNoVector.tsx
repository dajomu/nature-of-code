import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface ComponentProps {
  // Your component props
}

const widthandHeight = 500;
  
const BallNoVector: React.FC<ComponentProps> = (props: ComponentProps) => {
  let x = 100;
  let y = 100;
  let xspeed = 1;
  let yspeed = 3.3;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(widthandHeight, widthandHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(255);

    x = x + xspeed;
    y = y + yspeed;

    if ((x > p5.width) || (x < 0)) {
      xspeed = xspeed * -1;
    }
    if ((y > p5.height) || (y < 0)) {
      yspeed = yspeed * -1;
    }

    p5.stroke(0);
    p5.fill(175);
    p5.ellipse(x,y,16,16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default BallNoVector;