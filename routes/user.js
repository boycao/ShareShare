const express = require('express')
const router = express.Router()





app.get('/test', (req,res)=>res.json({msg: 'user works'}))

module.exports = router