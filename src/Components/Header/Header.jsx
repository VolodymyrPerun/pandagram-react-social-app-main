import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} alt='img'
                 src={logo} />
            <div className={style.logoText}>
                <p>P<span>a</span>nd<span>a</span>gr<span>a</span>m</p>
            </div>
        </header>
    )
};

export default Header;
