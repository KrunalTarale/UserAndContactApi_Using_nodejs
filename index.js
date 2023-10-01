const express = require('express');
const app = express();

const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use('/public',express.static(__dirname + '/public'));
const cookieParser = require('cookie-parser'); // Import cookie-parser
app.use(cookieParser()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const conn = require('./modules/conn.module');

app.get('/', (req, res) => {
    res.render('home');
})

const register = require('./routes/register.route');
app.use(register);
const login = require('./routes/login.route');
app.use(login)
const contactus = require('./routes/contactForm.route');
app.use(contactus);
const allcontacts = require('./routes/allcontacts.route');
app.use(allcontacts);
const logout = require('./routes/logout.rotue');
app.use(logout);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})