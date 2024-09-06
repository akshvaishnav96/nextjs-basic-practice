import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVarified: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpire: Date,
  verifyToken: String,
  verifyTokenExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.verifyPassword = async function (password) {
  try {
    const verifyPass = await bcrypt.compare(password, this.password);
    if (verifyPass) {
      console.log("password verified : " + verifyPass);
    }

    return verifyPass;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      id: this._id,
      userName: this.userName,
      email: this.email,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: Number(process.env.ACCESS_TOKEN_EXPIRY) }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN_KEY,
    { expiresIn: Number(process.env.REFRESH_TOKEN_EXPIRY) }
  );
};

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
