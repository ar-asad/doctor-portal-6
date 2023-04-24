import React from 'react';
import PrimaryButton from '../../../shared/PrimaryButton/PrimaryButton';
import appoinment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }}
            className='flex justify-center items-center my-28' >
            <div className='flex-1 hidden lg:block' >
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div >
            <div className='flex-1' >
                <h3 className='text-xl text-primary font-bold' > Appoinment</h3 >
                <h2 className='text-4xl text-white' > Make an appointment Today</h2 >
                <p className='text-white' > It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsumis that it has a more - or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page</p >
                <PrimaryButton>get started</PrimaryButton>
            </div >
        </section >
    );
};

export default MakeAppoinment;