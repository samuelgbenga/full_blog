import { BlogModel } from "../model/blog-model.js";

// get all users
export const getUsers = async (req, res) => {
  var blog;
  try {
    blog = await BlogModel.find();
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "server error" });
  }
  return res.status(200).json({ blog });
};
