const express = require('express');

const bodyParser = require('body-parser');

const config = require('./config');

const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(config.port, console.log(`App listening on ${config.host_url}`))

