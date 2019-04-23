const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('')





app.get('/test', (req,res)=>res.json({msg: 'user works'}))

module.exports = router