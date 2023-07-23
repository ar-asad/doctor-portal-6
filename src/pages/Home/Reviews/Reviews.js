import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className="card shadow-xl" >
            <div className="card-body" >
                <p className='mb-3'>{review.description}</p>
                <div className='flex items-center ' >
                    <div className="avatar" >
                        <div className="w-[75px] mr-[14px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" >
                            <img className='' src={review.img} alt='' />
                        </div >
                    </div >
                    <div>
                        <h4>{review.name}</h4>
                        <p>{review.country}</p>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Reviews;