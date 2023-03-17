import UserSignIn from "./UserSignIn"
import { Link, useParams } from "react-router-dom"
import { HomeContext } from "../contexts/HomePage"
import { useContext } from "react";

const Header = () => {

    const { isHomePage, setIsHomePage } = useContext(HomeContext)

    return isHomePage ?
        (
            <header>
                <h1 id="header">NC Game Reviews</h1>
                <UserSignIn />
            </header>
        ) :
        (
            <header>
                <h1 id="header">NC Game Reviews</h1>
                <UserSignIn />
                <Link id="backButton" to="/">
                    <button>Back to reviews</button>
                </Link>
            </header>
        )
}

export default Header