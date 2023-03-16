import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { fetchUser } from "../api"


const UserSignIn = () => {
    const { user, setUser } = useContext(UserContext)
    const { isSignedIn, setIsSignedIn } = useContext(UserContext)

    const handleSignIn = () => {
        fetchUser().then((data) => {
            setUser({ ...data.users[0], votedOn: [] })
            setIsSignedIn(true)
        })
    }

    const handleSignOut = () => {
        setUser({})
        setIsSignedIn(false)
    };

    return isSignedIn ? (
        <>
            <p>Signed in as {user.username}</p>
            <button onClick={handleSignOut}>Sign out</button>
        </>
    ) : (
        <button onClick={handleSignIn}>User sign in</button>
    )
}

export default UserSignIn