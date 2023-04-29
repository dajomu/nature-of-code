import p5Types from "p5";

export default class Walker {
    x: number;
    y: number;
    biasRight: number;
    biasDown: number;


    constructor(width: number, height: number, biasRight = 0, biasDown = 0) {
        this.x = width/2;
        this.y = height/2;
        this.biasRight = biasRight;
        this.biasDown = biasDown;
    }

    display(p5: p5Types) {
        p5.stroke(0);
        p5.point(this.x, this.y)
    }

    step() {
        const stepx = Math.floor(Math.random() * (3 + this.biasRight)) - 1;
        const stepy = Math.floor(Math.random() * (3 + this.biasDown)) - 1;
        this.x += stepx;
        this.y += stepy;
    }
}