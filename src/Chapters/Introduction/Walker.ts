import p5Types from "p5";

export default class Walker {
    x: number;
    y: number;

    constructor(width: number, height: number) {
            this.x = width/2;
            this.y = height/2;
    }

    display(p5: p5Types) {
        p5.stroke(0);
        p5.point(this.x, this.y)
    }

    step() {
        const choice = Math.floor(Math.random() * 4);
        if (choice == 0) {
            this.x += 1;
        } else if (choice == 1) {
            this.x -= 1;
        } else if (choice == 2) {
            this.y += 1;
        } else {
            this.y -= 1;
        }
    }
}