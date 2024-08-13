import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { authProvider } from '../Context/AuthContext';

export default function AdminRoutes({ children }) {
    const { user, loading } = useContext(authProvider);
    const [isAdmin, isLoading] = useAdmin();
    const location = useLocation();

    if (loading || isLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

}
