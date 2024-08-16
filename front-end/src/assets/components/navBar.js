import "../styles/navBar.css"
const NavBar = () => {
    return (
        <nav class="navbar-container">
        <div class="navbar">
            <img class="logo" src="../assets/images/home-page/bvis-sm-icon.png" alt="Logo" />
           
         
            <div class="menu-icon">
                <i class="bx bx-menu"></i>
            </div>
           
            <ul class="navbar-menu">
                <li>
                    <a href="#">Home</a>
                </li>
               
                <li class="dropdown">
                    <button class="dropbtn">
                        Join a Game
                        <i class='bx bx-chevron-down'></i>
                    </button>
                    <div class="dropdown-content" id="dropdown-content-1">
                        <a href="#">Singleplayer</a>
                        <a href="#">Multiplayer</a>
                    </div>
                </li>
       
                <li class="dropdown">
                    <button class="dropbtn">
                        About the SGM
                        <i class='bx bx-chevron-down'></i>
                    </button>
                    <div class="dropdown-content" id="dropdown-content-2">
                        <a href="#">How the Stocks Market Works</a>
                        <a href="#">How to Play the Game</a>
                    </div>
                </li>
       
                <li  class="dropdown">
                    <button class="dropbtn">
                        About Us
                        <i class='bx bx-chevron-down'></i>
                    </button>
                    <div class="dropdown-content" id="dropdown-content-3">
                        <a href="#">Our missions</a>
                        <a href="#">Our members</a>
                    </div>
                </li>
 
 
 
 
                <li class="dropdown acc">
 
 
 
 
                    
 
 
                    <button id="account" class="dropbtn">
                        Log In  
                    </button>
                </li>
            </ul>
           
            <i class='bx bx-user-circle login'></i>
        </div>
    </nav>
    )
}

export default NavBar;