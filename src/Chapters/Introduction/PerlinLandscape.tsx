import React from "react";
import Sketch from "react-p5";
import p5Types, {Geometry} from "p5";
import ExtendedGeometry from './ExtendedGeometry';

interface ComponentProps {
  // Your component props
}

let detailX = 40;
let detailY = 40;
  
const PerlinLandscape: React.FC<ComponentProps> = (props: ComponentProps) => {

    const landScapeGeometry = new Geometry(detailX, detailY);

    const generateLandScapeGeometry = (p5: p5Types) => {
        for(let x = 0; x <= detailX; x++) {
            for(let y = 0; y <= detailY; y++) {
                (landScapeGeometry as ExtendedGeometry).vertices.push(p5.createVector(
                x/detailX,
                y/detailY,
                p5.map(p5.noise(x/50, y/50), 0, 1, 0, 2)
                ));
            }
        }
        landScapeGeometry.computeFaces();
        landScapeGeometry.computeNormals();
    }

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(500, 400, p5.WEBGL).parent(canvasParentRef);
        // p5.frameRate(1);
        generateLandScapeGeometry(p5);
    };

    const draw = (p5: p5Types) => {
        p5.background(255);
        p5.orbitControl();
        p5.pointLight(255,255,0,0,50,-50);
        
        p5.push();
        p5.stroke(128);
        // p5.fill(220)
        let geoSize = p5.width/2;
        // p5.rotateZ(p5.PI/100);
        // p5.rotateX(p5.PI / 2);
        p5.translate(-geoSize/2,-geoSize/2);
        p5.scale(geoSize);
        p5.specularMaterial(250);
        p5.model(landScapeGeometry);
        p5.pop();
    };

    return <Sketch setup={setup} draw={draw} />;
};

export default PerlinLandscape;