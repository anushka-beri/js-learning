class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.calcPerimeter = function () {
      console.log(sideLength * sides);
    };
  }
}
