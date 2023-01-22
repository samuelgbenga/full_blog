import express from "express";
import userRoute from "./route/user-route.js";
import mongoose from "mongoose";
import blogRoute from "./route/blog-route.js";

const app = express();

const db =
  "mongodb+srv://admin:admin@cluster0.lwzv3fo.mongodb.net/?retryWrites=true&w=majority";

const PORT = 5000;

app.use(express.json());
try {
  app.use("/user", userRoute);
  app.use("/blog", blogRoute);
} catch (err) {
  console.log(err);
}

mongoose.set("strictQuery", false);

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Running on this PORT ${PORT}`);
});

// mongodb password: kV2@eSTjRMw@jfA

//mongodb+srv://admin:<password>@cluster0.lwzv3fo.mongodb.net/?retryWrites=true&w=majority
