import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import PVector from "./PVector";

interface ComponentProps {
  // Your component props
}

const widthandHeight = 500;
  
const BallVector3d: React.FC<ComponentProps> = (props: ComponentProps) => {
  const position = new PVector(1,1,1);
  const veolicty = new PVector(1,3.3,2);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(widthandHeight, widthandHeight, p5.WEBGL).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(100);
    p5.ambientLight(60, 60, 60);
    p5.pointLight(255, 255, 255, 100, 100, 100);

    position.add(veolicty);

    if ((position.x > p5.width) || (position.x < 0)) {
      veolicty.x = veolicty.x * -1;
    }
    if ((position.y > p5.height) || (position.y < 0)) {
      veolicty.y = veolicty.y * -1;
    }
    if ((position.z > 200) || (position.z < 0)) {
      veolicty.z = veolicty.z * -1;
    }

    p5.translate(position.x, position.y, position.z);
    p5.push();
    p5.translate(-250, -250);
    p5.specularMaterial(250, 0, 0);
    p5.noStroke();
    p5.sphere(50);
    p5.pop();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default BallVector3d;
