import express from "express";
import {
  addUser,
  getUsers,
  loggin,
  validateUser,
} from "../controller/user-controls.js";

const userRoute = express.Router();

userRoute.get("/", getUsers);
userRoute.post("/add", addUser);
userRoute.post("/loggin", loggin);
userRoute.get("/validateUser", validateUser);

export default userRoute;
