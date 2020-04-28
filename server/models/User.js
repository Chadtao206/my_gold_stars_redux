const bcrypt = require("bcrypt");
const mongoose = require("../config/mongoose");

const SALT_ROUNDS = 12;

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  fullname: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  stars: {
    type: Number,
    default: 0
  },
  badges: {
    type: Array,
    default: []
  }
});

userSchema.pre("save", function() {
  if (!this.isModified("password")) {
    return Promise.resolve();
  }
  if (this.password.length < 3) {
    return Promise.reject(
      new Error("Password must have at least 4 characters")
    );
  }
  return bcrypt.hash(this.password, SALT_ROUNDS).then(hash => {
    this.password = hash;
  });
});

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
