import React, { useState, useEffect } from 'react'
import Review from './Review';


const ViewReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = `https://thawing-waters-08691.herokuapp.com/review`
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h1 className='text-center my-5 text-3xl font-semibold'>Our valuable customer Review</h1>
            <div className='flex justify-center '>
                <div className="carousel carousel-center max-w-2xl p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item">

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