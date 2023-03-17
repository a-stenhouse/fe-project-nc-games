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

export const increaseVotes = (review_id) => {
    return fetch(`https://nc-games-portfolio-project.onrender.com/api/reviews/${review_id}`, {
        method: "PATCH",
        body: JSON.stringify({
            inc_votes: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
}

export const fetchUser = () => {
    return fetch("https://nc-games-portfolio-project.onrender.com/api/users")
        .then((response) => response.json())
}
