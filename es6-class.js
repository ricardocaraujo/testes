//babel é um compilador que pega o código JS ES6 e transforma em ES5

class Circle {
	constructor(radius) {
		this.radius = radius;
		this.move = function () {};
	}

	// Instance Method
	draw() {
		console.log("draw");
	}

	//Static Method
	static parse(str) {
		const radius = JSON.parse(str).radius;
		return new Circle(radius);
	}

	get radius() {
		return this.radius;
	}

	set radius(value) {
		if (value <= 0) throw new Error("invalid");
		this.radius = value;
	}
}

const circle = Circle.parse('{"radius": 1}');

const c = new Circle(1);

c.atributo = 10;
c.funcao = function () {};

//Function Declaration - hoisted (vai para o topo)
function sayHello() {}

//Function Expression - not hoisted
const sayGoodbye = function () {};

//também não é hoisted
const number = 1;

//Class Declaration - not hoisted
class Circle {}

//Class Expression - not hoisted
const Square = class {};

// quando se ativa o strict mode ('use strict'), o this deixa de apontar para o window
// object e passa a ser undefined. Por default, a classe do ES6 já usa o strict mode, não precisa 'use strict'

class Shape {
	constructor(color) {
		this.color = color;
	}

	move() {
		console.log("oi");
	}
}

//se colocar o contructor na classe pai, tem que chamar na classe filho
class Circle extends Shape {
	constructor(color, radius) {
		super(color);
		this.radius = radius;
	}

	//method overriding
	move() {
		super.move(); //chama o move da classe pai
		console.log("circle move");
	}

	draw() {
		console.log("aro");
	}
}

const c = new Circle("red", 1);

//CommonJS Modules
module.exports.Circle = Circle;
module.exports.Square = Square;

//se exportar só um objeto, pode fazer da seguinte forma
module.exports = Circle;

//para importar
const Circle = require("./es6-class");

//também pode exportar da seguinte forma
module.exports = {
	Circle,
	Square,
};

//e importar da seguinte maneira
const { Circle, Square } = require("./es6-class");

//ES6 Modules
export class Circulo {}

//para importar
import { Circulo } from "./es6-class";

//Transpiler = translator + compiler. transforma código moderno em ES5. o mais
//o mais famoso é o Babel
