import { useState, useEffect } from "react"
import ReviewCards from "./ReviewCards"

const ReviewsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [category, setCategory] = useState("")

    useEffect(() => {
        fetch("https://nc-games-portfolio-project.onrender.com/api/reviews")
            .then((response) => response.json())
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