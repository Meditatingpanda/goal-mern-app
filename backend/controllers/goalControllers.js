const asyncHandler = require("express-async-handler");

//@desc get goals
//@route api/goals
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "get goals" });
});
const postGoals = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please Add Text field");
  }
  console.log(req.body);
  res.status(200).json({ msg: "Post a goal" });
});
const putGoals = asyncHandler((req, res) => {
  res.status(200).json({ msg: `${req.params.id} Update` });
});
const deleteGoals = asyncHandler((req, res) => {
  res.status(200).json({ msg: `${req.params.id} delete` });
});

module.exports = {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
};
