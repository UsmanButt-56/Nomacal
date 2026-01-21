import express from "express";
import { createloan } from '../controllers/loanrequest.controllers.js';
import { upload } from "../config/multer.config.js";

const router = express.Router();

//router.post('/createloan' , createloan);
router.post(
  "/createloan",
  upload.fields([
    { name: "lisence_front", maxCount: 1 },
    { name: "lisence_back", maxCount: 1 },
    { name: "user_signed", maxCount: 1 }
  ]),
  createloan
);

export default router;