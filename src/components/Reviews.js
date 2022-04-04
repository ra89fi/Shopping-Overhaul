import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useReviews from '../hooks/useReviews';
import './Reviews.css';

const Reviews = ({ itemNum }) => {
    const [reviews, setReviews] = useReviews();
    const isReviewsPage = itemNum === reviews.length;
    itemNum = itemNum || reviews.length;
    reviews.splice(itemNum);
    return (
        <div>
            {!isReviewsPage ? (
                <h2 style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                    What our customers say!
                </h2>
            ) : (
                ''
            )}
            <div className="reviews">
                {reviews.map((review) => (
                    <div className="item">
                        <div className="head">
                            <img src="user.jpg" alt="User" />
                            <h5>{review.name}</h5>
                        </div>
                        <p>{review.text}</p>
                        <Rating
                            initialRating={review.rating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={
                                <FontAwesomeIcon
                                    style={{ color: 'goldenrod' }}
                                    icon={faStar}
                                />
                            }
                            readonly
                        ></Rating>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
