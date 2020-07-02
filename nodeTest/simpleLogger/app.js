
const Logger = require('./logger');
const logger = new Logger();

logger.on('logging', (arg) => {
    console.log('logging: ', arg);
});

logger.on('messageLogged', (arg) => {
    logger.emit('logging', arg);
    console.log(`message sent ${arg}`, arg);
});
const data = {name: "Aidan", age: 19, zips: [93465, 93410, 93105]};
logger.log(JSON.stringify(data, null, 2));