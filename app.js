import express from "express";
import userRoute from "./route/user-route.js";

const app = express();

app.use(express.json());
try {
  app.use("/user", userRoute);
} catch (err) {
  console.log(err);
}

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on this PORT ${PORT}`);
});
