import React from 'react';
import style from './Login.module.scss';
import loginPagePhoto from '../../assets/images/login-panda.gif'
import bg from "../../assets/images/login-page-bg.png";
import LoginForm from "./LoginForm";


const Login = props => {

    let onSubmit = formData => {
        console.log(formData);
    }

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

            <div className={style.forms}>

                <h1 className={style.title}>Login</h1>
                <LoginForm onSubmit={onSubmit}/>

            </div>
        </div>
    )
};

export default Login;

