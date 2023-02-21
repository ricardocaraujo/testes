const EventEmitter = require('events');
const emitter = new EventEmitter();

class Logger extends EventEmitter {
    
    log(message) {
        console.log(message);
    
        this.emit('evento', {id: '1', texto: 'oi'});
    }
}

module.exports = Logger;