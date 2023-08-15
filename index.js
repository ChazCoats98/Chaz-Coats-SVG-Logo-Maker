var inquirer = require("inquirer");
var jest = require("jest");
var {circle, triangle, square} = require("./lib/shapes");

const questions = [
    {
        name: "text",
        type: "input", 
        message: "Enter up to 3 characters for your logo text:"
    },
    {
        name: "textColor",
        type: "input",
        message: "Enter a color keyword or hex code for your text color:"
    }, 
    {
        name: "shapeColor",
        type: "input",
        message: "Enter a color keyword or hex code for your shape color:"
    },
    {
        name: "shape",
        type: "list",
        message: "Choose which shape you want your logo to be:",
        choices: ["circle", "triangle", "square"]
    }
]



function shapeRender() {
    inquirer.prompt(questions).then(function(response) {
        if (response.shape === "circle") {
            let svgLogo = new circle(response.text, response.textColor, response.shapeColor);
            return svgLogo.render()
        }

        if (response.shape === "triangle") {
            let svgLogo = new triangle(response.text, response.textColor, response.shapeColor);
            return svgLogo.render()
        }

        if (response.shape === "square") {
            let svgLogo = new square(response.text, response.textColor, response.shapeColor);
            return svgLogo.render()
        }
    });
}