import express from 'express';
import {signUp,login} from '../controllers/user.controller.js'
import authentication from '../middlewares/auth.js';
const userRouter = express.Router();

userRouter.route('/signup').post(signUp);
userRouter.route('/login').post(login);

export default userRouter;