import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import InfoRoute from "./routes/route.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/", InfoRoute);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server in running on port ${PORT}`);
});
