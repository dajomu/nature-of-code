import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface ComponentProps {
  // Your component props
}
  
const Component: React.FC<ComponentProps> = (props: ComponentProps) => {

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Component;