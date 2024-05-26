import express from "express";
import { greetings } from "../controllers/Welcome.js";

const router = express.Router();

router.get("/welcome", greetings);

export default router;
