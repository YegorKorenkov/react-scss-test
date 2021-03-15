import React from 'react';
import classNames from 'classnames';

const MenuItem = ({ menuItemName, submenuItemsName, id, active, onSetActiveId, onSetSubActiveId, subActive }) => {

    const classes = classNames({
        'menu-item': true,
        active: active
    })

    return (
    
        <li>
            <a className={classes} href="#" onClick={() => onSetActiveId(id)}>{menuItemName}</a>
            { 
                submenuItemsName
                ? (
                    <ul className="submenu">
                        { submenuItemsName.map((item, key) => <li 
                            key={key}>
                                <a 
                                    href="#" 
                                    onClick={() => onSetSubActiveId(`${id}${key}`)}
                                    className={subActive === key ? "active" : ""}
                                    >{item}</a></li>)}
                    </ul>
                )
                : <></>
            }
        </li>
    );
};

export default MenuItem;