import express from "express";

import { getPosts, createPost, updatePost, deletePost } from '../controllers/Crud.js'

const router = express.Router();

// Create
router.post('/', createPost);
// Retrieve
router.get('/', getPosts);
// Update
router.patch('/', updatePost);
// Delete
router.delete('/', deletePost);

export default router;