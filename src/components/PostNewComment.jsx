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
                created_at: "2023-02-23T11:11:46.000Z"
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
        <form onSubmit={handleSubmit}>
            <h4>Post a new comment</h4>
            <input id="commentField" type="text" value={comment} onChange={(event) => setComment(event.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default PostNewComment