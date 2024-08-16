import "../assets/styles/logIn.css";
import NavBar from "../assets/components/navBar"
const LogIn = () => {
    return (
        <>
        <NavBar />
        <section>
            <img src="../assets/images/sign-in/Screenshot 2024-07-10 222622.png" className="bear-image" alt="Sign in illustration" />
            <div className="form-login">
                <h1>Log In</h1>
                <input type="text" name="username" placeholder="    Username" id="username" className="input-text" />
                <input type="password" name="password" placeholder="    Password" id="password" className="input-text" />
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