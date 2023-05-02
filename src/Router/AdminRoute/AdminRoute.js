import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    console.log(user)
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <h1 className='text-4xl text-center'>Loading.......</h1>
    }
    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default AdminRoute;