const express = require("express");
const {
  registerUser,
  authenticateUser,
  getUser,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", authenticateUser);
router.get("/me", protect, getUser);

module.exports = router;
