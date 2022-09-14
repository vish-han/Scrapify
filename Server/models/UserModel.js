const mongoose = require('mongoose');

const Users=mongoose.Schema({
fullname:{type:"string",required:"true"},
password:{type:"string",required:"true"},
email:{type:"string",required:"true"},
number:{type:"string",required:"true"},
address:{type:"string",required:"true"},
isHouseHolding:{type:"boolean",default:"true"},
isDealer:{type:"boolean",required:"true",default:"false"}

})
 module.exports = mongoose.model('Users', Users);