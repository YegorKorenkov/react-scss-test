import React from 'react';
import logo from '../../assets/images/logo.png';
import gallery01 from '../../assets/images/ins-01.jpg';
import gallery02 from '../../assets/images/ins-02.jpg';
import gallery03 from '../../assets/images/ins-03.jpg';
import gallery04 from '../../assets/images/ins-04.jpg';
import gallery05 from '../../assets/images/ins-05.jpg';
import gallery06 from '../../assets/images/ins-06.jpg';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container max-width">
                <div className="row">
                    <div className="footer__first-col">
                        <div className="footer__widget--left">
                            <div className="footer__logo">
                                <img src={logo} alt="Footer logo" />
                            </div>
                            <p>
                                Rorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis exercitation. ullamco laboris.
                            </p>
                            <div className="footer__social-media">
                                <a href="#"><i className="ti-twitter"></i></a>
                                <a href="#"><i className="ti-rss-alt"></i></a>
                                <a href="#"><i className="ti-youtube"></i></a>
                                <a href="#"><i className="ti-facebook"></i></a>
                                <a href="#"><i className="ti-instagram"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer__second-col">
                        <div className="footer__widget--event">
                            <h3>Event Activities</h3>
                            <ul className="footer__links">
                                <li>
                                    <a href="#">
                                        <i className="ti-angle-double-right"></i>
                                        Math Olympiad
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-angle-double-right"></i>
                                        Art Competition
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-angle-double-right"></i>
                                        English Novels
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-angle-double-right"></i>
                                        Science Competition
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-angle-double-right"></i>
                                        Teacher Day
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="ti-angle-double-right"></i>
                                        World Kids Day
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__third-col">
                        <div className="footer__widget--contact">
                            <h3>Contact With Us</h3>
                            <ul>
                                <li>
                                    <div className="footer__adress">
                                        <span><i className="ti-location-pin"></i></span>
                                        <p>786/A Romada tower mall Brooklyn, NYC</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer__adress">
                                        <span><i className="ti-mobile"></i></span>
                                        <p>018- 375878-345</p>
                                        <p>9373 93243 - 783</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="footer__adress">
                                        <span><i className="ti-email"></i></span>
                                        <p>info@yourmail.com</p>
                                        <p>jobsinfo@webmail.com</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__fourth-col">
                        <div className="footer__widget--photo">
                            <h3>Photo Showcase</h3>
                            <div className="photo-container">
                                <div className="photo">
                                    <img src={gallery01}></img>
                                </div>
                                <div className="photo">
                                    <img src={gallery02}></img>
                                </div>
                                <div className="photo">
                                    <img src={gallery03}></img>
                                </div>
                                <div className="photo">
                                    <img src={gallery04}></img>
                                </div>
                                <div className="photo">
                                    <img src={gallery05}></img>
                                </div>
                                <div className="photo">
                                    <img src={gallery06}></img>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;