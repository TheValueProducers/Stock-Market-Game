import React from 'react';
import NavBar from "../assets/components/navBar"
import '../assets/styles/register.css'; // Make sure to link your CSS file correctly

const Register = () => {
    const toggleMenu = () => {
        document.querySelector('.navbar ul.navbar-menu').classList.toggle('active');
    };

    return (
        <>
            <NavBar />
            <section>
                <img 
                    src="../assets/images/sign-up/Screenshot 2024-07-10 222659.png" 
                    className="bull-image" 
                    alt="Sign Up Visual" 
                />
                <div className="form-signup">
                    <h1>Sign Up</h1>
                    <input 
                        type="text" 
                        name="fullname" 
                        id="Fullname" 
                        placeholder="  Full name" 
                    />
                    <input 
                        type="date" 
                        name="date" 
                        id="date" 
                    />
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="  Username" 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="  Password" 
                    />
                    <input 
                        type="password" 
                        name="confirm-password" 
                        id="confirm-password" 
                        placeholder="  Confirm Password" 
                    />
                    <input 
                        type="submit" 
                        value="Create" 
                    />
                    <p className="link-login">
                        Already have an account? Log in 
                        <a href="#" className="here-word"> here</a>!
                    </p>
                </div>
                <button className="menu-icon" onClick={toggleMenu}>
                    {/* Add your menu icon here */}
                </button>
            </section>
        </>
    );
};

export default Register;