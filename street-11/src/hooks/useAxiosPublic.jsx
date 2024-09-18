import axios from 'axios'
import React from 'react'
const axiosPublic = axios.create({
    baseURL: "https://street11-real-server-main.vercel.app",
})
export default function useAxiosPublic() {
    return axiosPublic
}
