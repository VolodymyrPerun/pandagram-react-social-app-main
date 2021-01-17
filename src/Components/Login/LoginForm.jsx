import React from 'react';
import style from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import SubmitFollowBtn from "../Buttons/SubmitFollow/SubmitFollowBtn";


let LoginForm = props => {
    let {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                {/*<label htmlFor={"Login"}>Login </label>*/}
                <Field  className={style.input} name={"email"} component={"input"} type={"email"} placeholder={'Email'}/>
            </div>
            <div>
                {/*<label htmlFor={"Password"}>Password </label>*/}
                <Field className={style.input}  name={"password"} component={"input"} type={"password"} placeholder={'Password'}/>
            </div>
            <div>
                <Field className={style.input}  name={"rememberMe"} component={"input"} type={'Checkbox'}/>
                <label className={style.input}  htmlFor={"rememberMe"}> remember me</label>
            </div>
            <div>

                <SubmitFollowBtn label="Login" name={'Submit'}  type={"submit"}/>
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

