const _array = new WeakMap();

class Stack {
    constructor() {
        _array.set(this, []);
    }

    push(valor) {
        this.array.get(this).push(valor);
    }

    get count() {
        return this.array.get(this).length;
    }

    

    peek() {
        if(this.array.get(this).length == 0) {
            throw new Error('stack is full');
        } else {
            this.array.get(this).pop();
        }        
    }
}

