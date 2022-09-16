const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: { type: "string", required: "true" },
    poster_path: {
      type: "string",
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6DwQb05xlCpS5qcHLCzTLs9rvhe8GvAIFZn77fjh&s",
    },
    password: { type: "string", required: "true" },
    email: { type: "string", required: "true" },
    number: { type: "string", required: "true" },
    address: { type: "string", required: "true" },
    userkind: { type: "string", required: "true" },
    isLocalAdmin: { type: Boolean, default: "false" },
    date: { type: Date, default: Date.now() },
    ratings: { type: Number },
    disposeArea: ["string"],
    priceRate: ["string"], //as json strungified
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
