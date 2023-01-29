const express = require('express');

const router = express.Router();

const statusRoute = require('./status.route');

router.use('/status', statusRoute);

module.exports = router;