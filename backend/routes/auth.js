const router = require('express').Router();
const mysql = require('mysql')
const dotenv = require('dotenv');

dotenv.config();

//create connection to the sql database
var db = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_username,
    password: process.env.DB_pass,
    database: process.env.DB
    
  });

//check connection
db.connect(((err) => {
  if(err){
      throw err;
  }
  console.log('My sql connected...')

}))

//Adds user to the database
router.post('/register',(req, res) => {
    let newUser = {user_name: `${req.body.username}`, pass: `${req.body.password}`}
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, newUser, (err, result) => {
        if(err){
            res.status(400).send(err);
        }
        res.send("New user was added succesfully")
    })
});

//makes sure that the user name does not exist
router.post('/validateUser',(req, res) => {
    let user = {user_name: `${req.body.username}`}
    let sql = 'SELECT * FROM users WHERE ?';
    let query = db.query(sql, user, (err, result) => {
        if(err){
            res.status(400).send(err);
        }
        if(result.length === 0){
            res.send("User does not exist on the database")
        }else{
            res.send("User already exist on the database")
        }
        
    })
});



module.exports = router;