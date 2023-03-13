const ReviewCards = ({ reviews }) => {
    return (
        <ul id="reviewList">
            {reviews.map((review) => {
                return (
                    <li key={review.review_id} class="reviewCards">
                        <h2>{review.title}</h2>
                        <h4>{review.designer}</h4>
                        <div>
                            <span class="lhsDetails">Written by: {review.owner}</span>
                            <span class="rhsDetails">Created: {review.created_at.slice(0, 10)}</span>
                        </div>
                        <div>
                            <span class="lhsDetails">Votes: {review.votes}</span>
                            <span class="rhsDetails">Comments: {review.comment_count}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default ReviewCards