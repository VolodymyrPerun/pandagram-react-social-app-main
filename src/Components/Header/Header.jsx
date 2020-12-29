import React from 'react';
import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} alt='img'
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfegSHiBQ7_dbyKiZInKf8azfiBIFNoggAn9nxArVz9HBEEvMEw&s'/>
            <div className={style.logoText}>
                <p>P<span>a</span>nd<span>a</span>gr<span>a</span>m</p>
            </div>
        </header>
    )
};

export default Header;
