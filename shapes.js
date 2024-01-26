
class Shape {
  constructor(sideLength, color) {
    this.sideLength = sideLength;
    this.color = color;
  }

  toSVG(text, textColor) {
    throw new Error('Method toSVG must be implemented in each subclass');
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(radius * 2, color);
    this.radius = radius;
  }

  toSVG(text, textColor) {
    return `<svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${this.sideLength / 2}" cy="${this.sideLength / 2}" r="${this.radius}" fill="${this.color}" />
        <text x="${this.sideLength / 2}" y="${this.sideLength / 2}" font-size="20" fill="${this.color}" text-anchor="middle">${text}</text>
      </svg>`;
  }
}

class Triangle extends Shape {
  constructor(sideLength, color) {
    super(sideLength, color);
  }

  toSVG(text, textColor) {
    const halfHeight = Math.sqrt(3) / 2 * this.sideLength;
    return `<svg width="${this.sideLength}" height="${halfHeight}" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${this.sideLength / 2},0 0,${halfHeight} ${this.sideLength},${halfHeight}" fill="${this.color}" />
        <text x="${this.sideLength / 2}" y="${halfHeight / 2}" font-size="20" fill="${this.color}" text-anchor="middle">${text}</text>
      </svg>`;
  }
}

class Square extends Shape {
  constructor(sideLength, color) {
    super(sideLength, color);
  }

  toSVG(text, textColor) {
    return `<svg width="${this.sideLength}" height="${this.sideLength}" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
        <text x="${this.sideLength / 2}" y="${this.sideLength / 2}" font-size="20" fill="${this.color}" text-anchor="middle">${text}</text>
      </svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
