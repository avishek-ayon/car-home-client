import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://tranquil-sea-34638.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])
    return (
        <div style={{ background: 'url("https://wallpaperaccess.com/full/4129330.jpg")', marginTop: '-30px', paddingBottom: '20px' }}>
            <div className="reviews-container">
                <h3 className="Products-heading"> Products Reviews</h3>
                <div className="">
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Reviews;