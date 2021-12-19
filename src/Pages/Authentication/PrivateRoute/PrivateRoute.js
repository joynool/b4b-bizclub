import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { StarIcon } from '@heroicons/react/outline';

function PrivateRoute ({ children })
{
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return <div className='flex items-center justify-center'>
            <StarIcon className='animate-spin h-10 w-10 text-white' />
        </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute
