const express = require('express')
const router = express.Router()

router.get('/test',()=> res.json({msg: "post route works"}))

module.exports = router