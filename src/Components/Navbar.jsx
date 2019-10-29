import React from 'react';
import style from './Navbar.module.css'; 

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className="sidebar-item">
                <li><a className={style.item} href='/Profile'>Profile</a></li>
                <li><a className={style.item} href='/Messages'>Messages</a></li>
                <li><a className={style.item} href='/News'>News</a></li>
                <li><a className={style.item} href='/Music'>Music</a></li>
                <li><a className={style.item} href='/Settings'>Settings</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;