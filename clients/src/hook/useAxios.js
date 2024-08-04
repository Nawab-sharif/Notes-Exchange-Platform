import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (isAdmin = false, isToken = true) => {
    const [token, setToken] = useState("")

    useEffect(() => {
        const token = localStorage.getItem(isAdmin ? 'admin-token' : 'user-token')
        if (token) {
            setToken(token)
        }
    }, [])

    const axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL || "",
        headers: {
            Authorization: isToken ? token : undefined
        }
    })
    return axiosInstance
}