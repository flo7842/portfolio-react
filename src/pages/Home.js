import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <div className="homeContent">
                <div className="content">
                    <h1>Florian BRACQ</h1>
                    <h2>Développeur FullStack</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink exact to="/competences" activeClassName="navActive">
                                <i className="fas fa-mountain"></i>
                                <span>Compétences</span>
                                <div className="progressBar"></div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/portfolio" activeClassName="navActive">
                                <i className="fas fa-images"></i>
                                <span>Portfolio</span>
                                <div className="progressBar"></div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact" activeClassName="navActive">
                                <i className="fas fa-address-book"></i>
                                <span>Contact</span>
                                <div className="progressBar"></div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.google.com" target="_blank" 
                            rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" 
                            rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" 
                            rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href="https://www.google.com" target="_blank" 
                            rel="noopener noreferrer"><i className="fas fa-desktop"></i></a>
                        </li>
                    </ul>
                    <div className="signature">
                        <p>Florian BRACQ CV - 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;