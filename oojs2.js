class Shape {
  constructor(name, sides, sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.calcPerimeter = function () {
      console.log(sideLength * sides);
    };
  }
}
  
  // Write your code below here
  let square = new Shape("square", 4, 5);
  square.calcPerimeter();
  let triangle = new Shape("triangle", 3, 3);
  triangle.calcPerimeter();
  