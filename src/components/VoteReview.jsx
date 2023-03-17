import { UserContext } from "../contexts/UserContext";
import { increaseVotes } from "../api";
import { useState, useEffect, useContext } from "react"

const VoteReview = ({ review_id, review, setReview }) => {
    const { isSignedIn, setIsSignedIn } = useContext(UserContext);
    const [hasVotedOn, setHasVotedOn] = useState(false);
    const { user, setUser } = useContext(UserContext);

    const handleUpvote = () => {
        if (isSignedIn) {
            user.votedOn.push(review_id)
            // setUser({ ...user, votedOn: [...user.votedOn, review_id] })
            setHasVotedOn(true)
            setReview({ ...review, votes: review.votes + 1 })
            increaseVotes(review_id)
                .catch(() => {
                    setHasVotedOn(false);
                    const index = user.votedOn.indexOf(review_id);
                    user.votedOn.splice(index, 1);
                    setReview({ ...review, votes: review.votes })
                    window.alert("You are offline, vote not submitted!")
                })
        } else {
            window.alert("You must be signed in to vote!")
        }
    }

    useEffect(() => {
        if (isSignedIn) {
            if (user.votedOn.includes(review_id)) {
                setHasVotedOn(true)
            }
        } else {
            setHasVotedOn(false)
        }
    }, [review_id, isSignedIn])

    return (
        <button onClick={handleUpvote} disabled={hasVotedOn}>Upvote this article!</button>
    )
}

export default VoteReview