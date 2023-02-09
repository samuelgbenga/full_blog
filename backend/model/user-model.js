import mongoose from "mongoose";

// Define schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: "string",
    require: true,
  },
  email: {
    type: "string",
    require: true,
  },
  password: {
    type: "string",
    require: true,
  },
  blogs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "BlogModel",
      require: true,
    },
  ],
});


// Compile model from schema
export const UserModel = mongoose.model("UserModel", UserSchema);
