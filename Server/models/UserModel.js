const mongoose = require("mongoose");
// const Transactions = require('./TransactionModel')
const TransactionSchema = mongoose.Schema({
  HouseHold: { type: "string", required: "true" },
  Dealer: { type: "string", required: "true" },
  date: { type: Date, default: Date.now() },
  isSuccessfull: { type: "boolean" },
});
const UserSchema = mongoose.Schema({
  fullname: { type: "string", required: "true" },
  password: { type: "string", required: "true" },
  email: { type: "string", required: "true" },
  number: { type: "string", required: "true" },
  address: { type: "string", required: "true" },
  isHouseHold: { type: "boolean", default: "true" },
  isDealer: { type: "boolean", default: "false" },
  date: { type: Date, default: Date.now() },
  transactions: TransactionSchema,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
