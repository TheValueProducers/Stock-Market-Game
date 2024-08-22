import "../assets/styles/logIn.css";
import NavBar from "../assets/components/navBar";
import BearImage from "../assets/images/bear_image.png";
import { useAuth } from "../context/authProvider";
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom"

const LogIn = () => {
    const { isAuthenticated, login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        if (isAuthenticated){
            navigate("/home")
        }
    };

    return (
        <>
            <NavBar />
            <section>
                <img src={BearImage} className="bear-image" alt="Sign in illustration" />
                
                    
                    <form onSubmit={handleSubmit} className="form-login">
                        <h1>Log In</h1>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            id="username"
                            className="input-text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                            className="input-text"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input type="submit" value="Submit" />
                        <p className="link-signup">
                        Don't have an account? Sign up
                        <Link to ="/register" className="here-word">here</Link>!
                    </p>
                
                    </form>
                    
            </section>
        </>
    );
};

export default LogIn;