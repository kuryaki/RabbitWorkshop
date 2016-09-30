const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const logger = require('../shared/logger');

const port = process.env.PORT || 3000;

const app = express();


// Serve Static files
app.use('/static', express.static(`${__dirname}/static`));

// Session Setup
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  cookie: {
    maxAge: 360*5
  },
  saveUninitialized: true
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Process body and forms
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

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