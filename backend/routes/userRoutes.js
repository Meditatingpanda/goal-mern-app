const express = require("express");
const {
  registerUser,
  authenticateUser,
  getUser,
} = require("../controllers/userControllers");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", authenticateUser);
router.get("/me", getUser);

module.exports = router;
