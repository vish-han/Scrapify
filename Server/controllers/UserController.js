const Users=require('../models/UserModel')

const register = (req, res) => {
    const User=Users.create({name:req.name,email:req.email,password:req.password,address:req.address,isDealer:})
    
}