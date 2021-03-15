import React from 'react';
import MenuItem from './MenuItem';
import Search from './Search';
import logo from "../../assets/images/logo.png";

const menuItemData = [
    { home: ['Home One','Home Two'] },
    { about: '' },
    { classes: ['Classes','Class Details'] },
    { team: ['Team','Team Details'] },
    { pages: ['About','Classes', 'Class Details', 'Team Details', 'Features', 'Gallery', 'Blog', 'Blog Details', 'Contact'] },
    { blog: ['Blog','Blog Details'] },
    { contact: '' }
]

const Header = () => {

    const [activeId, setActiveId] = React.useState(0);
    const [subActiveId, setSubActiveId] = React.useState('0');

    const onSetActiveId = id => {
        setActiveId(id);
    } 

    const onSetSubActiveId = id => {
        console.log(+id[0]);
        setSubActiveId(id);
    }

    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="header__logo-container">
                        <a href="#" className="header__logo-img">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div> 

                    <div className="header__menu-container">
                        <nav>
                            <ul className="menu">
                                {/* <MenuItem menuItemName='Home' submenuItemsName={['Home One','Home Two']} active={true}/>
                                <MenuItem menuItemName='About'/>
                                <MenuItem menuItemName='Classes' submenuItemsName={['Classes','Class Details']} />
                                <MenuItem menuItemName='Team' submenuItemsName={['Team','Team Details']} />
                                <MenuItem menuItemName='Pages' 
                                    submenuItemsName={['About','Classes', 'Class Details', 'Team Details', 
                                    'Features', 'Gallery', 'Blog', 'Blog Details', 'Contact']} />
                                <MenuItem menuItemName='Blog' submenuItemsName={['Blog','Blog Details']} />
                                <MenuItem menuItemName='Contact' /> */}
                                { 
                                    menuItemData.map((item, id) => (
                                        <MenuItem 
                                            key={id}
                                            id={id}
                                            active={ activeId === id ? true : false}
                                            menuItemName={Object.keys(item).join()}
                                            submenuItemsName={Object.values(item)[0]}
                                            onSetActiveId={onSetActiveId}
                                            onSetSubActiveId={onSetSubActiveId}
                                            subActive={+subActiveId[0] === id ? +subActiveId[1] : null}
                                        />
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>

                    <div className="header__search-container align-items-center">
                        <div>
                            <div className="input-container">
                                <Search />
                            </div>

                            <div className="header-btn">
                                <a href="#" className="btn">Admission now</a>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </header>
        
    );
};

export default Header;