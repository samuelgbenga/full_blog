import { BlogModel } from "../model/blog-model.js";
import { UserModel } from "../model/user-model.js";

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
  const { title, content, creator, user } = req.body;
  try {
    existingUser = await UserModel.findOne({ name });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({ message: "user already exist" });
  }
};
