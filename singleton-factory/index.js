const LoggerFactory = require('./loggerFactory');
const logger = require('./logger');
const loggerInstance = new logger();

const loggerConsole = LoggerFactory.createLogger('console');
const loggerFile = LoggerFactory.createLogger('file');

loggerConsole.log('This is a console log message');
loggerFile.log('This is a file log message');

loggerInstance.getLogs().forEach(log => console.log(log));