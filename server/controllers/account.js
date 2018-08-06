var {users} = require("./../models/user");
var account ={

    loginExternal : (body) => {
        users.find({"externalProvider.id":body.authResponse.userID}).then((user)=>{
            if(user.length > 0){
                console.log(JSON.stringify(user,undefined,2))
                return ({"status":"user already exist"})
            }
            else
            {
                var usr = {
                    email:body.email,
                    password:"******",
                    externalProvider:{
                     id:body.authResponse.userID,
                     type:"facebook"
                    }
                }
                console.log(usr)
                var newUsr = new users(usr);
                newUsr.save().then(()=>{
                    return({"Status":"User has been registered"})
                })
            }
        })

    }


}

module.exports ={
    account
}