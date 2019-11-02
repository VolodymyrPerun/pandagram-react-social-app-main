import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from "../Friends/Friends";

const Navbar = () => {
    return (
        <div className={style.sidebar}>
            <nav className={style.nav}>
                <ul className={style.nav}>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/profile'>Profile</NavLink>
                    </li>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/dialogs'>Messages</NavLink>
                    </li>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/news'>News</NavLink></li>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/music'>Music</NavLink></li>
                    <li><NavLink className={`${style.item} ${style.settings}`} activeClassName={style.active}
                                 to='/settings'>Settings</NavLink></li>
                </ul>
            </nav>

            <div className="friends">
                <Friends />
            </div>
        </div>
    )
};

export default Navbar;
