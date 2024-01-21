import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/";
export const connectDb = async () => {
  mongoose
    .connect(uri, { dbName: "Ecommerce" })
    .then((c) => {
      console.log(`Connected to ${c.connections[0].name}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
