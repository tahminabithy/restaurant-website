import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { authProvider } from '../Context/AuthContext'
import useAxiosSecure from './useAxiosSecure';

export default function useAdmin() {
    const { user } = useContext(authProvider);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            console.log("adim ki?", res.data);
            return res?.data.isAdmin
        }
    })
    return [isAdmin]
}
