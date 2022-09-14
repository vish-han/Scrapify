const Users=require('../models/UserModel')
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    try {

        let User=await Users.create({fullname:req.body.fullname,email:req.body.email,password:bcrypt.hashSync(req.body.password, 8),address:req.body.address,isDealer:req.body.isDealer,isHouseHold:req.body.isHouseHold,number:req.body.number});
        res.status(200).json(User);
    } catch (error) {
        res.status(400).json(error);
    }
}
const login=async(req, res)=>{
    
        console.log(req.method);
        try {
          const email = req.body.email;
          const password = req.body.password;
          const user = await Users.findOne({ email: email });
          if (!user) {
            res.status(404).json({ error: "user does not exist" });
          }
          const passCompare = bcrypt.compare(password, user.password);
          if (!passCompare) {
            return res.status(400).json({ error: "Wrong Credentials" });
          }
          res.status(200).json({message: "You are logged in successfully"});
        } catch (error) {
          res.status(400).json({ error: error });
        }
      
}
module.exports ={register,login};


