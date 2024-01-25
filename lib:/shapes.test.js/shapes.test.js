const { Circle, Triangle, Square } = require('../shapes.js ');

test('draws a circle', () => {
    const circle = new Circle(50, 'red');
    const mockContext = {
        push: jest.fn(),
    };

    circle.draw(mockContext);

    const expectedSVG = '<circle cx="150" cy="100" r="50" fill="red" />';
    expect(mockContext.push).toHaveBeenCalledWith(expectedSVG);
});

test('draws a triangle', () => {
    const triangle = new Triangle(50, 'blue');
    const mockContext = {
        push: jest.fn(),
    };

    triangle.draw(mockContext);
    const expectedSVG = '<polygon points="150,100 125,134.64 175,134.64" fill="blue" />';
    expect(mockContext.push).toHaveBeenCalledWith(expectedSVG);
});

test('draws a square', () => {
    const mockContext = {
        push: jest.fn(),
    };

    square.draw(mockContext);

    const expectedSVG = '<rect x="125" y="75" width="50" height="50" fill="green" />';
    expect(mockContext.push).toHaveBeenCalledWith(expectedSVG);
});
