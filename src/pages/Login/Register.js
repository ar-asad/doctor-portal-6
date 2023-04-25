import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';


const Register = () => {
    const { createUser, googleSignIn, updateUserProfile } = useContext(AuthContex)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data.name)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                toast.success('User created Successfully!');
                const userInfo = {
                    displayName: data.name

                }
                updateUserProfile(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(e => console.error(e))

            })
            .catch(err => console.error(err))
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
                        {/* {signInError} */}
                        < input className='btn w-full max-w-xs text-white' type="submit" value='Sign Up' />
                    </form >
                    <p>Already have an account? <Link to='/login'><small className='text-secondary'>Please login</small></Link></p>

                    <div className="divider" > OR</div >
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline" > Continue With Google</button >
                </div >
            </div >
        </div >
    );
};

export default Register;