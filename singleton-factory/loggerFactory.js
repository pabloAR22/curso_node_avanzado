const Logger = require('./logger');

const loggerInstance = new Logger();

class ConsoleLogger {
    constructor() {
        this.logger = loggerInstance;
    }

    log(message) {
        console.log('Usando ConsoleLogger');
        console.log(`Console logger: ${message}`);
        this.logger.log(message);
    }
}

class FileLogger {
    constructor() {
        this.logger = loggerInstance;
    }

    log(message) {
        console.log('Usando FileLogger');
        console.log(`File logger: ${message}`);
        this.logger.log(message);
    }
}

class LoggerFactory {
    static createLogger(type) {
        if (type === 'console') {
            return new ConsoleLogger();
        } else if (type === 'file') {
            return new FileLogger();
        } else {
            throw new Error('Unknown logger type');
        }
    }
}

module.exports = LoggerFactory;