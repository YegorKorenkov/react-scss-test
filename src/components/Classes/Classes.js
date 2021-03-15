import React from 'react';

import classesImg1 from '../../assets/images/class-01.jpg';
import classesImg2 from '../../assets/images/class-02.jpg';
import classesImg3 from '../../assets/images/class-03.jpg';

import VisibilitySensor from 'react-visibility-sensor';

const Classes = () => {

    const [isVisible, setVisibility] = React.useState(false);

    const onChangeVisibility = visiblity => {
        setVisibility(visiblity);
    };

    return (

        <VisibilitySensor
        partialVisibility
        offset={{ top: 200 }}
        onChange={onChangeVisibility}
        >

            <section className={`classes-area ${isVisible ? 'visible' : ''}`}>
                <div className="container max-width">
                    <div className="row align-items-center">
                        <div className="classes-container__title">
                            <div className="classes__title">
                                <h2>Our popular classes</h2>
                                <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua.</p>
                            </div>

                        </div>
                        <div className="classes-container__title">
                            <div className="classes__btn">
                                <a href="#" className="btn">See All Class</a>
                            </div>    
                        </div>
                    </div>

                    <div className="row">
                        <div className="classes__col">
                            <div className="classes__item">
                                <div className="classes-img">
                                    <img src={classesImg1} alt="Class Image" />
                                </div>
                                <div className="classes__text">
                                    <a href="#">
                                        <h3>Athletics & Dance Classes</h3>
                                    </a>
                                    <span>Class time 8:00 am - 10:00 am</span>
                                    <p>Rorem ipsum dolor sit amet, consectetu adipisicin elit, sed do eiusmotemp minimye.</p>
                                </div>
                                <ul className="classes__schedule">
                                    <li>
                                        <span>Class Size</span>
                                        <span>45 - 50</span>
                                    </li>
                                    <li>
                                        <span>Years</span>
                                        <span>7 - 10</span>
                                    </li>
                                    <li>
                                        <span>Tution Fee</span>
                                        <span>$120</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="classes__col">
                            <div className="classes__item">
                                <div className="classes__img">
                                    <img src={classesImg2} alt="Class Image" />
                                </div>
                                <div className="classes__text">
                                    <a href="#">
                                        <h3>Super Faster Speking English</h3>
                                    </a>
                                    <span>Class time 8:00 am - 10:00 am</span>
                                    <p>Rorem ipsum dolor sit amet, consectetu adipisicin elit, sed do eiusmotemp minimye.</p>
                                </div>
                                <ul className="classes__schedule">
                                    <li>
                                        <span>Class Size</span>
                                        <span>45 - 50</span>
                                    </li>
                                    <li>
                                        <span>Years</span>
                                        <span>7 - 10</span>
                                    </li>
                                    <li>
                                        <span>Tution Fee</span>
                                        <span>$120</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="classes__col">
                            <div className="classes__item">
                                <div className="classes__img">
                                    <img src={classesImg3} alt="Class Image" />
                                </div>
                                <div className="classes__text">
                                    <a href="#">
                                        <h3>Free Class System Sunday</h3>
                                    </a>
                                    <span>Class time 8:00 am - 10:00 am</span>
                                    <p>Rorem ipsum dolor sit amet, consectetu adipisicin elit, sed do eiusmotemp minimye.</p>
                                </div>
                                <ul className="classes__schedule">
                                    <li>
                                        <span>Class Size</span>
                                        <span>45 - 50</span>
                                    </li>
                                    <li>
                                        <span>Years</span>
                                        <span>7 - 10</span>
                                    </li>
                                    <li>
                                        <span>Tution Fee</span>
                                        <span>$120</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </VisibilitySensor>
    );
};

export default Classes;