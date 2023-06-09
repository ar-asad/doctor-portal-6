import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../shared/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            position: 'center'
        }} className="hero min-h-screen " >
            <div className="hero-content flex-col gap-10 lg:flex-row-reverse " >
                {/* banner image */}
                <img src={chair} className="max-w-sm w-1/2 rounded-lg shadow-2xl" alt='banner' />
                <div className='w-1/2 '>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6" > Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.</p >
                    <PrimaryButton>get started</PrimaryButton>
                </div >
            </div >
        </div >
    );
};

export default Banner;