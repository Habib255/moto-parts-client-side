import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LRHozCuV6g7QE6WLPkYdOLpsSZ2VLOnl4YYkFYZzeNxaO9RAJXhmyRlxISJR6xRjc5grubtA9qELzwjdmmKrDWT00yOsmdlNO');
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex flex-col gap-10 justify-center'>

            <div class="card w-96 bg-base-100 text-center shadow-xl">
                <div class="card-body">
                    <h2 class="font-bold text-xl">Payment for {order?.productName}</h2>
                    <p>Total Quantity: {order?.orderQuantity}</p>
                    <p>Total price: {order?.price}</p>
                </div>
            </div>
            <div className='ard w-96 bg-base-100 shadow-xl'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>

            </div>




        </div>
    );
};

export default Payment;