const fs = require('fs');
const { Circle, Triangle, Square } = require('../Generate logo/shapes.js');

function getUserInput() {
    function question(prompt) {
        return new Promise((resolve) => {
            process.stdout.write(prompt);
            process.stdin.once('data', (data) => {
                resolve(data.toString().trim());
            });
        });
    }

    return (async () => {
        const text = await question('Type 3 letters for logo ');
        const textColor = await question('Type in a text color: ');
        const shapeType = await question('type circle, triangle, square to choose design: ');
        const shapeColor = await question('Type in a shape color: ');

        return { text, textColor, shapeType, shapeColor };
    })();
}

function createShape(shapeType, shapeColor) {
    if (!shapeType) {
        throw new Error('Shape type is required');
    }

    switch (shapeType) {
        case 'circle':
            return new Circle(50, shapeColor);
        case 'triangle':
            return new Triangle(50, shapeColor);
        case 'square':
            return new Square(50, shapeColor);
        default:
            throw new Error(`Invalid shape type: ${shapeType}`);
    }
}

function main() {
    getUserInput().then((userInput) => {
        const shape = createShape(userInput.shapeType, userInput.shapeColor);
        //const textColor = calculateContrastingColor(userInput.shapeColor);
        const svgContent = shape.toSVG(userInput.text);
        fs.writeFileSync('logo.svg', svgContent);

        console.log('Generated logo.svg');
    });
}

main();
