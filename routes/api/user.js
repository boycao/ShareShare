const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')

const User = require('../../models/User')

//@route GET api/users/test
//@desc Tests users route
//@access public
router.get('/test', (req,res)=>res.json({msg: 'user route works'}))
//@route GET api/users/register
//@desc user registration
//@access public
router.post('/register',(req,res)=>{
    User.findOne({
        email: req.body.email
    }).then(user =>{
        if(user){
            return res.status(400).json({email: 'Email already exists'})
        }else{
            const avatar = gravatar.url(req.body.email,{
                s:'200',
                r:'pg',
                d:'mm'
            })
        }
    })
})

module.exports = router