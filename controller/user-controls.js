import { UserModel } from "../model/user-model.js";
import bcrypt from "bcryptjs";

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
    await newUser.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ newUser });
};

// login as already existing user
export const loggin = async (req, res) => {
  var existingUser;
  const { name, password } = req.body;

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
  }
  return res.status(201).json({ message: "loggin successful" });
};
