import React from 'react';
import care from '../../../assets/images/treatment.png';

const Care = () => {
    return (
        <div className="hero min-h-screen" >
            <div className="hero-content grid lg:grid-cols-2 grid-cols-1" >
                <img src={care} className="lg:max-w-sm lg:mx-auto lg:mb-0 mb-5 rounded-lg shadow-2xl" alt='treatment' />
                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6" > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsumis that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page</p >
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" > get started</button >
                </div >
            </div >
        </div >
    );
};

export default Care;