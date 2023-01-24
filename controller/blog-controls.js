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

// Edit or update blogpost with specific id

export const upDateBlogPost = async (req, res) => {
  const { title, content } = req.body;

  const blogId = req.params.id;

  try {
    await BlogModel.findByIdAndUpdate(blogId, { title, content });
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ message: "blog update was successful" });
};

// delete blog post blogpost with specific id

export const deleteBlogPost = async (req, res) => {
  const blogId = req.params.id;
  let existingBlog;

  // check that the blogId is valid
  let isValidUserRef = mongoose.Types.ObjectId.isValid(blogId);
  if (!isValidUserRef) {
    return res.status(404).json({ message: "not a valid blog" });
  }

  try {
    existingBlog = await BlogModel.findByIdAndDelete(blogId).populate(
      "user_ref"
    );
    if (existingBlog) {
      await existingBlog.user_ref.blogs.pull(existingBlog);
      await existingBlog.user_ref.save();
    }
  } catch (err) {
    return console.log(err);
  }
  if (!existingBlog) {
    return res
      .status(404)
      .json({ message: "the blog does not exist or already deleted" });
  }

  return res.status(200).json({ message: "successfully deleted" });
};

// to select a specific user blogs using id
export const getUserBlogs = async (req, res) => {
  const userId = req.params.id;
  let existingUser;

  // check if valid ref to avoid unnecessary errors
  let isValidUserRef = mongoose.Types.ObjectId.isValid(userId);
  if (!isValidUserRef) {
    return res.status(404).json({ message: "the user is not valid" });
  }

  try {
    existingUser = await UserModel.findById(userId).populate("blogs");
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "user does not exist" });
  }
  return res.status(200).json({ user_blogs: existingUser.blogs });
};
