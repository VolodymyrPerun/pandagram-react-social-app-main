import React from 'react';
import style from './Login.module.scss';
import loginPagePhoto from '../../assets/images/login-panda.gif'
import bg from "../../assets/images/login-page-bg.png";
import LoginForm from "./LoginForm";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


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

                <h1 className={style.title}><FontAwesomeIcon
                    style={{marginRight: '13px', bottom:'-5px', position:'relative'}}
                    icon={faSignInAlt}/>Login</h1>
                <LoginForm onSubmit={onSubmit}/>

            </div>
        </div>
    )
};

export default Login;

