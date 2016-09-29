const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const logger = require('./logger');

const port = process.env.PORT || 3000;

const app = express();

// Process body and forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve Static files
app.use('/static', express.static(`${__dirname}/static`));

// Log anything after this
app.use(logger);

// Serve Views
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

// Routes
app.use(router);

app.listen(port, () => {
  console.warn(`Example app listening on port ${port}!`);
});