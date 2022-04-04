import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kiron0/reviewsFakeData/main/data.json')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            {
                reviews.map(review => (
                    <ReviewDetails 
                    key={review.id} review={review}></ReviewDetails>
                ))
            }
        </div>
    );
};

export default Reviews;