import PostMessage from '../models/postSchema.js';

export const getPosts = async (req, res) => {
    try{
        const posts = await PostMessage.find();
        console.log(posts);
        res.status(200).json(posts);

    }catch (err) {
        res.status(404).json({message: err.message});
    }
}
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(409).json({message: err.message});
    }
}
export const deletePost = async (req, res) =>{
    try{
        const {id} = req.params;
        await PostMessage.findByIdAndRemove(id);
        res.json({ message: "Post deleted successfully." });
    }catch(err){
        res.json({message: err.message});
    }
}   
export const likePost = async (req, res) =>{
    try{
        const {id} = req.params;
        const post = await PostMessage.findById(id);
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
        res.json(updatedPost);
    }catch(err){
        res.json({message: err.message});
    }
}
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}