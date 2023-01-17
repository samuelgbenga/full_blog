import express from "express";

const userRoute = express.Router();

userRoute.get("/", (req, res) => {
  res.send("this is what you get for doing nothing");
});

export default userRoute;
