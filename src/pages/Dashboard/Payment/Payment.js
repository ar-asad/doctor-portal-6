import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);


const Payment = () => {
    const payBooking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appoinmentDate, slot } = payBooking;

    if (navigation.state === 'loading') {
        return <h2 className='text-4xl font-semibold'>Loading.....</h2>
    }

    return (
        <div>
            <h2 className='text-4xl mb-5'>Payment for {treatment}</h2>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your appoinment on {appoinmentDate} at {slot}</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        payBooking={payBooking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;