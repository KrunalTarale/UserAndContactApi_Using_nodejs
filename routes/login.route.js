const route = require('express').Router();
const conn = require('../modules/conn.module');
const Jwt = require('jsonwebtoken');
const JwtKey = 'e-comm';

route.get('/login', (req, res) => {
    res.render('login');
});

route.post('/login', (req, res) => {
    const user = req.body;
    const sql = "SELECT * FROM `user` WHERE `email` LIKE '" + user.username + "' AND `password` LIKE '" + user.password + "' LIMIT 1";
    conn.query(sql, (err, result) => {
        if (err) {
            // console.error(err);
            res.send('Internal Server Error');
        } else {
            if (result.length > 0) {
                const sanitizedResult = result.map(user => {
                    const { password, ...sanitizedUser } = user;
                    return sanitizedUser;
                });
                res.cookie('user', JSON.stringify(sanitizedResult), { httpOnly: true });

                Jwt.sign({ sanitizedResult }, JwtKey, { expiresIn: "2h" }, (err, token) => {
                    if (!err) {
                        // Set the JWT token as a cookie
                        res.cookie('token', token, { httpOnly: true, maxAge: 2 * 60 * 60 * 1000 }); // 2 hours expiry
                        res.redirect('/contact'); // Redirect to the dashboard or any authorized page
                    } else {
                        res.send({ auth: "result not found" });
                    }
                });
            } else {
                res.send({ user: false });
            }
        }
    });
});

module.exports = route;
