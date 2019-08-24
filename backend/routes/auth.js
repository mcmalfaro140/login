const router = require('express').Router();
const mysql = require('mysql')
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs')

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
router.post('/register', async (req, res) => {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);

    //add new user to database
    let newUser = {user_name: `${req.body.username}`, pass: hashPass}
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

//Log in router
router.post('/login',async (req,res) => {
    let user = {user_name: `${req.body.username}`}
    let sql = 'SELECT * FROM users WHERE ?';
    let query = db.query(sql, user, async (err, result) => {
        if(err){
            res.status(400).send(err);
        }else{
            //compare passwords
            const validPass = await bcrypt.compare(req.body.password, result[0].pass);
            if(!validPass){
                res.send('Password and username did not match')
            }else{
                res.send('Logged in Successfully')
            }
        }
        
    })
});



module.exports = router;