import PVector from "./PVector";
import p5Types from "p5";
import staticp5 from "../../staticp5";

type AccelerationType = "KEYBOARD" | "RANDOM" | "PERLIN" | "MOUSE";

export default class Mover {

    location: PVector;
    velocity: PVector;
    acceleration: PVector;
    accelerationType: AccelerationType;
    topSpeed = 5;

    constructor (width: number, height: number, accelerationType: AccelerationType = "KEYBOARD") {
        this.location = new PVector(Math.floor(staticp5.random(width)),Math.floor(staticp5.random(height)));
        this.velocity = new PVector(staticp5.random(1),staticp5.random(1));
        this.acceleration = new PVector(-0.001,0.01);
        this.accelerationType = accelerationType;
        if (accelerationType === "KEYBOARD") {
            this.topSpeed = 2;
        }
    }

    setKeyboardAcceleration(p5: p5Types) {
        if (p5.keyIsPressed === true && p5.keyCode === p5.UP_ARROW) {
            this.acceleration = new PVector(this.velocity.x, this.velocity.y);
            this.acceleration.normalize();
            this.acceleration.multiply(0.1);
            this.acceleration.limit(1);
        } else if (p5.keyIsPressed === true && p5.keyCode === p5.DOWN_ARROW) {
            this.acceleration = new PVector(-this.velocity.x, -this.velocity.y);
            this.acceleration.normalize();
            this.acceleration.multiply(0.1);
            this.acceleration.limit(1);
        } else {
            this.acceleration = new PVector(0, 0);
        }
    }

    setRandomAcceleration(p5: p5Types) {
        this.acceleration = PVector.random2d();
        this.acceleration.multiply(Math.random() - 0.5);
    }

    setNoisyAcceleration(p5: p5Types) {
        this.acceleration = new PVector(p5.noise(this.location.x) - 0.5, p5.noise(this.location.y) - 0.5);
        this.acceleration.limit(0.2);
    }

    setMouseAcceleration(p5: p5Types) {
        const mouse = new PVector(p5.mouseX, p5.mouseY);
        const dir = PVector.subtract(mouse, this.location);
        dir.normalize();
        dir.multiply(0.5);
        this.acceleration = dir;
    }

    update(p5: p5Types) {
        switch(this.accelerationType) {
            case "KEYBOARD":
                this.setKeyboardAcceleration(p5);
                break;
            case "RANDOM":
                this.setRandomAcceleration(p5);
                break;
            case "PERLIN":
                this.setNoisyAcceleration(p5);
                break;
            case "MOUSE":
                this.setMouseAcceleration(p5);
                break;
        }

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
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
