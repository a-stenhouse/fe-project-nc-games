export const fetchReviews = () => {
    return fetch("https://nc-games-portfolio-project.onrender.com/api/reviews")
        .then((response) => response.json())
}

export const fetchSingleReview = (review_id) => {
    return fetch(`https://nc-games-portfolio-project.onrender.com/api/reviews/${review_id}`)
        .then((response) => response.json())
}

export const fetchComments = (review_id) => {
    return fetch(`https://nc-games-portfolio-project.onrender.com/api/reviews/${review_id}/comments`)
        .then((response) => {
            return response.json()
        })
}