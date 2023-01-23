import mongoose from "mongoose";

// Define schema
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: "string",
    require: true,
  },
  content: {
    type: "string",
    require: true,
  },
  user_ref: {
    type: mongoose.Types.ObjectId,
    ref: "UserModel",
    require: true,
  },
});

export const BlogModel = mongoose.model("BlogModel", BlogSchema);
