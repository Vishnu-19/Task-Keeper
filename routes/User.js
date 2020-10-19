const  express =require('express');
const UserRouter= express.Router();
const passport=require('passport')
const passportConfig = require('../passport');
const JWT =require('jsonwebtoken');
const User =require('../models/User')
const Todo=require('../models/todo');

UserRouter.post('/register',(req,res)=>{
    const {username,password,role}=req.body;
    User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({message:{msgbody:"Error has occured",msgError:true}})
        if(user)
            res.status(400).json({message:{msgbody:"Username is taken"},msgError:true})
        else{
            const newUser=new User({username,password,role});
            newUser.save(err=>{
                if(err)
                res.status(500).json({message:{msgbody:"Error has occured1",msgError:true}})
                else{
                    res.status(201).json({message:{msgbody:"Account Successfully Created",msgError:false}})
        
                }
            })
        }
    })
})







module.exports =UserRouter;