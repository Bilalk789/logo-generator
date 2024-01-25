class Shape {
    constructor(color) {
      this.color = color;
    }
  
    toSVG(text) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.draw()}<text x="150" y="100" font-size="20" fill="${this.color}" text-anchor="middle">${text}</text></svg>`;
      }
    
  
    draw() {
    }
  }
  
  class Circle extends Shape {
    constructor(radius, color) {
      super(color);
      this.radius = radius;
    }
  
    draw() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(sideLength, color) {
      super(color);
      this.sideLength = sideLength;
    }
  
    draw() {
      const halfHeight = Math.sqrt(3) / 2 * this.sideLength;
      return `<polygon points="150,100 ${150 - this.sideLength / 2},${100 + halfHeight} ${150 + this.sideLength / 2},${100 + halfHeight}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength, color) {
      super(color);
      this.sideLength = sideLength;
    }
  
    draw() {
      return `<rect x="${150 - this.sideLength / 2}" y="${100 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square };
  