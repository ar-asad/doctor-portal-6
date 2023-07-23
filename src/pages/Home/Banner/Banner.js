import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            position: 'center'
        }} className="hero lg:min-h-screen lg:mt-0 lg:mb-0 mb-20 mt-6" >
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse " >
                <img src={chair} className="max-w-sm lg:w-1/2 lg:mb-0 mb-5 w-full rounded-lg shadow-2xl" alt='banner' />
                <div className='lg:w-1/2 '>
                    <h1 className="lg:text-5xl text-4xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6" > Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p >
                    <PrimaryButton>get started</PrimaryButton>
                </div >
            </div >
        </div >
    );
};

export default Banner;