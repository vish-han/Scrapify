const Users = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { use } = require("../routes/UserRoutes");

const register = async (req, res) => {
  try {
    let checkEmail = await Users.findOne({ email: req.body.email });
    if (checkEmail) {
      res.status(400).json({ message: "Email already Exist" });
    }
    let User = await Users.create({
      fullname: req.body.fullname,
      email: req.body.email,
      transaction: {
        HouseHold: req.body.transactions.HouseHold,
        Dealer: req.body.transactions.Dealer,
        isSuccessfull: req.body.transactions.isSuccessfull,
      },
      password: bcrypt.hashSync(req.body.password, 8),
      address: req.body.address,
      isDealer: req.body.isDealer,
      isHouseHold: req.body.isHouseHold,
      number: req.body.number,
    });
    res.status(200).json(User);
  } catch (error) {
    res.status(400).json(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Wrong Credentials" });
    }
    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
      return res.status(400).json({ error: "Wrong Credentials" });
    }

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occoured");
  }
};

const userDetail = async (req, res) => {
  try {
    fullname = req.params.fullname;
    let user = await Users.findOne({ fullname: fullname });
    if (!user) {
      return res.status(400).json({ error: "User does not exist :(" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { register, login, userDetail };
