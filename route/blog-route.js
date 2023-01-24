import express from "express";
import {
  addBlog,
  deleteBlogPost,
  getBlog,
  getUserBlogs,
  upDateBlogPost,
} from "../controller/blog-controls.js";

const blogRoute = express.Router();

blogRoute.get("/", getBlog);
blogRoute.post("/addBlog", addBlog);
blogRoute.post("/update/:id", upDateBlogPost);
blogRoute.delete("/deleteBlog/:id", deleteBlogPost);
blogRoute.get("/getUserBlogs/:id", getUserBlogs);

export default blogRoute;
