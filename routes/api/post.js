const express = require('express')
const router = express.Router()

router.get('/test',()=> res.json({msg: "post init works"}))

module.exports = router