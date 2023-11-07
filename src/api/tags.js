import { ACCESS_TOKEN, API_BASE_URL } from '../constants'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: `${API_BASE_URL}/api/tags`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
    }
})

const userId = localStorage.getItem('userId')

const addNewTag = async (newTag) => {
    const res = await axiosInstance.post(`/${userId}`, { name: newTag })
    return res
}

const getAllTags = async () => {
    const res = await axiosInstance.get(`${userId}`)
    return res.data
}

const deleteTagById = async (tagId) => {
    const res = await axiosInstance.delete(`/${tagId}`)
    return res
}

const getTagsByPostId = async (postId) => {
    const res = await axiosInstance.get(`/posts/${postId}/${userId}`)
    return res
}

export default {
    addNewTag,
    getAllTags,
    deleteTagById,
    getTagsByPostId
}