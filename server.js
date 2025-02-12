// Import Express
const express = require('express')


// Create an Express app
const app = express()



// Define routes here


app.get('/greetings/:username', (req, res) => {
        res.send(`Hello there, ${req.params.username}`)
    });


