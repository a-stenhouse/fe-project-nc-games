import { useState, useEffect } from "react"
import { fetchComments } from "../api";
import PostNewComment from "./PostNewComment";

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
                <h3>Comments</h3>
                <PostNewComment review_id={review_id} comments={comments} setComments={setComments} />
                <ul id="commentsList">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.comment_id}>
                                <strong>{comment.author}</strong>
                                <p>{comment.body}</p>
                                <var>Votes: {comment.votes}</var>
                                <time>{comment.created_at}</time>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )

}

export default Comments