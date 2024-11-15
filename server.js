import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import InfoRoute from "./routes/route.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", InfoRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
