const updatesService = require('../services/updates.service');

class StatusController {
     async status(req, res) {
         const city = req.query.city;
        return res.send(await updatesService.getUpdates(city));
    }
}

module.exports = new StatusController();