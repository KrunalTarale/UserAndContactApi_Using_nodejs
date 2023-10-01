const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "contact_task"   
})

conn.connect(err =>{
    if(!err) console.log("Database  is connected to the server");
})

module.exports = conn