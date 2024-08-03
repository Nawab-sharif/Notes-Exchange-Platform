const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

// Middleware
app.use(express.json());
app.use(cors());


//Require and Mount the router To use 
const Route = require('./router/router')
app.use('/api' , Route)


// Database here
const connectdb = require('./database/db');
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at: http://127.0.0.1:${PORT}`)
    })
});