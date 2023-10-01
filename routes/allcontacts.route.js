const route = require('express').Router();
const conn = require('../modules/conn.module');

route.get('/allcontacts', (req, res) => {
    const sql = "SELECT * FROM `contactus`";
    conn.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);

        res.render('viewcontacts' , {
            contacts: result
        });
      });

})



module.exports = route;
