import React, { useEffect, useState } from 'react';
import NavBar from "../assets/components/navBar"
import '../assets/styles/register.css';
import BullImage from '../assets/images/bull-image.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const checkPasswordResult = (password, confirmPassword) => {
        if (password.length < 6) {
            return {
                create_password: false,
                message: "Password is less than 6 characters"
            };
        }
        if (password !== confirmPassword) {
            return {
                create_password: false,
                message: "The passwords do not match"
            };
        }
        return {
            create_password: true,
            message: "Password created"
        };
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        const result = checkPasswordResult(password, confirmPassword);
        if (!result.create_password) {
            alert(result.message);
            return;
        } else {
            try {
                const response = await axios.post("http://localhost:3001/api/v1/user/register", {
                    full_name: fullName,
                    date_of_birth: new Date(dateOfBirth),
                    password,
                    username,
                    email
                });
                alert("Register Successful");
                navigate("/log-in");
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    alert("Username or email is already in use");
                } else {
                    alert("Failed to register user");
                    console.error(error);
                }
            }
        }
    };

    
    return (
        <div>
            <NavBar />
            <section>
                <img
                    src={BullImage}
                    className="bull-image"
                    alt="Bull"
                />
                <form className="form-signup" onSubmit={submitHandler}>
                    <h1>Sign Up</h1>
                    <input type="text" name="fullname" id="Fullname" placeholder="Full name" onChange={(e) => setFullName(e.target.value)} />
                    <input type="email" name="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="date" name="date" id="date" onChange={(e) => setDateOfBirth(e.target.value)} />
                    <input type="text" name="username" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" name="password" id="confirm-password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <input type="submit" value="Create"  />
                    <p className="link-login">
                        Already have an account? Log in <Link to="/log-in" className="here-word">here</Link>!
                    </p>
                </form>
            </section>
        </div>
    );
}

export default Register;