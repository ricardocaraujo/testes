//implementation detail
const _radius = new WeakMap();

//public interface
class Circle {

    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log('Teste' + _radius.get(this))
    }
}

//module.exports.Squate = Square;
//module.exports.Circle = Circle;

module.exports = Circle;