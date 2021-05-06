import express from "express";
import {getPosts, createPost, deletePost, likePost,updatePost,getPost} from '../controllers/postsController.js'

const postRouter = express.Router();

postRouter.get('/get', getPosts);
postRouter.post('/create', createPost);
postRouter.delete('/delete/:id', deletePost);
postRouter.patch('/like/:id', likePost);
postRouter.get('/get/:id', getPost);
postRouter.patch('/update/:id',updatePost);

export default postRouter;