import express from "express";
import { addBlog, getBlog } from "../controller/blog-controls.js";

const blogRoute = express.Router();

blogRoute.get("/", getBlog);
blogRoute.post("/addBlog", addBlog);

export default blogRoute;
