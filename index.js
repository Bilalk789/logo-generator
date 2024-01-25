const fs = require('fs');
const readlineSync = require('readline-sync');
const { Circle, Triangle, Square } = require('./shapes');

function getUserInput() {
  const text = readlineSync.question('Type LOGO letters upto 3: ');
  const textColor = readlineSync.question('Select text color: ');
  const shapeType = readlineSync.question('Choose a shape: circle, triangle, square: ');
  const shapeColor = readlineSync.question('Select shape color: ');

  return { text, textColor, shapeType, shapeColor };
}

function createShape(shapeType, shapeColor) {
  switch (shapeType) {
    case 'circle':
      return new Circle(50, shapeColor); 
    case 'triangle':
      return new Triangle(50, shapeColor);
    case 'square':
      return new Square(50, shapeColor); 
    default:
      throw new Error('Invalid shape type');
  }
}

function main() {
  const userInput = getUserInput();
  const shape = createShape(userInput.shapeType, userInput.shapeColor);

  const svgContent = shape.toSVG(userInput.text);
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

main();
