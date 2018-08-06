var mongoose = require("mongoose");


var items = mongoose.model("items", {
    itemName: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    price:{
        type:Number,
        required:true,
    }

})

module.exports ={
    items
}