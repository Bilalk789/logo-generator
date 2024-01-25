const { Circle, Triangle, Square } = require('../shapes.js ');

test('draws a circle', () => {
    const circle = new Circle(50, 'red'); // Example radius and color, adjust as needed
  const mockContext = {
    push: jest.fn(),
  };

  circle.draw(mockContext);

  const expectedSVG = '<circle cx="150" cy="100" r="50" fill="red" />';
  
  
  expect(mockContext.push).toHaveBeenCalledWith(expectedSVG);
});

test('draws a triangle', () => {
  
});

test('draws a square', () => {
  
});