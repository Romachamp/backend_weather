const cacheService = require('./cache.service');

class UpdatesService {
   async getUpdates(city) {
        return await cacheService.getWeather(city);
    }
}

module.exports = new UpdatesService();