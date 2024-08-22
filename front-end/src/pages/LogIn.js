import "../assets/styles/logIn.css";
import NavBar from "../assets/components/navBar"
import BearImage from "../assets/images/bear_image.png";
import {useAuth} from "../context/authProvider"

const LogIn = () => {
    const {isAuthenticated, login, logout} = useAuth();

    return (
        <>
        <NavBar />
        <section>
            <img src={BearImage} className="bear-image" alt="Sign in illustration" />
            <div className="form-login">
                <h1 onClick={login()}>Log In</h1>
                <input type="text" name="username" placeholder="Username" id="username" className="input-text" />
                <input type="password" name="password" placeholder="Password" id="password" className="input-text" />
                <input type="submit" value="Submit" />
                <p className="link-signup">
                    Don't have an account? Sign up
                    <a href="/signup" aria-label="Sign up here" className="here-word">here</a>!
                </p>
            </div>
        </section>
        </>
    );
};

export default LogIn;