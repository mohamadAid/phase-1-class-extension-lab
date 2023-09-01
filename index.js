// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter method to count the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter method to calculate the perimeter
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    // Getter method to check if the triangle is valid
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
      }
      return false;
    }
  }
  
  class Square extends Polygon {
    // Getter method to check if the square is valid
    get isValid() {
      if (this.countSides === 4) {
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
      }
      return false;
    }
  
    // Getter method to calculate the area of the square
    get area() {
      if (this.isValid) {
        return this.sides[0] ** 2;
      }
      return undefined;
    }
  }
  
  // Example usages
  const triangle = new Triangle([3, 4, 5]);
  const square = new Square([4, 4, 4, 4]);
  
  console.log("Triangle Perimeter:", triangle.perimeter); // Output: 12
  console.log("Is the triangle valid?", triangle.isValid); // Output: true
  
  console.log("Square Perimeter:", square.perimeter); // Output: 16
  console.log("Is the square valid?", square.isValid); // Output: true
  console.log("Square Area:", square.area); // Output: 16
  