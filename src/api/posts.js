import { ACCESS_TOKEN, API_BASE_URL } from "../constants";
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: `${API_BASE_URL}/api/posts`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
    }
})

const userId = localStorage.getItem('userId')

const addNewPost = async (newPost) => {
    const res = await axiosInstance.post(`/${userId}`, newPost)
    return res
}

const getAllPosts = async () => {
    const res = await axiosInstance.get(`/${userId}`)
    return res.data
}

const deletePostById = async (postId) => {
    const res = await axiosInstance.delete(`/${postId}`)
    return res
}

const addTagsToPost = async (postId, tagsId) => {
    const res = await axiosInstance.post(`/addTags/${postId}`, tagsId)
    return res
}

const getPostsByTagId = async (tagId) => {
    const res = await axiosInstance.get(`/tags/${tagId}/${userId}`)
    return res
}

export default {
    addNewPost,
    getAllPosts,
    deletePostById,
    addTagsToPost,
    getPostsByTagId
}