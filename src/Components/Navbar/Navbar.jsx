import React from 'react';
import style from './Navbar.module.css'; 

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className="sidebar-item">
                <li><a className={`${style.item} ${style.active}`} href='/profile'>Profile</a></li>
                <li><a className={style.item} href='/dialogs'>Messages</a></li>
                <li><a className={style.item} href='/news'>News</a></li>
                <li><a className={style.item} href='/music'>Music</a></li>
                <li><a className={style.item} href='/settings'>Settings</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;