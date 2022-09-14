const mongoose = require('mongoose');

const User=mongoose.Schema({
fullname:{type:"string",required:"true"},
password:{type:"string",required:"true"},
email:{type:"string",required:"true"},
number:{type:"string",required:"true"},
address:{type:"string",required:"true"},
isHouseHolding:{type:"boolean",required:"true"},
isDealer:{type:"boolean",required:"tru,e"}

})
export const Users = mongoose.model('User', User);