import React from 'react';
import style from './Navbar.module.css'; 
import {NavLink} from 'react-router-dom';
 
const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.sidebar}>
                <li><NavLink className={style.item} activeClassName={style.active} to='/profile'>Profile</NavLink></li>
                <li><NavLink className={style.item} activeClassName={style.active} to='/dialogs'>Messages</NavLink></li>
                <li><NavLink className={style.item} activeClassName={style.active} to='/news'>News</NavLink></li>
                <li><NavLink className={style.item} activeClassName={style.active} to='/music'>Music</NavLink></li>
                <li><NavLink className={style.item} activeClassName={style.active} to='/settings'>Settings</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;