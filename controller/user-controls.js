import { UserModel } from "../model/user-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecretKey = process.env.JWT_SECRET_KEY;
// get all users
export const getUsers = async (req, res) => {
  var user;
  try {
    user = await UserModel.find();
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "server error" });
  }
  return res.status(200).json({ user });
};

// add user
export const addUser = async (req, res) => {
  var existingUser;
  const { name, email, password } = req.body;

  let token;
  try {
    existingUser = await UserModel.findOne({ name });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "user already exist" });
  }

  // hash user password using bcrypt
  const hashedPass = bcrypt.hashSync(password);
  const newUser = new UserModel({
    name,
    email,
    password: hashedPass,
    blog: [],
  });

  try {
    try {
      token = jwt.sign(
        { id: newUser._id, name: newUser.name, email: newUser.email },
        jwtSecretKey
      );
    } catch (err) {
      res.status(501).json({ message: "unable to generate token" });
      return console.log(err);
    }
    await newUser.save();
  } catch (err) {
    res.status(501).json({ message: "unable to create user" });
    return console.log(err);
  }
  //

  return res.status(200).json({
    message: "successfully signup with generated token",
    token: token,
  });
};

// login as already existing user
export const loggin = async (req, res) => {
  var existingUser;
  const { name, password } = req.body;

  let token;
  try {
    existingUser = await UserModel.findOne({ name });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "user does not exist" });
  }
  // compare user password
  let comparePass = bcrypt.compareSync(password, existingUser.password);

  if (!comparePass) {
    return res.status(404).json({ message: "incorrect password" });
  } else {
    // generate token
    try {
      token = jwt.sign(
        {
          id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
        },
        jwtSecretKey
      );
    } catch (err) {
      res.status(501).json({ message: "unable to generate jwt" });
      return console.log(err);
    }
  }
  return res.status(201).json({ message: "loggin successful", token: token });
};

// validate user token to remain
export const validateUser = (req, res) => {
  return new Promise(async (resolve, reject) => {
    if (req.headers && req.headers.authorization) {
      let authorization = req.headers.authorization;
      let decodedToken;
      try {
        decodedToken = jwt.verify(authorization, jwtSecretKey);
      } catch (err) {
        reject("token not valid");
      }
      if (decodedToken) resolve("valid token detected");
      let user_id = decodedToken.id;
      let existingUser;
      try {
        existingUser = await UserModel.findById(user_id);
      } catch (err) {
        res.status(404).json("user does not exist");
        return console.log(err);
      }
    } else reject("no token found");
  });
};
