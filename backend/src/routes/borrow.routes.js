import express from "express";
import { getBorrow , createBorrow } from '../controllers/borrow.controllers.js';

const router = express.Router();

router.get('/getborrow' , getBorrow);
router.post('/createborrow' , createBorrow);

export default router;