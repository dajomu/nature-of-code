import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface ComponentProps {
  // Your component props
}

const width = 500;
const height = 500;
  
const PerlinNoiseCloud: React.FC<ComponentProps> = (props: ComponentProps) => {

    let t = 0;

  // See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.frameRate(2);
  };

  const draw = (p5: p5Types) => {
    p5.loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const bright = p5.color(p5.map(p5.noise(t + x/100, t + y/100), 0, 1, 0, 255), p5.map(p5.noise(t + 100 + x/100, t + 100 + y/100), 0, 1, 0, 255), p5.map(p5.noise(t + 1000 + x/100, t + 1000 + y/100), 0, 1, 0, 255));
            p5.set(x, y, bright);
        }
    }
    console.log(p5.pixels);
    p5.updatePixels();
    t += 0.05;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default PerlinNoiseCloud;