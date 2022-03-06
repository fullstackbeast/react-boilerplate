import consoleLogger from '../../infrastructure/logger/console';
import elasticSearchLogger from '../../infrastructure/logger/elastic-search';
// import api from '../../infrastructure/api';



// const env = 'development';

const services = {
   log: process.env.NODE_ENV === 'development' ? consoleLogger : elasticSearchLogger,
   // api
}

export default services;