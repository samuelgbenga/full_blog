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
  creator: {
    type: "string",
    require: true,
  },
  user: {
    type: "string",
    required: true,
  },
});

export const BlogModel = mongoose.model("BlogModel", BlogSchema);
