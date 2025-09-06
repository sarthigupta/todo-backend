import express from 'express';
import authentication from '../middlewares/auth.js';
import {createTodo,updateTodo,deleteTodo, getTodo} from '../controllers/todo.controller.js'
const todoRouter = express.Router();

todoRouter.route('/createTodo').post(authentication,createTodo);
todoRouter.route('/:id').put(authentication,updateTodo);
todoRouter.route('/deleteTodo').post(authentication,deleteTodo);
todoRouter.route('/getTodos').get(authentication,getTodo);

export default todoRouter;