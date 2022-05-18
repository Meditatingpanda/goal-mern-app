const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Register new user
//method POST api/users
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    res.status(400);
    throw new Error("All Field Mandetory");
  }
  //check user exist
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  //hash passwrod
  const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(password, salt);
  //create user

  const user = await User.create({
    name,
    username,
    password: hashPwd,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Data");
  }
});
//@desc Auth registered user
//method POST api/users/login
//access public
const authenticateUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  //find username
  const user = await User.findOne({ username });
  //check password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Unauthorized");
  }
});
//@desc get user data
//method GET api/users/me
//access PRIVATE
const getUser = asyncHandler(async (req, res) => {
  res.json({ msg: "got!!" });
});

//generate token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = {
  registerUser,
  authenticateUser,
  getUser,
};
