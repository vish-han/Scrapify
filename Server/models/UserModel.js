const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: { type: "string", required: "true" },
    poster_path: {
      type: "string",
      default:
        "https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/default-FFA-avatar.2f8c2a0592bda1c5.png",
    },
    password: { type: "string", required: "true" },
    email: { type: "string", required: "true" },
    phone: { type: String, required: "true" },
    bio: {type: String, default: "A Student from Delhi, Doing his bit to save the environment"},
    address: { type: "string", required: "true" },
    userkind: { type: "string", required: "true" },
    isLocalAdmin: { type: Boolean, default: "false" },
    date: { type: Date, default: Date.now() },
    ratings: { type: Number },
    disposeArea: ["string"],
    rewards: { type: Number, default: 0 },
    priceRate: ["string"], //as json strungified
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
