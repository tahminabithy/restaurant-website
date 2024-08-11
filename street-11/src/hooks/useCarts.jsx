import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { authProvider } from "../Context/AuthContext"
import useAxiosSecure from "./useAxiosSecure"

export const useCarts = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(authProvider)
    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/carts?email=${user?.email}`)
            console.log(data);
            return data
        },
    })
    return [carts, refetch]
}


