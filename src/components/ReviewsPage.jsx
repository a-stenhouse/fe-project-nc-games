import { useState, useEffect, useContext } from "react"
import ReviewCards from "./ReviewCards"
import { fetchReviews } from "../api";
import { HomeContext } from "../contexts/HomePage";

const ReviewsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [category, setCategory] = useState("")
    const { setIsHomePage } = useContext(HomeContext)

    useEffect(() => {
        setIsHomePage(true)
    })

    useEffect(() => {
        setIsLoading(true)
        fetchReviews(category)
            .then((data) => {
                setReviews(data.reviews)
                setIsLoading(false)
            });
    }, [category])

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }




    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        <>
            <select className="selectCategory" value={category} onChange={handleCategory}>
                <option value="">All</option>
                <option value="strategy">Strategy</option>
                <option value="hidden-roles">Hidden-roles</option>
                <option value="dexterity">Dexterity</option>
                <option value="push-your-luck">Push-your-luck</option>
                <option value="roll-and-write">Roll-and-write</option>
                <option value="deck-building">Deck-building</option>
                <option value="engine-building">Engine-building</option>
            </select>
            <ReviewCards reviews={reviews} />
        </>
    )
}

export default ReviewsPage