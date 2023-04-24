import { useState, useEffect } from "react"
import { fetchComments } from "../api";
import PostNewComment from "./PostNewComment";
import DeleteComment from "./DeleteComment";

const Comments = ({ review_id }) => {

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchComments(review_id)
            .then((response) => {
                setComments(response.comments)
                setIsLoading(false)
            })
    }, [review_id, comments])

    return isLoading ? (
        <h1>Loading...</h1>
    ) :
        (
            <section id="commentSection">
                <h3>Comments</h3>
                <PostNewComment review_id={review_id} comments={comments} setComments={setComments} />
                <ul id="commentsList">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.comment_id} className="commentCards">
                                <strong>{comment.author}</strong>
                                <p>{comment.body}</p>
                                <var>Votes: {comment.votes}</var>
                                <time>{comment.created_at.slice(0, 10)}</time>
                                <DeleteComment author={comment.author} comment_id={comment.comment_id} setComments={setComments} comments={comments} />
                            </li>
                        )
                    })}
                </ul>
            </section>
        )

}

export default Comments