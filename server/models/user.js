const mongoose = require("mongoose");
const validator = require("validator")
var users = mongoose.model("users", {
    
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message:"This is not a valid email!"
            
        },
        
    },
    password: {
        type: String,
        required:true,
        minLength:0,

    },
    externalProvider:{
        provider:{
            type:String
        },
        id:{
          type:String  
        }
    },
    
    tokens:[{
        access:{
            type:String,
            required:true,

        },
        token:{
            type:String,
            required:true,

        }
    }],
    
   
})
module.exports = {
    users
}