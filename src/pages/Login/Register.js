import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';
import GoogleLogin from './SocialLogin/GoogleLogin';


const Register = () => {
    const { createUser, updateUserProfile, setLoading } = useContext(AuthContex)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)
    const [signInError, setSignInError] = useState(null);

    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }



    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                // console.log(result.user)
                toast.success('User created Successfully!');
                const userInfo = {
                    displayName: data.name

                }
                updateUserProfile(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(e => console.error(e))

            })
            .catch(err => {
                console.error(err)
                setSignInError(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
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

    // used it before make useToken hooks....
    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken)
    //                 navigate('/')

    //             }
    //         })
    // }


    return (
        <div className='flex h-screen justify-center items-center' >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label >
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })
                                }
                            />
                            < label className="label" >
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.name.message}</span>}

                            </label >
                        </div >

                        <div className="form-control w-full max-w-xs" >
                            <label className="label" >
                                <span className="label-text" > Email</span >
                            </label >
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })
                                }
                            />
                            < label className="label" >
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500" > {errors.email.message}</span >}

                            </label >
                        </div >
                        <div className="form-control w-full max-w-xs" >
                            <label className="label" >
                                <span className="label-text" > Password</span >
                            </label >
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })
                                }
                            />
                            < label className="label" >
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500" > {errors.password.message}</span >}

                            </label >
                        </div >
                        <p className='text-red-500 font-semibold mb-2'>{signInError}</p>
                        < input className='btn w-full max-w-xs text-white' type="submit" value='Sign Up' />
                    </form >
                    <p>Already have an account? <Link to='/login'><small className='text-secondary'>Please login</small></Link></p>

                    <div className="divider" > OR</div >
                    <GoogleLogin></GoogleLogin>
                </div >
            </div >
        </div >
    );
};

export default Register;