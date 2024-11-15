import express from "express";

import { getName, getHobby, getDream } from "../controllers/controller.js";

const router = express.Router();

router.get("/name", getName);
router.get("/hobby", getHobby);
router.get("/dream", getDream);

export default router;
