import React from 'react';
import style from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import SubmitFollowBtn from "../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormsControlItem from "../commons/FormsControls/FormsControls";
import {INPUT} from "../../constants/formsControls.enum";
import {maxLengthCreator, minLengthCreator, required} from "../../validators/validators";


const maxLength25 = maxLengthCreator(25);
const minLength2 = minLengthCreator(2);

let LoginForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.inputContainer}>
                <FontAwesomeIcon
                    style={{marginRight: '13px', bottom:'-5px', position:'relative'}}
                    icon={faAt}/>
                <Field className={style.input}
                       name={"email"}
                       component={FormsControlItem(INPUT)}
                       type={"email"}
                       placeholder={'Email'}
                       validate={[required, maxLength25, minLength2]}
                />
            </div>
            <div className={style.inputContainer}>
                <FontAwesomeIcon
                    style={{marginRight: '13px', bottom:'-5px', position:'relative'}}
                    icon={faKey}/>
                <Field className={style.input}
                       name={"password"}
                       component={FormsControlItem(INPUT)}
                       type={"password"}
                       placeholder={'Password'}
                       validate={[required, maxLength25, minLength2]}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"rememberMe"}
                       component={'input'}
                       type={'Checkbox'}
                />
                <label className={style.input} htmlFor={"rememberMe"}> remember me</label>
            </div>
            <div className={style.inputContainer}>
                <SubmitFollowBtn label="Login" name={'Submit'} type={"submit"}/>
            </div>
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);

