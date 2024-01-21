import mongoose, { Document } from "mongoose";
import validator from "validator";

interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  gender: "male" | "female" | "other";
  dob: Date;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
  // Virtual Attributes
  age: number;
}
const Schema = new mongoose.Schema(
  {
    _id: { type: String, required: [true, "ID is required"] },
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email already exists"],
      validate: [validator.default.isEmail, "Please Enter Valid Email"],
    },
    photo: { type: String, required: [true, "Photo is required"] },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      require: [true, "Please Enter Gender"],
    },
    dob: { type: Date, required: [true, "Please Enter Date of Birth"] },
  },
  {
    timestamps: true,
  }
);

Schema.virtual("age").get(function (this: any) {
  const today = new Date();
  const dob = new Date(this.dob);
  let age = today.getFullYear() - dob.getFullYear();
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
});

const User = mongoose.model<IUser>("User", Schema);

export default User;
