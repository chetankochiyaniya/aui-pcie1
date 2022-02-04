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


// api for updating data
router.patch('/foodmenu/:id',async (req,res)=>{
    const foodmenu = await Menu.findOne({_id:req.params.id})
    foodmenu.name = req.body.name
    foodmenu.category = req.body.category
    foodmenu.price=req.body.price

    await foodmenu.save((err,msg)=>{
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


router.delete('/foodmenu/:id', async (request, response) => {   // delete by id
    const _id = request.params.id;
    const strategy = await Menu.findByIdAndDelete(_id);
    response.send(strategy);
})

module.exports = router;
