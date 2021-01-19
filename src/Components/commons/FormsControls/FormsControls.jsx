import React from 'react';
import style from './FormsControls.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

const Textarea = ({input, meta: {touched, error, warning}, label, ...props}) => {
    debugger
    return (
        <>
            {/*<label>{label}</label>*/}
            <div>
                <textarea className={style.textareaField}
                          {...input}
                          placeholder={props.placeholder}
                          rows="4"
                          cols="50"/>
                <div className={style.errors}>
                    {touched &&
                    ((error && <span>
                            <FontAwesomeIcon
                                style={{marginRight: '3px'}}
                                icon={faExclamationCircle}/>{
                            error}</span>) ||
                        (warning && <span>
                            <FontAwesomeIcon
                                style={{marginRight: '3px'}}
                                icon={faExclamationCircle}/>
                            {warning}</span>))}
                </div>
            </div>
        </>
    )
};

export default Textarea;
