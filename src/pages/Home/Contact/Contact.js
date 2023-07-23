import React from 'react';
import PrimaryButton from '../../../shared/PrimaryButton/PrimaryButton';
import appoinment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}>
            <div className='lg:w-1/2 lg:px-0 px-3 mx-auto py-16' >
                <div className='text-center mb-10'>
                    <h3 className='text-xl text-primary font-bold'>Contact Us</h3>
                    <h2 className='text-4xl text-white' > Stay connected with us</h2 >
                </div >
                <form className='flex flex-col gap-5 text-center ' >
                    <input type="email" name="email" className='rounded p-3' placeholder='Email Address' />
                    <input type="text" name="text" className='rounded p-3' placeholder='Subject' />
                    <textarea name="textarea" id="" cols="30" rows="6" className='rounded p-3' placeholder='Your message' ></textarea >
                    <PrimaryButton>Submit</PrimaryButton>
                </form >
            </div >
        </section >
    );
};

export default Contact;