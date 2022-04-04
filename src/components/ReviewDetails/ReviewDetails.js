import React from 'react';
import './ReviewDetails.css'

const ReviewDetails = ({review}) => {
    const {name, image, rate, message} = review;
    return (
        <div className='review-details-container'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='review-details'>
                <p>Name: {name}</p>
                <p>Review: {message}</p>
                <p>Rating: {rate}</p>
            </div>
        </div>
    );
};

export default ReviewDetails;