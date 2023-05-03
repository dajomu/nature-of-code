import PVector from "./PVector";
import p5Types from "p5";
import staticp5 from "../../staticp5";

export default class Mover {

    location: PVector;
    velocity: PVector;
    acceleration: PVector;
    allowKeyboardInput: boolean;
    randomAcceleration: boolean;

    constructor (width: number, height: number, allowKeyboardInput = false, randomAcceleration = false) {
        this.location = new PVector(Math.floor(staticp5.random(width)),Math.floor(staticp5.random(height)));
        this.velocity = new PVector(staticp5.random(5),staticp5.random(5));
        this.acceleration = new PVector(-0.001,0.01);
        this.allowKeyboardInput = allowKeyboardInput;
        this.randomAcceleration = randomAcceleration;
    }

    update(p5: p5Types) {
        if (p5.keyIsPressed === true && this.allowKeyboardInput) {
            if (p5.keyCode === p5.UP_ARROW) {
                this.acceleration = new PVector(this.velocity.x, this.velocity.y);
            } else if (p5.keyCode === p5.DOWN_ARROW) {
                this.acceleration = new PVector(-this.velocity.x, -this.velocity.y);
            }
            this.acceleration.normalize();
            this.acceleration.multiply(0.1);
        } else {
            this.acceleration = new PVector(0, 0);
        }

        if(this.randomAcceleration) {
            this.acceleration = PVector.random2d();
            this.acceleration.multiply(Math.random() - 0.5);
        }
        this.acceleration.limit(1);
        this.velocity.add(this.acceleration);
        this.velocity.limit(20);
        this.location.add(this.velocity);
    }

    display(p5: p5Types) {
        p5.stroke(0);
        p5.fill(175);
        p5.ellipse(this.location.x, this.location.y, 10, 10);
    }

    checkEdges(p5: p5Types) {
        if (this.location.x > p5.width) {
            this.location.x = 0;
        } else if (this.location.x < 0) {
            this.location.x = p5.width;
        }
        
        if (this.location.y > p5.height) {
            this.location.y = 0;
        } else if (this.location.y < 0) {
            this.location.y = p5.height;
        }
    }
}
