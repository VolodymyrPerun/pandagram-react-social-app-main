import React from 'react';
import style from './Login.module.scss';
import loginPagePhoto from '../../assets/images/login-panda.gif'
import bg from "../../assets/images/login-page-bg.png";

const Login = () => {
    return (
        <div className={style.login}
             style={{
                 backgroundImage: `url(${bg})`,
                 backgroundPosition: 'center',
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat'
             }}>
            <img
                 alt='img'
                 src={loginPagePhoto}/>
            <p className={style.title}>Login</p>
        </div>
    )
};

export default Login;
