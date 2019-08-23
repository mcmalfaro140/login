const express = require('express')
const app = express()
const cors = require('cors')


//import Routes 
const authRoute = require('./routes/auth')



//enable all cors request
app.use(cors());

//create a server that listen on port 3000
app.listen(process.env.PORT || '3000', () => {
    console.log('Server started on port 3000')
})

//Middleware
app.use(express.json())

//Routes middleware
app.use('/api/user/', authRoute)

//Routes to the servers
app.get('/', (req, res) => res.send('Hello from the back-end'))


