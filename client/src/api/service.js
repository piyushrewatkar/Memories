import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url+'/get');
export const createPost = (post) => axios.post(url+'/create', post);
export const deletePost = (id) => axios.delete(url+`/delete/${id}`);
export const likePost = (id) => axios.patch(url+`/like/${id}`);
export const updatePost = (id, updatedPost) => axios.patch(url+`/update/${id}`, updatedPost);