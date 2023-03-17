import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react"
import { fetchSingleReview } from "../api";
import Comments from "./Comments";
import VoteReview from "./VoteReview";
import { HomeContext } from "../contexts/HomePage"



const Review = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [review, setReview] = useState({});
    const { review_id } = useParams()
    const { isHomePage, setIsHomePage } = useContext(HomeContext)

    useEffect(() => {
        setIsHomePage(false)
    })

    useEffect(() => {
        fetchSingleReview(review_id)
            .then((data) => {
                setReview(data.review)
                setIsLoading(false)
            });
    }, [review_id])

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <>
            <article className="reviewContainer">
                <h2>{review.title}</h2>
                <h4>Written by {review.owner}</h4>
                <img className="reviewImg" src={review.review_img_url} alt="Review"></img>
                <span className="reviewBody">{review.review_body}</span>
                <VoteReview review={review} review_id={review_id} setReview={setReview} />
                <span>Votes: {review.votes}</span>
            </article >
            <Comments review_id={review_id} />
        </>
    )
}

export default Review;