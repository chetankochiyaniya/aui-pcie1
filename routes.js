var express = require('express');
var router = express.Router();
var Menu = require('./Models/Menu')


//to fetch data
router.get('/foodmenu',async(req,res)=>{
    const foodmenu = await Menu.find()
    res.send(foodmenu)
})

//to add the data
router.post("/foodmenu",async(req,res)=>{
    const foodmenu = new Menu({
        name:req.body.name,
        category:req.body.category,
        price:req.body.price
    })

    await foodmenu.save((err,msg)=>{
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