const express = require('express');
const router = express.Router();
const user = require('./user');

router.get('/', (req, res) => {
    res.render('home', { body: 'hola mundo' });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/login', (req, res) => {
    res.render('home', { body: req.body });
});

router.post('/register', (req, res) => {
    res.redirect('login');
});

module.exports = router;