import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { authProvider } from '../Context/AuthContext'
import useAxiosSecure from './useAxiosSecure';

export default function useAdmin() {
    const { user, loading } = useContext(authProvider);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending: isLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log("admin?", res.data);
            return res?.data.isAdmin
        }
    })
    return [isAdmin, isLoading]
}
