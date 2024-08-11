import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { authProvider } from '../Context/AuthContext'
import useAxiosSecure from './useAxiosSecure';

export default function useAdmin() {
    const { user } = useContext(authProvider);
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await useAxiosSecure(`/users/admin/${user?.email}`,)
            console.log(res);
            return res?.data.isAdmin
        }
    })
    return [isAdmin]
}
