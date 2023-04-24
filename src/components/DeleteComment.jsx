import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { deleteComment } from "../api"

const DeleteComment = ({ author, comment_id, comments, setComments }) => {

    const { user } = useContext(UserContext)

    const handleDelete = () => {
        deleteComment(comment_id);
        const deletedIndex = comments.findIndex(comment => comment.comment_id = comment_id)
        const optimisticComments = comments.splice(deletedIndex, 0)
        setComments(optimisticComments)
    }


    if (user) {
        return user.username === author ? (
            <button id="deleteComment" onClick={handleDelete}>Delete comment</button>
        ) : (
            <></>
        )
    } else {
        return (<></>)
    }
}

export default DeleteComment