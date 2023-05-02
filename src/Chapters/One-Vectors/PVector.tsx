

export default class PVector {
 
    x: number;
    y: number;
    z: number;
   
    constructor(x: number, y: number, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    addVector = (vector: PVector) => {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
    }
  }
  
  