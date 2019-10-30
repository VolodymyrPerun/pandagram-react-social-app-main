import React from 'react';
import style from './Header.module.css'; 

const Header = () => {
    return (
        <header className={style.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfegSHiBQ7_dbyKiZInKf8azfiBIFNoggAn9nxArVz9HBEEvMEw&s'/>
                <div className={style.logoText}>
                    <p>Pandagram</p>
                </div>
        </header>
    )
};

export default Header;