import express from "express";
const app = express();
const port = 3000;
//Using MongoDB
import { connectDb } from "./utils/features.js";
connectDb();

// Using Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing Routes
import userRoutes from "./routes/user.js";
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Using Routes
app.use("/api/v1/user", userRoutes);

// Starting Server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
