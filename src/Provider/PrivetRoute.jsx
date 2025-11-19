import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }

    if (user && user?.email) {
        return children;
    }

    // return <Navigate state={location.pathname} to="/login"> </Navigate>
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRoute;