import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='reviews'>
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