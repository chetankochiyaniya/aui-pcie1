var mongoose = require('mongoose');

var foodmenuSchema = mongoose.Schema({
    name:String,
    category:String,
    price:Number
})

module.exports = mongoose.model("foodmenu",foodmenuSchema)
