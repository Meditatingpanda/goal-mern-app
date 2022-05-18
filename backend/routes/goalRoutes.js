const express = require("express");
const {
  getGoals,
  postGoals,
  putGoals,
  deleteGoals,
} = require("../controllers/goalControllers");
const router = express.Router();

router.route("/").get(getGoals).post(postGoals);
router.route("/:id").put(putGoals).delete(deleteGoals);

module.exports = router;
