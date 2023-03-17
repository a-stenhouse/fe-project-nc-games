import { useState, useEffect, useContext } from "react"
import ReviewCards from "./ReviewCards"
import { fetchReviews } from "../api";
import { HomeContext } from "../contexts/HomePage";

const ReviewsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [category, setCategory] = useState("")
    const { isHomePage, setIsHomePage } = useContext(HomeContext)

    useEffect(() => {
        setIsHomePage(true)
    })

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