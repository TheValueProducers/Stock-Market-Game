import "../styles/navBar.css";
import LightBulb from "../images/light_bulb.png";
import { useAuth } from "../../context/authProvider";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const toggleMenu = () => {
        const menu = document.querySelector('.navbar-menu');
        if (menu) {
            menu.classList.toggle('active');
        } else {
            console.error('Menu element not found');
        }
    };

    const toggleDropdown = (e) => {
        const dropdown = e.currentTarget.nextElementSibling;
        if (dropdown) {
            dropdown.classList.toggle('show');
        } else {
            console.error('Dropdown content not found');
        }
    };

    const handleAuthAction = () => {
        if (isAuthenticated){
            logout();
        }else{
            navigate("/log-in")
        }
         
        
    };

    return (
        <nav className="navbar-container">
            <div className="navbar">
                <img className="logo" src={LightBulb} alt="Logo" />

                <div className="menu-icon" onClick={toggleMenu}>
                    <i className="bx bx-menu"></i>
                </div>

                <ul className="navbar-menu">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>
                            Join a Game
                            <i className='bx bx-chevron-down'></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Singleplayer</a>
                            <a href="#" onClick={() => navigate("/multiplayer/host")}>Multiplayer</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>
                            About the SGM
                            <i className='bx bx-chevron-down'></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">How the Stocks Market Works</a>
                            <a href="#">How to Play the Game</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <button className="dropbtn" onClick={toggleDropdown}>
                            About Us
                            <i className='bx bx-chevron-down'></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Our Missions</a>
                            <a href="#">Our Members</a>
                        </div>
                    </li>
                    <li className="dropdown acc">
                        <i className='bx bx-user-circle login'></i>
                        <button
                            id="account"
                            className="dropbtn login-dropdown"
                            onClick={handleAuthAction}
                        >
                            {isAuthenticated ? "Log Out" : "Log In"}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;