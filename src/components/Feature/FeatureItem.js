import React from 'react';

const FeatureItem = ({ imgUrl, color }) => {
    return (
        <div className="feature-area__item">
            <div className="single-feature">

                <div className="single-feature__img" style={{backgroundColor: color}}>
                    <img src={imgUrl} alt="Feature image"/>
                </div>

                <div className="single-feature__text">
                    <h3>Expert teams</h3>
                    <p>Rerem iissye  ipsum dolor sit amet, consectetur adip is ipsum dolor Rerem iissye  ipsum doloy</p>
                </div>

                <div className="single-feature__btn">
                    <a href="#">
                        <i className="ti-angle-double-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeatureItem;