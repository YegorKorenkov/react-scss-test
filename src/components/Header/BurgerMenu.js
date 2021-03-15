import React from 'react';
import {slide as Menu} from 'react-burger-menu';

const BurgerMenu = ({ menuItemData }) => {

    const [isVisible, setVisibility] = React.useState(null);

    const onSetVisibility = (id) => {
        if (id === isVisible) {
            setVisibility(null);
        }
        else {
            setVisibility(id)
        }
        console.log(isVisible)
    }

    return (
        <Menu left>
            {
                menuItemData.map((item, id) => (
                    <>
                        <a 
                            onClick={() => onSetVisibility(id)} 
                            className={`burger-menu__link ${isVisible === id ? 'clicked' : ''}`}
                            key={id}
                        >{Object.keys(item).join()}
                            { Object.values(item)[0] ? <i className="ti-angle-right"></i> : ''}
                        </a>
                        {
                            Object.values(item)[0] 
                            ?   <ul className={`burger-menu__submenu ${isVisible === id ? 'visible-burger-submenu' : ''}`}>
                                    { Object.values(item)[0].map((item, key) => <li 
                                        key={key}>
                                            <i className={"ti-control-record"}></i><a href="#">{item}</a>
                                    </li>)}
                                </ul>
                            : <></>
                        }
                    </>
                ))
            }
        </Menu>
    );
};

export default BurgerMenu;