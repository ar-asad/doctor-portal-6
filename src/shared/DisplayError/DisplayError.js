import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContex);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <p className='text-red-500'>Something Went Wrong </p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button className="btn btn-ghost" onClick={handleLogOut}>Sign Out</button> and log in</h4>
        </div>
    );
};

export default DisplayError;