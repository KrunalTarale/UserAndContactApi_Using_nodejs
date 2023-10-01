const route = require('express').Router();
const conn = require('../modules/conn.module');

route.post('/register', (req, res) => {

    const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); 
  const year = currentDate.getFullYear().toString();

  const formattedDate = `${day}/${month}/${year}`;
  
    const sql = "INSERT INTO `user` (`name`, `username`, `password`, `email`, `phone`, `created`, `updated`) VALUES ('"+req.body.fname+ " " +req.body.lname+"', '"+req.body.uname+"', '"+req.body.password+"', '"+req.body.email+"', '"+req.body.phone+"', '"+formattedDate+"', '"+formattedDate+"');";
    conn.query(sql ,  (err,result) =>{
        if(err) throw err;
        res.redirect('/login');
    }) 

})

module.exports = route;
