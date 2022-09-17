const Transac = require("../models/TransactionModel");
const accountSid = "ACccbf6dffd8991b3c994e8820d8ba3c11";
const authToken = "f0d447950e0669f5b30b1fa130c0078a";
const client = require("twilio")(accountSid, authToken);

const getAllTransac = async (req, res) => {
  const id = req.params.id;

  try {
    Transac.find({
      $or: [
        { User: { $elemMatch: { $eq: id } } },
        { User: { $elemMatch: { $eq: id } } },
      ],
    })
      .populate("houseHold", "-password")
      .populate("dealer", "-password")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        res.status(200).send(results);
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const createTransac = async (req, res) => {
  try {
    const { houseHold, dealer, mass } = req.body;

    const newTrans = await Transac.create({
      houseHold: houseHold,
      dealer: dealer,
      mass: mass,
    });

    res.status(200).json(newTrans);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateTransac = async (req, res) => {
  try {
    const transaction = await Transac.find({ _id: req.body._id });
    if (!transaction)
      res
        .status(400)
        .json({ message: "No such transaction exist, can't update" });
    const details = await Transac.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });

    res.status(200).json(details);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTransDetails = async (req, res) => {
  const id = req.params.id;

  try {
    let details = await Transac.find({ _id: id })
      .populate("houseHold", "-password")
      .populate("dealer", "-password");

    if (!details)
      res.status(404).json({ message: "no such transaction exist" });

    res.status(200).json(details);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const newDealWhatsapp = async(req, res) => {
  const {userNo, dealerNo, hMessage, sMessage} = req.body;

  try{
    client.messages
    .create({
      body: `${hMessage}`,
      from: "whatsapp:+14155238886",
      to: `whatsapp:${userNo}`,
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err))
    .done();

    client.messages
    .create({
      body: `${sMessage}`,
      from: "whatsapp:+14155238886",
      to: `whatsapp:${dealerNo}`,
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err))
    .done();

    res.status(200).json({message: 'Notified both dealer and user'});
  }catch(err){
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  getAllTransac,
  createTransac,
  updateTransac,
  getTransDetails,
  newDealWhatsapp
};
