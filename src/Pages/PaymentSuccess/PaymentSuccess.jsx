import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const {tranId} = useParams()
    return (
        <div className='text-center my-10'>
            <h1 className='text-3xl text-red-600'>Payment Successful</h1>
            <p className='text-xl my-10'>Your Transaction Id: {tranId}</p>
        </div>
    );
};

export default PaymentSuccess;