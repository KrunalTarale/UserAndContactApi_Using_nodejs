const route = require('express').Router();

route.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.clearCookie('user');
    res.redirect('/login');
  });

module.exports = route;