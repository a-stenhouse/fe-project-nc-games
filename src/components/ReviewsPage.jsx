import { useState, useEffect, useContext } from "react"
import ReviewCards from "./ReviewCards"
import ReviewPageHeader from "./ReviewPageHeader"
import { fetchReviews } from "../api";
import { HomeContext } from "../contexts/HomePage";

const ReviewsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("review_id");
    const [order, setOrder] = useState("DESC")
    const { setIsHomePage } = useContext(HomeContext)

    useEffect(() => {
        setIsHomePage(true)
    })

    useEffect(() => {
        setIsLoading(true)
        fetchReviews(category, sortBy, order)
            .then((data) => {
                setReviews(data.reviews)
                setIsLoading(false)
            });
    }, [category, sortBy, order])

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <>
            <ReviewPageHeader category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy} order={order} setOrder={setOrder} />
            <ReviewCards reviews={reviews} />
        </>
    )
}

export default ReviewsPage