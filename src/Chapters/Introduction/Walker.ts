import p5Types from "p5";

export default class Walker {
    x: number;
    y: number;
    biasRight: number;
    biasDown: number;
    useMouseDirection: boolean;
    mouseBiasStrength = 0.5;


    constructor(width: number, height: number, biasRight = 0, biasDown = 0, useMouseDirection = false) {
        this.x = width/2;
        this.y = height/2;
        this.biasRight = biasRight;
        this.biasDown = biasDown;
        this.useMouseDirection = useMouseDirection;
    }

    display(p5: p5Types) {
        p5.stroke(0);
        p5.point(this.x, this.y)
    }

    step(p5: p5Types) {
        let mouseBiasX = 0;
        let mouseBiasY = 0;
        if (this.useMouseDirection) {
            if (p5.mouseX - this.x > 0) {
                mouseBiasX = this.mouseBiasStrength;
            } else if (p5.mouseX - this.x < 0) {
                mouseBiasX = -this.mouseBiasStrength;
            }
            if (p5.mouseY - this.y > 0) {
                mouseBiasY = this.mouseBiasStrength;
            } else if (p5.mouseY - this.y < 0) {
                mouseBiasY = -this.mouseBiasStrength;
            }

        }
        const stepx = Math.floor(Math.random() * (3 + this.biasRight + mouseBiasX)) - 1;
        const stepy = Math.floor(Math.random() * (3 + this.biasDown + mouseBiasY)) - 1;
        this.x += stepx;
        this.y += stepy;
    }
}