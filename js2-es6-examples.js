class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function(){} // método de instância
    }

    draw() {
        console.log('draw'); // método de prototype
    }

    //método estático
    static parse(str){}
}

const c = new Circle(1);

//é hoisting
//function declaration
function sayHello(){}

//function expression
const sayGoodbye = function() {};


//não é hoisting 
//class declaration
class Circle{}

//class expression
const Square = class {};

'use strict';

const Circle1 = function() {
    this.draw = function() {console.log(this);}
};

const c1 = new Circle(1);

//method call
c1.draw();//o this exibido é do objeto c1

const draw = c.draw;

//function call
draw(); //o this exibido é do window. usando o 'use sctrict', é exibido undefined

//utlização de Symbols para implementar propriedades e métodos privados
//o Symbol gera um identificador único (key)

const _radius = Symbol(); //não usa new
const _draw = Symbol();

class Circle2 {
    constructor(radius) {
        this[_radius] = radius;
    }

    [_draw]() {
        console.log('draw'); // método de prototype
    }
}

const c2 = new Circle2(1);
const key = Object.getOwnPropertySymbols(c2)[0];
console.log(c[key]);

//utlização de WeakMap para implementar propriedades e métodos privados

const _radius2 = new WeakMap(); 
const _move = new WeakMap(); 

'use strict';

class Circle2 {
    constructor(radius) {
        _radius2.set(this, radius);

        _move.set(this, function() {
            console.log('move', this)
        }) // não funciona porque o corpo dessa classe está com o 'use strict'

        _move.set(this, () => {
            console.log('move', this) // funciona porque está usando arrow function
        })
    }

    //para acessar o _radius2
    draw() {
        console.log(_radius2.get(this));
    }

    draw2() {
        console.log(_move.get(this)());
    }
}

