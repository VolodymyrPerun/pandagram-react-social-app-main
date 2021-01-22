import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import {UserOutlined, UserAddOutlined} from '@ant-design/icons';
import SubmitFollowBtn from "../commons/Buttons/SubmitFollow/SubmitFollowBtn";

const Header = props => {

    return (
        <header className={style.header}>
            <img className={style.logo} alt='img'
                 src={logo}/>
            <div className={style.logoText}>
                <p>P<span>a</span>nd<span>a</span>gr<span>a</span>m</p>
            </div>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div className={style.itemLink}
                           style={{top: '-7px', fontSize: '9px !important', padding: '0', marginRight: '10px'}}>
                        {props.login}
                        <div>
                            <SubmitFollowBtn handleClick={props.logout} label="Logout"/>
                        </div>
                    </div>
                    : <div>
                        <div><NavLink activeClassName={style.active} className={style.itemLink} to={'/login'}>
                            <UserOutlined style={{marginRight: '5px'}}/><SubmitFollowBtn handleClick={props.login}
                                                                                         label={'login'}/>
                        </NavLink></div>
                        <div><NavLink activeClassName={style.active} className={style.itemLink} to={'/register'}>
                            <UserAddOutlined style={{marginRight: '5px'}}/><SubmitFollowBtn handleClick={props.login}
                                                                                            label={'register'}/>
                        </NavLink></div>
                    </div>}
            </div>
        </header>
    )
};

export default Header;
