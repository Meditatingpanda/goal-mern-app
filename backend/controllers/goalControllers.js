const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
const User = require("../models/userModel");
//@desc get goals
//@route api/goals
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});
const putGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  //check user exits or not
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("User Not Exits");
  }

  //check it is the right user to modify data
  const temp = goal.user.toString();
  //string number compariosn occuring ifx this
  if (temp == req.user.id) {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedGoal);
  } else {
    res.status(401);
    throw new Error("Access Denied");
  }
});
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  //check user exits or not
  
  if (!req.user) {
    res.status(400);
    throw new Error("User Not Exits");
  }

  //check it is the right user to delete data
  const temp = goal.user.toString();
  //string number compariosn occuring ifx this
  
  if (temp == req.user.id) {
    await goal.remove()
    res.status(400).json({_id:goal.id})
  } else {
    res.status(401);
    throw new Error("Access Denied");
  }
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
