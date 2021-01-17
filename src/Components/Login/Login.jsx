import React from 'react';
import style from './Login.module.scss';
import loginPagePhoto from '../../assets/images/login-panda.gif'
import bg from "../../assets/images/login-page-bg.png";
import {Field, reduxForm} from "redux-form";
import SubmitFollowBtn from "../Buttons/SubmitFollow/SubmitFollowBtn";


let LoginForm = props => {
    let {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {/*<label htmlFor={"Login"}>Login </label>*/}
                <Field  className={style.input} name={"Login"} component={"input"} type={"text"} placeholder={'Login'}/>
            </div>
            <div>
                {/*<label htmlFor={"Password"}>Password </label>*/}
                <Field className={style.input}  name={"Password"} component={"input"} type={"text"} placeholder={'Password'}/>
            </div>
            <div>
                <Field className={style.input}  name={"RememberMe"} component={"input"} type={'Checkbox'}/>
                <label className={style.input}  htmlFor={"RememberMe"}> remember me</label>
            </div>
            <div>

                <SubmitFollowBtn label="Login" name={'Submit'}  type={"submit"}/>
            </div>
        </form>
    )
}

LoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

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

