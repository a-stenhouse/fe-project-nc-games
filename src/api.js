const fetchReviews = () => {
    return fetch("https://nc-games-portfolio-project.onrender.com/api/reviews")
        .then((response) => response.json())
}
export default fetchReviews