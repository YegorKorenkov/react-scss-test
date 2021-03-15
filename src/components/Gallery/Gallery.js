import React, { useState } from 'react';
import Categories from './Categories';
import gallery01 from '../../assets/images/gallery-01.jpg';
import gallery02 from '../../assets/images/gallery-02.jpg';
import gallery03 from '../../assets/images/gallery-03.jpg';
import gallery04 from '../../assets/images/gallery-04.jpg';
import gallery05 from '../../assets/images/gallery-05.jpg';

import VisibilitySensor from 'react-visibility-sensor';

const categoriesNames = ['See all', 'Play', 'Math', 'Religion', 'Drawing', 'English'];
const gallery = [gallery01, gallery02, gallery03, gallery04, gallery05];

const Gallery = () => {

    const [activeId, setActiveId] = React.useState(0);
    const [isVisible, setVisibility] = useState(false);

    const onSetActiveId = id => {
        setActiveId(id);
    };
    
    const onChangeVisibility = visiblity => {
        setVisibility(visiblity);
    };

    return (
        <VisibilitySensor
            partialVisibility
            offset={{ top: 200 }}
            onChange={onChangeVisibility}
        >
        
            <section className={`gallery-area ${isVisible ? 'visible' : ''}`}>
                <div className="container max-width">
                    <div className="row text-center">
                        <div className="gallery__menu-container">
                            <div className="gallery__menu">
                                {
                                    categoriesNames.map((category, id) => (
                                        <Categories 
                                            key={id}
                                            categoryName={category}
                                            active={activeId === id ? true : false}
                                            onSetActiveId={onSetActiveId}
                                            id={id}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="gallery text-center">

                        {
                            gallery.map((img, id) => (
                                <figure className={`gallery__item gallery__item--${id+1}`} key={id}>
                                    <img src={img} alt={`Gallery image ${id+1}`}  className="gallery__img" />
                                    <div className="gallery__content">
                                        <div className="gallery__content-view">
                                            <a href="#">
                                                <i className="ti-plus"></i>
                                            </a>
                                        </div>
                                        <a href="#">
                                            <h3>Product Name Here</h3>
                                        </a>
                                        <span>By: Kinden Theme</span>
                                    </div>
                                </figure>
                            ))
                        }

                        {/* <figure className="gallery__item gallery__item--1">
                            <img src={gallery01} alt="Gallery image 1" className="gallery__img" />
                        </figure>
                        <figure className="gallery__item gallery__item--2">
                            <img src={gallery02} alt="Gallery image 2" className="gallery__img" />
                        </figure>
                        <figure className="gallery__item gallery__item--3">
                            <img src={gallery03} alt="Gallery image 3" className="gallery__img" />
                        </figure>
                        <figure className="gallery__item gallery__item--4">
                            <img src={gallery04} alt="Gallery image 4" className="gallery__img" />
                        </figure>
                        <figure className="gallery__item gallery__item--5">
                            <img src={gallery05} alt="Gallery image 5" className="gallery__img" />
                        </figure> */}
                    </div>
                </div>
            </section>
        </VisibilitySensor>
    );
};

export default Gallery;