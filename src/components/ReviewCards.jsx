import { Link } from "react-router-dom";

const ReviewCards = ({ reviews }) => {
    return (
        <ul id="reviewList">
            {reviews.map((review) => {
                return (
                    <Link className="reviewLinks" key={`${review.review_id}Link`} to={`/reviews/${review.review_id}`}>
                        <li key={review.review_id} className="reviewCards">
                            <h2>{review.title}</h2>
                            <h4>{review.designer}</h4>
                            <div>
                                <span className="lhsDetails">Written by: {review.owner}</span>
                                <span className="rhsDetails">Created: {review.created_at.slice(0, 10)}</span>
                            </div>
                            <div>
                                <span className="lhsDetails">Votes: {review.votes}</span>
                                <span className="rhsDetails">Comments: {review.comment_count}</span>
                            </div>
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export default ReviewCards