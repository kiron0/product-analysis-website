import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ReviewDetails.css'

const ReviewDetails = ({review}) => {
    const {name, image, rate, message} = review;
    return (
        <div className='review-details-container'>
            <div>
                <img src={image} alt="" />
            </div>
            <div className='review-details'>
                <p><strong>Name: {name}</strong></p>
                <p><strong>Review: </strong><span className='message'>{message}</span></p>
                <p><strong>Rating: {rate} </strong><Rating
                        initialRating={rate}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'rgb(255,223,0)' }} icon={faStar} />}
                        readonly
                    ></Rating></p>
            </div>
        </div>
    );
};

export default ReviewDetails;