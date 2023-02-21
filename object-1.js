const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1,
	},
	isVisible: true,
	draw: function () {
		console.log();
	},
};

//Factory function
function createCircle(radius) {
	return {
		radius,
		location: {
			x: 1,
			y: 1,
		},
		isVisible: true,
		draw() {
			console.log();
		},
	};
}

const circle1 = createCircle(1);
console.log(circle1);

//Constructor function
function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log();
	};
}

const circle2 = new Circle(1);

const circleObj = {
	radius: 1,
};

circleObj.color = "blue";
circleObj.draw = function () {};

delete circleObj.color;

const Circle1 = new Function(
	"radius",
	`
    this.radius = radius;
	this.draw = function () {
		console.log();
	};`
);

const circle3 = new Circle1(1);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

for (let key in circle) {
	console.log(key, circle[key]); //mostra o nome da propriedade e o valor
}

//for of só pode ser usado em iteráveis, como arrays e maps]

for (let key of Objects.keys(circle)) {
	console.log(key);
}

if ("radius" in circle) {
	console.log("yes");
}

//criar cópia de objeto
const object1 = Object.assign({}, circle);

const object2 = Object.assign({ color: "yellow" }, circle);

const object3 = { ...circle };
