const scribe = require('scribe-js');

const console = scribe.create({ id: process.id, ignore: ['/static/'] });
console.override();

const logger = new scribe.Middleware.ExpressRequestLogger(console);

module.exports = logger.getMiddleware();