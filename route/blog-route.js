import express from "express";
import { getBlog } from "../controller/blog-controls.js";

const blogRoute = express.Router();

blogRoute.get("/", getBlog);

export default blogRoute;
