import p5Types from "p5";

export default class PerlinWalker {
    width: number;
    height: number;
    x: number;
    y: number;
    tx: number;
    ty: number;
   

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.x = width/2;
        this.y = height/2;
        this.tx = 100;
        this.ty = 1000
    }

    display(p5: p5Types) {
        p5.stroke(0);
        p5.ellipse(this.x,this.y,16,16);
        // p5.line(this.x, this.y, this.oldX, this.oldY);
        // this.oldX = this.x;
        // this.oldY = this.y;
    }

    step(p5: p5Types) {
        this.x = p5.map(p5.noise(this.tx), 0, 1, 0, this.width);
        this.y = p5.map(p5.noise(this.ty), 0, 1, 0, this.height);

        this.tx += 0.01;
        this.ty += 0.01;
    }
}