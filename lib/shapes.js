//defines basic shape parent object 
class shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
};

//Expands upon shape parent class by adding shape specific child classes. Adds render method to render the shape with user input values 
class circle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
};

class triangle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
        <text x="100" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
};

class square extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
};

module.exports = {circle, triangle, square}