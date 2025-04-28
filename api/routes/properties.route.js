import express from 'express'
import { createProperties } from '../controllers/properties.controller.js';

const router = express.Router();

router.post('/create', createProperties)

export default router;