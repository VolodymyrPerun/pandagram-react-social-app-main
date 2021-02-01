import React from 'react';
import style from './NavBar.module.scss';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <nav className={style.nav}>
                <ul className={style.nav}>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/profile'>Profile</NavLink>
                    </li>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/dialogs'>Messages</NavLink>
                    </li>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/news'>News</NavLink></li>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/music'>Music</NavLink></li>
                    <li><NavLink className={style.item} activeClassName={style.active} to='/friendsPage'>Friends</NavLink></li>
                    <li><NavLink className={`${style.item} ${style.settings}`} activeClassName={style.active}
                                 to='/settings'>Settings</NavLink></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;
