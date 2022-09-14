const User=require('../models/UserModel')

const register = async (req, res) => {
    let User=await User.create({name:req.body.name,email:req.body.email,password:req.body.password,address:req.body.address,isDealer:req.body.isDealer,isHouseHold:req.body.isHouseHold,number:req.body.number});
    res.json(User)
}
module.exports ={register};


