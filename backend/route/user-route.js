import express from "express";
import { addUser, getUsers, loggin } from "../controller/user-controls.js";

const userRoute = express.Router();

userRoute.get("/", getUsers);
userRoute.post("/add", addUser);
userRoute.post("/loggin", loggin);

export default userRoute;
