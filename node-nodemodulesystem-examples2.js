const Logger = require('./node-nodemodulesystem-examples');

const logger = new Logger();

logger.on('evento', (arg) => console.log(arg));

logger.log('message')