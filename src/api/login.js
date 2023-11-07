import { ACCESS_TOKEN, API_BASE_URL } from "../constants";
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
    }
})

const getCurrentUser = async () => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return "No access token set.";
    }
    const res = await axiosInstance.get(`/user/me`)
    return res.data
}

const login = async (loginRequest) => {
    const res = await axiosInstance.post(`/auth/login`, loginRequest)
    return res
}

const signup = async (signupRequest) => {
    const res = await axiosInstance.post(`/auth/signup`, signupRequest)
}

export default {
    getCurrentUser,
    login,
    signup
}