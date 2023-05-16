import React, { useContext, useState } from 'react';
import useToken from '../../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../context/AuthProvider/AuthProvider';

const GoogleLogin = () => {
    const { googleSignIn, setLoading } = useContext(AuthContex)
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)
    const [signInError, setSignInError] = useState(null);

    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }


    // save user in database...
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })
    }

    // Google sign up....
    const handleGoogleSignIn = () =>
        googleSignIn()
            .then(result => {
                saveUser(result.user.displayName, result.user.email)
                setCreateUserEmail(result.user.email)
            })
            .catch(e => console.log(e.message))
            .finally(() => {
                setLoading(false)
            });


    return (
        <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline" > Continue With Google</button >
    );
};

export default GoogleLogin;