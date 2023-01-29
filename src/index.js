const express = require('express');

const app = express();

const mainRoute = require('./routes/main.route');

app.use('/api', mainRoute);

app.listen(3000);