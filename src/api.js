export const fetchReviews = (category, sortBy = "review_id", orderBy = "DESC") => {
    return fetch(`https://nc-games-portfolio-project.onrender.com/api/reviews?sortBy=${sortBy}&sortOrder=${orderBy}${category ? `&category=${category}` : ""}`)
        .then((response) => {
            return response.json()
        })
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

export const postComment = (comment, review_id) => {
    return fetch(`https://nc-games-portfolio-project.onrender.com/api/reviews/${review_id}/comments`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json)
        .catch((err) => console.log(err))
}