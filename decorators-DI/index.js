class DataService {
    proccessData(data) {
        return data.map(item => item * 2);
    }
}

// Decorar data service
class DataServiceWithLogging {
    constructor(dataService, logger) {
        this.dataService = dataService;
        this.logger = logger;
    }

    proccessData(data) {
        this.logger.log("Processing data with logging...");
        const result = this.dataService.proccessData(data);
        this.logger.log("Data processed:", result);
        return result;
    }
}

class Logger {
    log(message){
        console.log('[Logger]', message);
    }
}

const baseService = new DataService();
const logger = new Logger();

const decorateService = new DataServiceWithLogging(baseService, logger);

// use decorate services
const inputData = [1,2,3,4];
const proccessedData = decorateService.proccessData(inputData);

console.log(`Result: ${proccessedData}`);