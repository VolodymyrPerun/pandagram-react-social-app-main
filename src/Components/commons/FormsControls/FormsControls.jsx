import React from 'react';
import style from './FormsControls.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

const Textarea = ({input, meta: {touched, error, warning}, label, ...props}) => {

    const isError = touched && ((error || warning));

    return (
        <>
            {/*<label>{label}</label>*/}
            <div className={`${style.formsControls} ${isError ? style.error : ""}`}>
                <textarea className={style.textareaField}
                          {...input}
                          placeholder={props.placeholder}
                          rows="4"
                          cols="50"/>
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
            </div>
        </>
    )
};

export default Textarea;
