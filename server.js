const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('./configs/server.config');
const database = require('./database');
const routes = require('./routes/index.routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
database.connect();

app.listen(config.PORT, () => console.log('listening on port', config.PORT));