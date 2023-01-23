import { BlogModel } from "../model/blog-model.js";
import { UserModel } from "../model/user-model.js";
import mongoose from "mongoose";

// get all users
export const getBlog = async (req, res) => {
  var blog;
  try {
    blog = await BlogModel.find();
  } catch (err) {
    return console.log(err);
  }
  if (blog.length === 0) {
    return res.status(500).json({ message: "there is no blog" });
  }
  return res.status(200).json({ blog });
};

// add blog module controller
export const addBlog = async (req, res) => {
  const { title, content, user_ref } = req.body;

  let isValidUserRef = mongoose.Types.ObjectId.isValid(user_ref);
  if (!isValidUserRef) {
    return res.status(404).json({ message: "the user is not valid" });
  }
  var existingUser;
  try {
    existingUser = await UserModel.findById(user_ref);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "user does not exist" });
  }

  const newBlog = new BlogModel({ title, content, user_ref });
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    await newBlog.save({ session });
    existingUser.blogs.push(newBlog);
    await existingUser.save({ session });
    await session.commitTransaction();
    session.endSession();
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    return console.log(err);
  }
  return res.status(200).json({ newBlog });
};
