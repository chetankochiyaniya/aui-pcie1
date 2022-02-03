var express = require('express');
var router = express.Router();
var Menu = require('./Models/Menu')
var User = require('./Models/User')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')



//to fetch movies
router.get('/foodmenu',async(req,res)=>{
    const imovie = await Menu.find()
    res.send(imovie)
})

//to add the movies
router.post("/foodmenu",async(req,res)=>{
    const imenu = new Menu({
        name:req.body.name,
        category:req.body.category,
        price:req.body.price
    })

    await imenu.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/foodmenu/:id',async (req,res)=>{
    const imenu = await Menu.findOne({_id:req.params.id})
    imenu.name = req.body.name
    imenu.category=req.body.category,
    imenu.price=req.body.price
    await imenu.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/foodmenu/:name",async(req,res)=>{
    await Menu.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})


router.post('/users',async(req,res)=>{
    
    //generate salt key
    salt = await bcrypt.genSalt(10)
    console.log(salt)

    hashedpswd = await bcrypt.hash(req.body.password,salt)
    console.log(hashedpswd)

    const iuser = new User({
        uname:req.body.uname,
        password:hashedpswd
    })  
    await iuser.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})














module.exports = router 