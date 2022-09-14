const mongoose = require('mongoose');

const UserSchema =mongoose.Schema({
fullname:{type:"string",required:"true"},
password:{type:"string",required:"true"},
email:{type:"string",required:"true"},
number:{type:"string",required:"true"},
address:{type:"string",required:"true"},
isHouseHold:{type:"boolean",default:"true"},
isDealer:{type:"boolean",default:"false",}

})
const User = mongoose.model("User", UserSchema)
module.exports = User;