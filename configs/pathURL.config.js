const { config } = require('./server.config');

module.exports = {
    pathUrl: `${config.BASE_URL}${config.PATH_URL}`
}