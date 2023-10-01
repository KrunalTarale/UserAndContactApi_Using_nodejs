const route = require('express').Router();
const jwt = require('jsonwebtoken');
const JwtKey = 'e-comm';
const conn = require('../modules/conn.module');

route.get('/contact', (req, res) => {
  const token = req.cookies.token;
  const user = JSON.parse(req.cookies.user);

  if (!token) {
    return res.redirect('/login');
  }

  jwt.verify(token, JwtKey, (err, decoded) => {
    if (err) {
      return res.redirect('/login');
    }
    res.render('contact');
    console.log(user[0]);
  });
});

route.post('/contact', (req, res) => {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;

  console.log(req.body);
  const user = JSON.parse(req.cookies.user);
  console.log(user);

  const sql =
    "INSERT INTO `contactus` (`fullname`, `address`, `contactno`, `zip`, `email`, `createdby`, `created`, `updated`) VALUES ('" +
    req.body.fname + " " + req.body.lname + "', '" +
    req.body.address + "', '" +
    req.body.contact + "', '" + // Fixed here
    req.body.zip + "', '" +
    req.body.email + "', '" +
    user[0].srno + "', '" +
    formattedDate + "', '" +
    formattedDate + "');";

  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.redirect('/allcontacts');
  });
});

module.exports = route;
