import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appoinmentSpecialty')
            const data = await res.json();
            return data
        }
    })

    const handleAddToDoctor = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=70f379dcf3f37aca4c94d2b09927c088`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.spacialty,
                        image: imgData.data.url
                    }

                    // save doctor information to the database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json)
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`);
                            Navigate('/dashboard/managedoctors')
                        })

                }
                // // console.log(imgData)
            })
    }

    if (isLoading) {
        return <h2 className='text-4xl font-semibold'>Loading.....</h2>
    }
    return (
        <div className='mt-5'>
            <h2 className='text-4xl'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddToDoctor)}>
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
                        <span className="label-text" > Speacialty</span >
                    </label >
                    <select
                        {...register('spacialty')}
                        className="select select-bordered w-full max-w-xs mb-3 ">
                        <option disabled selected>Please Select a Specialty </option>
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty?.name}</option>)
                        }

                    </select>
                </div >
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label >
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Photo is Required'
                            }
                        })
                        }
                    />
                    < label className="label" >
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.img.message}</span>}

                    </label >
                </div >

                {/* {signInError} */}
                < input className='btn w-full max-w-xs text-white' type="submit" value='Add Doctor' />
            </form >
        </div>
    );
};

export default AddDoctors;