function Circle(radius) {
    //instance members
    this.radius = radius;

    //instance members
    this.draw = function() {
        console.log('draw');
    }

    //instance members
    this.move = function() {
        console.log('move');
    }
}

Circle.prototype === c1.__proto__ // true - circle base (prototype)

//prototype members
Circle.prototype.draw = function() { // desta forma não precisa mais declarar o método draw na instaciação do objeto (function Circle)
    move(); //pode ser chamado um método 
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(2);

//returns instances members
console.log(Object.keys(c1));

//returns all members (instances and prototypes)
for(let key in c1) console.log(key);

//ES 6 - Object.assign -> copia as propriedades e métodos para o objeto vazio {}
const canEat = {
    eat: function() {
        this.hunger--;
    }
}

const person = Object.assign({}, canEat);

function Person() {

}

Object.assign(Person.prototype, canEat); // modificando o prototipo de Person - neste exemplo está sendo feito uma composição, que é mais indicado do que herança

