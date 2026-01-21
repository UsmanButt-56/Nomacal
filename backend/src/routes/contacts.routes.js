import express from 'express';
import { createContact} from '../controllers/contact.controllers.js';

const router = express.Router();

router.post('/createContact' , createContact);

export default router;