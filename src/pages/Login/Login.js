import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import GoogleLogin from './SocialLogin/GoogleLogin';

const Login = () => {
    const { signIn, googleSignIn, setLoading } = useContext(AuthContex)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [loginError, setLoginError] = useState('');

    const [token] = useToken(loginUserEmail)

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });

    }

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                console.log(result.user)
                setLoginUserEmail(data.email)
            })
            .catch(err => {
                console.error(err)
                setLoginError(err.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => console.log(result.user))
            .catch(e => console.log(e.message))
    }


    return (
        <div className='flex h-screen justify-center items-center' >
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
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
                        <p className='text-red-500 font-semibold mb-2'>{loginError}</p>
                        < input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
                    </form >
                    <p>New to Doctors Portal? <Link to='/register'><small className='text-secondary'>Create New Account</small></Link></p>

                    <div className="divider" > OR</div >
                    {/* <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline" > Continue With Google</button > */}
                    <GoogleLogin></GoogleLogin>
                </div >
            </div >
        </div >
    );
};

export default Login;