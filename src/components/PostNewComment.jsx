import { useState, useContext } from "react"
import { postComment } from "../api"
import { UserContext } from "../contexts/UserContext"

const PostNewComment = ({ review_id, comments, setComments }) => {

    const [comment, setComment] = useState("")
    const { user, isSignedIn } = useContext(UserContext)


    const handleSubmit = (event) => {
        event.preventDefault()
        if (isSignedIn && comment) {
            const optimisticComment = {
                comment_id: comments[comments.length - 1].comment_id + 1,
                body: comment,
                votes: 0,
                author: user.username,
                review_id: review_id,
                created_at: new Date().toISOString()
            }
            const postedComment = {
                body: comment,
                username: user.username,
            }
            setComments([optimisticComment, ...comments]);
            postComment(postedComment, review_id);
        } else if (!isSignedIn) {
            window.alert("You must be signed in to post a comment");
        } else {
            window.alert("Please enter a comment");
        }
    }


    return (
        <form id="commentForm" onSubmit={handleSubmit}>
            <h4>Post a new comment</h4>
            <textarea id="commentField" type="text" placeholder="Type comment here..." value={comment} onChange={(event) => setComment(event.target.value)} />
            <input className="reviewButtons" type="submit" />
        </form>
    )
}

export default PostNewComment