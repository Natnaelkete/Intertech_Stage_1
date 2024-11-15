import express from "express";

import {
  getWelcome,
  getName,
  getHobby,
  getDream,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/", getWelcome);
router.get("/name", getName);
router.get("/hobby", getHobby);
router.get("/dream", getDream);

export default router;
