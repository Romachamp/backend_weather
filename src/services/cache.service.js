const dbService = require('./db.service');
const weatherService = require('./weather.service');

class CacheService {
    weatherIsCached = false;


   async getWeather(city) {
       const MILLIS_IN_MINUTE = 60000;
       if (this.weatherIsCached === true){
               const data = await dbService.get();
               return data;
           } else {
               const data = await weatherService.getWeather(city);
               await dbService.addDataToDb(data);
               this.weatherIsCached = true;

               setTimeout(()=> {
                   this.weatherIsCached = false;
               },20 * MILLIS_IN_MINUTE);
               return data;
           }
       }
}

module.exports = new CacheService();