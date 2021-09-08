import mongoose from 'mongoose';
import Utility from '../models/Utility.js';

// Create
export const createPost = async (req, res) => {
    // console.log("Hello from createPost in server")
    const newUtility = req.body;

    const newPost = new Utility(newUtility);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// Retrieve
export const getPosts = async (req, res) => {
    // console.log("Hello from getPosts in server")
    try {
        const utilities = await Utility.find();
        res.status(200).json(utilities);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Delete
export const deletePost = async (req, res) => {
    // console.log("Hello from deletePost in server")
    const { id } = req.query;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No such ID!')
    }

    await Utility.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}

// Update
export const updatePost = async (req, res) => {
    // console.log("Hello from updatePost in server")
    const { id } = req.body;
    const { data } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No such ID!')
    }

    const updateUtility = await Utility.findByIdAndUpdate(id, { ...data, id }, { new: true });
    res.json(updateUtility);
}

