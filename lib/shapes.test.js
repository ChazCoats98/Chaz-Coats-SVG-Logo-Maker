const {circle, triangle, square} = require("./shapes");

//Tests to confirm shapes render properly 
describe("circle", function() {
    test("should output a circle with a red background and white text", function() {
        const newCircle = new circle("MIT","white", "red");
        expect(newCircle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="red"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">MIT</text>
    </svg>`)
    })
});

describe("square", function() {
    test("should output a square with a blue background and white text", function() {
        const newSquare = new square("SVU","white", "blue");
        expect(newSquare.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="200" height="200" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVU</text>
    </svg>`)
    })
});

describe("triangle", function() {
    test("should output a triangle with a green background and white text", function() {
        const newTriangle = new triangle("SVD","white", "green");
        expect(newTriangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="green"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVD</text>
    </svg>`)
    })
});