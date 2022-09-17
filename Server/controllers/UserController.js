const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// twillio
const accountSid = "ACccbf6dffd8991b3c994e8820d8ba3c11";
const authToken = "f0d447950e0669f5b30b1fa130c0078a";
const client = require("twilio")(accountSid, authToken);

const register = async (req, res) => {
  const {name, email, address, number, poster_path, userkind, isLocalAdmin} = req.body;

  client.messages
    .create({
      body: "Hey!! You have successfully registered in the SCRAPIFY, it's time to make a deal",
      from: "whatsapp:+14155238886",
      to: `whatsapp:${number}`,
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err))
    .done();

  try {
    let checkEmail = await User.findOne({ email: email });
    if (checkEmail) {
      res.status(400).json({ message: "Email already Exist" });
    }

    const pass = bcrypt.hashSync(req.body.password, 8)

    let user = await User.create({
      name: name,
      email: email,
      password: pass,
      address: address,
      number: number,
      userkind: userkind,
      poster_path: poster_path,
      isLocalAdmin: isLocalAdmin
    });

    const token = generateToken(user._id);
    const { password, ...rest } = user;

    res.status(200).json({
      ...rest._doc,
      token: token,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
const login = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "Wrong Credentials" });
    }
    const passCompare = await bcrypt.compare(req.body.password, user.password);
    if (!passCompare) {
      return res.status(400).json({ error: "Wrong Credentials" });
    }

    const token = generateToken(user._id);
    const { password, ...rest } = user;

    res.status(200).json({
      ...rest._doc,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const userDetail = async (req, res) => {
  try {
    const id = req.params.id;
    let user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({ error: "User does not exist :(" });
    }

    const {password, ...rest} = user;

    res.status(200).json(rest._doc);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { register, login, userDetail };
