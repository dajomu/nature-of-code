
export default class PVector {
 
    x: number;
    y: number;
    z: number;
   
    constructor(x: number, y: number, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    add(vector: PVector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
    }

    subtract(vector: PVector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
    }

    multiply(factor: number) {
        this.x *= factor;
        this.y *= factor;
        this.z *= factor;
    }

    divide(factor: number) {
        this.x /= factor;
        this.y /= factor;
        this.z /= factor;
    }

    magnitude() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2) + (this.z ** 2));
    }

    normalize() {
        const magnitude = this.magnitude();
        if (magnitude != 0) {
          this.divide(magnitude);
        }
    }

    limit(max: number) {
        if (this.magnitude() > max) {
            this.normalize();
            this.multiply(max);
        }
    }

    static random2d(): PVector {
        const randomVector = new PVector(Math.random(), Math.random());
        randomVector.normalize();
        return randomVector;
    }

    static add(vector1: PVector, vector2: PVector): PVector {
        return new PVector(vector1.x + vector2.x, vector1.y + vector2.y, vector1.z + vector2.z);
    }

    static subtract(vector1: PVector, vector2: PVector) {
        return new PVector(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z);
    }

    static multiply(vector1: PVector, factor: number) {
        return new PVector(vector1.x * factor, vector1.y * factor, vector1.z * factor);
    }

    static divide(vector1: PVector, factor: number) {
        return new PVector(vector1.x / factor, vector1.y / factor, vector1.z / factor);
    }
}
  