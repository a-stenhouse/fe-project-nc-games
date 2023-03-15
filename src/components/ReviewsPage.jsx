import { useState, useEffect } from "react"
import ReviewCards from "./ReviewCards"
import { fetchReviews } from "../api";

const ReviewsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [category, setCategory] = useState("")

    useEffect(() => {
        fetchReviews()
            .then((data) => {
                setReviews(data.reviews)
                setIsLoading(false)
            });
    }, [category])


    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <ReviewCards reviews={reviews} />
    )
}

export default ReviewsPage