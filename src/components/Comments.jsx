import { useState, useEffect } from "react"
import { fetchComments } from "../api";

const Comments = ({ review_id }) => {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchComments(review_id)
            .then((response) => {
                setComments(response.comments)
                setIsLoading(false)
            })
    }, [review_id])

    return isLoading ? (
        <h1>Loading...</h1>
    ) :
        (
            <section>
                {console.log(comments)}
                <h3>Comments</h3>
                <ul id="commentsList">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.comment_id}>
                                <strong>{comment.author}</strong>
                                <p>{comment.body}</p>
                                <var>Votes: {comment.votes}</var>
                                <time>{comment.created_at.slice(0, 10)}</time>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )

}

export default Comments