const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

//@desc get goals
//@route api/goals
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});
const postGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add Text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});
const putGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  const deleteGoal = await Goal.findByIdAndDelete(req.params.id);
  if (deleteGoal) {
    res.status(200).json({ msg: "Successfully deleted!!" });
  } else {
    res.status(400);
    throw new Error("Internal Error");
  }
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
