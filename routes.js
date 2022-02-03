var express = require('express');
var router = express.Router();
var Menu = require('./Models/Menu')


//to fetch movies
router.get('/foodmenu',async(req,res)=>{
    const foodmenu = await Menu.find()
    res.send(foodmenu)
})


















module.exports = router 