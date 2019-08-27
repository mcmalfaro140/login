const express = require('express')
const app = express()
const cors = require('cors')


//import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')



//enable all cors requests
app.use(cors());

//create a server that listen on port 5000
app.listen(process.env.PORT || '5000', () => {
    console.log('Server started on port 5000')
})

//Middleware
app.use(express.json())

//Routes middleware
app.use('/api/user/', authRoute)
app.use('/api/post', postRoute)

//Routes to the servers
app.get('/', (req, res) => res.send('Hello from the back-end'))
