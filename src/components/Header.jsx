import UserSignIn from "./UserSignIn"
import { Link } from "react-router-dom"
import { HomeContext } from "../contexts/HomePage"
import { useContext } from "react";

const Header = () => {

    const { isHomePage } = useContext(HomeContext)

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
                <Link id="backButtonLink" to="/">
                    <button id="backButton">BACK TO REVIEWS</button>
                </Link>
            </header>
        )
}

export default Header