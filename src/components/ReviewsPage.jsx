import { useState, useEffect, useContext } from "react"
import ReviewCards from "./ReviewCards"
import ReviewPageHeader from "./ReviewPageHeader"
import { fetchReviews } from "../api";
import { HomeContext } from "../contexts/HomePage";
import { useSearchParams } from "react-router-dom"

const ReviewsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const { setIsHomePage } = useContext(HomeContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryQuery = searchParams.get("category")
    const sortByQuery = searchParams.get("sortBy")
    const orderQuery = searchParams.get("order")

    useEffect(() => {
        setIsHomePage(true)
    })

    useEffect(() => {
        setIsLoading(true)
        fetchReviews(categoryQuery, sortByQuery, orderQuery)
            .then((data) => {
                setReviews(data.reviews)
                setIsLoading(false)
            });
    }, [categoryQuery, sortByQuery, orderQuery])

    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <>
            <ReviewPageHeader searchParams={searchParams} setSearchParams={setSearchParams} categoryQuery={categoryQuery} sortByQuery={sortByQuery} orderQuery={orderQuery} />
            <ReviewCards reviews={reviews} />
        </>
    )
}


export default ReviewsPage