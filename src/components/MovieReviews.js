// Your MovieReviews component should be stateless and functional.

// You are free to lay out each review as you like using the data that the API returns, but make sure that the component outputs a top-level element with the class review-list and that each review is wrapped by an element with class review.

import React from 'react';

const MovieReviews = ({ reviews }) => {

    const renderReviews = () => {
        return reviews.map((review, index) => {    
            return <li key={index}>{review.display_title}: {review.summary_short}</li>
        })
    }
    
    return (
        <div className="review-list">
            <ul>
                {renderReviews()}
            </ul>
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews