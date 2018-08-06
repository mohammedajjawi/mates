var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mates")

mongoose.Promise = global.Promise;




module.exports={mongoose};
