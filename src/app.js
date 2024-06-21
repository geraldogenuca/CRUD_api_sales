// Loading environment variables.
require("dotenv").config()

// Starting frameworks libs and dependencies.
const express = require("express")
, app = express()
, morgan = require("morgan")
, cors = require("cors")

//


// routes import

// Carrier frameworks libs and dependencies.
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static("../public"))
app.use(morgan('dev'))
app.use(cors())

// Allow the URL to access the API with CORS.
app.use((req, res, next) => {
    //Which site is allowed to make the connection, in the example below there is the "*" indicating.
    res.header("Access-Control-Allow-Origin", "*"),    
    //What are the methods that the connection can perform in the API.
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    app.use(core())
})

// get ROUTES to project



// Created module for export.
module.exports = app