import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import Review from './Review';


const ViewReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/review`
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)

    return (
        <div>
            <h1 className='text-center my-5 text-3xl font-semibold'>Our valuable customer Review</h1>
            <div className='flex justify-center '>
                <div class="carousel carousel-center max-w-2xl p-4 space-x-4 bg-neutral rounded-box">
                    <div class="carousel-item">

                        {
                            reviews.map(review => <Review review={review} key={review._id}></Review>)
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewReview;