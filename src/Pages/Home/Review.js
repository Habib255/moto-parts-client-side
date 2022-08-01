import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

const Review = ({ review }) => {
    const { rating, customer, feedback } = review
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
    };
    const stars = Array(5).fill(0)



    return (
        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{customer}</h2>
                <p>{feedback}</p>
                <div className="card-actions justify-end">
                    {stars.map((_, index) => <FaStar
                        key={index}
                        size={24}
                        color={(rating) > index ? colors.orange : colors.grey}
                        className='mr-1'
                    />)}
                </div>
            </div>
        </div>
    );
};

export default Review;