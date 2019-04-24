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
            //Build the new user if there is no same user existed
            const newUser = new User({
                name: req.body.name,
                email: req.body.name,
                avatar,
                password: req.body.password
            })
            //Build the avatar
            const avatar = gravatar.url(req.body.email,{
                s:'200',
                r:'pg',
                d:'mm'
            })
            //Hash the password
            bcrypt.genSalt(20,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err))

                 })
            })
        }
    })
})

module.exports = router