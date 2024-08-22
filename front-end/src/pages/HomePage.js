import React from 'react';
import NavBar from "../assets/components/navBar"
import '../assets/styles/home.css'; // Ensure to import your CSS file here

const HomePage = () => {
    return (
        <>
        <NavBar />
        <main>
            <section className="page-1">
                <div className="container-1">
                    <div>
                        <h1>Stock <span>Market</span> Game is the Best Game to <span>Invest</span> your Time</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <h4>Learn more <i className='bx bx-link-external'></i></h4>
                    </div>
                </div>
            </section>

            <section className="page-2" id="page-2">
                <div className="container-2">
                    <h1>About the <span>Stock Market Game</span></h1>
                    <div className="text-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>
            </section>

            <section className="page-3" id="page-3">
                <div className="container-3">
                    <h1>How the Stock Market <span>Works</span></h1>
                    <div className="slider">
                        <div className="buttons">
                            <button id="prev"> &lt; </button>
                        </div>
                        <div className="list">
                            <iframe 
                                src="https://www.youtube.com/embed/JrGp4ofULzQ" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="buttons">
                            <button id="next"> &gt; </button>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </section>

            <section className="page-4" id="page-4">
                <div className="container-4">
                    <h1><span>Tutorial</span></h1>
                    <p>
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br />
                        <br />
                    </p>
                    <div className="video">
                        <iframe 
                            src="https://www.youtube.com/embed/JrGp4ofULzQ" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="page-5" id="page-5">
                <div className="container-5">
                    <div className="content-1">
                        <div className="content-1-desc">
                            <p className="title">Who are we?</p>
                            <h1>BVIS Tech Committee</h1>
                            <p className="content-1-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam sed similique esse suscipit quae modi dolor exercitationem minima neque laborum soluta quam, obcaecati cumque rem autem error facere vitae!
                                <br /><br />
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est veniam sed similique esse suscipit quae modi dolor exercitationem minima neque laborum soluta quam, obcaecati cumque rem autem error facere vitae!
                            </p>
                        </div>
                        <div className="content-2">
                            <img src="../assets/images/home-page/img-6.jpg" className="img-1" alt="Content 1" />
                            <img src="../assets/images/home-page/img-6.jpg" className="img-2" alt="Content 2" />
                        </div>
                    </div>
                    <div className="content-3">
                        <p className="title">Our Goals</p>
                        <div className="goal">
                            <div className="goal-1">
                                <div className="icon-1">
                                    <i className="bi bi-lightbulb"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="goal-2">
                                <div className="icon-2">
                                    <i className="bi bi-menu-button-fill"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="goal-3">
                                <div className="icon-3">
                                    <i className="bi bi-person-arms-up"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-6" id="page-6">
                <div className="container-6">
                    <div className="member">
                        <p>Meet Our</p>
                        <h1><span>Members!</span></h1>
                    </div>
                    <div className="profile">
                        <div className="in4">
                            <img src="../assets/images/home-page/user.png" className="face" alt="Member 1" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="in4">
                            <img src="../assets/images/home-page/user.png" className="face" alt="Member 2" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="in4">
                            <img src="../assets/images/home-page/user.png" className="face" alt="Member 3" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="in4">
                            <img src="../assets/images/home-page/user.png" className="face" alt="Member 4" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="in4">
                            <img src="../assets/images/home-page/user.png" className="face" alt="Member 5" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="in4">
                            <img src="../assets/images/home-page/user.png" className="face" alt="Member 6" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
};

export default HomePage;