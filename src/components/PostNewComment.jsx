import { useState, useContext } from "react"
import { postComment } from "../api"
import { UserContext } from "../contexts/UserContext"

const PostNewComment = ({ review_id, comments, setComments }) => {

    const [comment, setComment] = useState("")
    const { user } = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const commentSend = {
            body: comment,
            votes: 0,
            author: user,
            review_id: review_id,
            created_at: new Date(1677150706000)

        }
        const optimisticComment = {
            comment_id: 99,
            body: comment,
            votes: 0,
            author: user,
            review_id: review_id,
            created_at: "2023-02-23T11:11:46.000Z"
        }
        setComments((current) => [...current, optimisticComment])
        // postComment(commentSend, review_id)
        //     .catch(() => {
        //         setComments((current) => current.splice(-1, 1))
        //     })
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