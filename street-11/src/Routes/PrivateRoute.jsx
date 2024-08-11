import React, { useContext } from 'react'
import { authProvider } from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(authProvider);
    const location = useLocation();
    if (loading) {
        return <div>Loading...</div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    )
}
