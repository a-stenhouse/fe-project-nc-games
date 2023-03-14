import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"



const Review = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [review, setReview] = useState({});
    const { review_id } = useParams()

    useEffect(() => {
        fetch(`https://nc-games-portfolio-project.onrender.com/api/reviews/${review_id}`)
            .then((response) => response.json())
            .then((data) => {
                setReview(data.review)
                setIsLoading(false)
            });
    }, [review_id])

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <>
            <article>
                <h2>{review.title}</h2>
                <h4>Written by {review.owner}</h4>
                <img className="reviewImg" src={review.review_img_url} alt="Review"></img>
                <span className="reviewBody">{review.review_body}</span>
                <button>Upvote this article!</button>
                <span>Votes: {review.votes}</span>
            </article >
        </>
    )
}

export default Review;