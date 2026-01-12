import express from 'express';
import { createTerms, getTerms } from '../controllers/terms.controllers.js';

const router = express.Router();

router.get('/getterms' , getTerms);
router.post('/createterms' , createTerms);

export default router;