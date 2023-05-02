

export default class PVector {
 
    x: number;
    y: number;
   
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    addVector = (vector: PVector) => {
        this.x += vector.x;
        this.y += vector.y;
    }
  }
  
  