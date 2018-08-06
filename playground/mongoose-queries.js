var {mongoose} = require("./../server/db/mongoose");
const {items} = require("./../server/models/item")

var id = "5b6162622df0083a3070253c";

items.find({
    _id : id
}).then((items)=>{
    console.log('items',items)

})

items.findOne({
    _id : id
}).then((items)=>{
    console.log('items',items)
})