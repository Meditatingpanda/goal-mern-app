const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Add a name"],
    },
    username: {
      type: String,
      required: [true, "Please Add a username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Add a Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
