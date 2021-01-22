import React from 'react';
import style from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import SubmitFollowBtn from "../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormsControlItem from "../commons/FormsControls/FormsControls";
import {INPUT} from "../../constants/formsControls.enum";
import {email, maxLengthCreator, minLengthCreator, password, required} from "../../validators/validators";


const maxLength20 = maxLengthCreator(20);
const maxLength45 = maxLengthCreator(45);
const minLength2 = minLengthCreator(2);
const minLength8 = minLengthCreator(8);


let LoginForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.inputContainer}>

                <Field className={style.input}
                       name={"email"}
                       component={FormsControlItem(INPUT)}
                       type={"email"}
                       placeholder={'Email'}
                       validate={[required, maxLength45, minLength2]}
                       warning={props.warning}
                       warn={email}
                       label={<FontAwesomeIcon
                           style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                           icon={faAt}/>}
                />
            </div>
            <div className={style.inputContainer}>

                <Field className={style.input}
                       name={"password"}
                       component={FormsControlItem(INPUT)}
                       type={'password'}
                       placeholder={'Password'}
                       validate={[required, maxLength20, minLength8]}
                       warn={password}
                       label={<FontAwesomeIcon
                           style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                           icon={faKey}/>}
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
                <SubmitFollowBtn
                    label="Login"
                    name={'Submit'}
                    type={"submit"}
                    disabled={props.pristine || props.submitting} onClick={props.reset}
                />
            </div>
            {props.error &&
            <div className={style.formsSummaryError}>
                <span>ERROR: {props.error}</span>
            </div>}
        </form>
    )
}

export default reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);

