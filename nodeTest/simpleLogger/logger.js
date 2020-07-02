
const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        // cool stuff (HTTP?)   
        console.log('in logger: ', message);
        this.emit('messageLogged', { message: message, id: 1 });
    }
}

module.exports = Logger;