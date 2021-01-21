import React from 'react';
import style from './FormsControls.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {INPUT, TEXTAREA} from '../../../constants/formsControls.enum'


const FormsControlItem = item => ({input, meta: {touched, error, warning}, label, ...props}) => {

    let isError = touched && ((error || warning));

    const Error = () => {

        return (
            <div className={style.errorsContainer}>
                {isError && (<span>
                            <FontAwesomeIcon
                                style={{marginRight: '3px'}}
                                icon={faExclamationCircle}/>{
                        error}</span> ||
                    <span>
                            <FontAwesomeIcon
                                style={{marginRight: '3px'}}
                                icon={faExclamationCircle}/>
                        {warning}</span>)}
            </div>
        )
    }


    switch (item) {
        case TEXTAREA:
            return (
                <>
                    {/*<label>{label}</label>*/}
                    <div className={`${style.formsControls} ${isError ? style.error : ""}`}>
                <textarea className={style.textareaField}
                           {...input}
                           placeholder={props.placeholder}
                           rows="4"
                           cols="50"/>
                        <Error/>
                    </div>
                </>
            )
        case INPUT:
            return (
                <>
                    {/*<label>{label}</label>*/}
                    <div className={`${style.formsControls} ${isError ? style.error : ""}`}>
                        <input className={style.inputField}
                                {...input}
                                placeholder={props.placeholder}/>
                        <Error/>
                    </div>
                </>
            )
        default:
            return null;
    }
};

export default FormsControlItem;
