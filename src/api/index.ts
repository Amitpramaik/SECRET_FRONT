import axios from "axios";

export const api = axios.create({
    baseURL : import.meta.env.VITE_BASEURL,
    // headers: {
    //     'Authorization': `Bearer ${localStorage.getItem("token")}`
    // }
})

api.interceptors.request.use((config) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
    return config
})