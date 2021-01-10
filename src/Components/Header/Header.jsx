import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import {UserOutlined, UserAddOutlined} from '@ant-design/icons';

const Header = props => {
    return (
        <header className={style.header}>
            <img className={style.logo} alt='img'
                 src={logo}/>
            <div className={style.logoText}>
                <p>P<span>a</span>nd<span>a</span>gr<span>a</span>m</p>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth ?
                    <div className={style.itemLink}
                         style={{top: '0', fontSize: '9px !important', padding: '0'}}>{props.login}</div> :
                    <NavLink activeClassName={style.active} className={style.itemLink} to={'/login'}>
                        <UserOutlined/>Login
                    </NavLink>}
                <NavLink activeClassName={style.active} className={style.itemLink} to={'/register'}>
                    <UserAddOutlined/>Register
                </NavLink>
            </div>
        </header>
    )
};

export default Header;
