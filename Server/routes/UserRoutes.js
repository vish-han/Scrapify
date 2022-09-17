const express = require("express");
const {
  register,
  login,
  userDetail,
  updateUser,
} = require("../controllers/UserController");
const Router = express.Router();

Router.post("/register", register), Router.post("/login", login);
Router.get("/:id", userDetail);
Router.put("/update", updateUser);

module.exports = Router;
