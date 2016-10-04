const express = require('express');
const router = express.Router();
const Users = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const jackrabbit = require('jackrabbit');
const rabbit = jackrabbit('amqp://localhost');
const exchange = rabbit.topic('jsconf');

passport.use(new LocalStrategy({ usernameField: 'email', session: false }, Users.validate));
passport.serializeUser((user, cb) => cb(null, user.email));
passport.deserializeUser(Users.findOne);

const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

router.get('/', authenticated, (req, res) => {
    res.render('home', { body: `hola ${req.user.fullName}` });
});

router.get('/login', (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('login');
});

router.get('/register', (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.render('register');
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    return res.redirect('/');
});

router.post('/register', (req, res, next) => {
    const user = req.body;
    if (!user.email || !user.password) {
        return next(new Error('Missing required parameters'));
    }
    Users.findOneOrCreate(user.email, user, (error) => {
        res.redirect('/login');
        exchange.publish(user, { key: 'register.user' })
    });
});

module.exports = router;