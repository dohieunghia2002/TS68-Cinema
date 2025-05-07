import express from 'express';
import userController from '../controllers/user.controller.js';
import middlewares from '../middlewares/token.js';

const router = express.Router();

router.get('/all', middlewares.verifyTokenAdmin, userController.getAllUser);

export default router