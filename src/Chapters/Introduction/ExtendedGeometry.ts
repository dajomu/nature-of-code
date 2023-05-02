import p5Types, {Geometry} from "p5";

export default class ExtendedGeometry extends Geometry { // class 'implements' interface
    constructor(
        public vertices: any[],
      ) {
        super();
      }
}
