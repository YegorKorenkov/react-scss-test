import React from 'react';

import FeatureItem from './FeatureItem';
import featureImg1 from '../../assets/images/f-01.png';
import featureImg2 from '../../assets/images/f-02.png';
import featureImg3 from '../../assets/images/f-03.png';
import featureImg4 from '../../assets/images/f-04.png';

import VisibilitySensor from 'react-visibility-sensor';

const imgUrl = [featureImg1, featureImg2, featureImg3, featureImg4];
const colors = ["#ff8000", "#00c7c6", "#ffc753", "#7c99e5"];


const Feature = () => {

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
            <section className={`feature-area ${isVisible ? 'visible' : ''}`}>
                <div className="container max-width">
                    <div className="feature-area__title">
                        <h2>Some Good Features</h2>
                        <p>Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        { imgUrl.map((item, key) => (
                            <FeatureItem key={key} imgUrl={item} color={colors[key]}/>
                        ))}
                    </div>
                </div>
            </section>
        </VisibilitySensor>
    );
};

export default Feature;