const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.get('/', (req,res)=>res.send('This is iShare app'))

//DB configuration
const db = require('./config/keys').mongoURI
//Connect to the Database through mongoose and test sample
mongoose
    .connect(db)
    .then(()=>console.log("MongoDB connected"))
    .catch(err => console.log(err))

//Setup the localhost and test sample
const port = process.env.port || 5000
app.listen(port,()=>console.log(`server running on ${port}`))