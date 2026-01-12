import express from "express";
import { createFrequently , getFrequently } from "../controllers/frequently.controllers.js";

const router = express.Router();

router.get('/getFrequently', getFrequently);
router.post('/createFrequently' , createFrequently);

export default router;