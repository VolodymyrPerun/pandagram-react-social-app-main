import React from 'react';
import style from './MessageFormItem.module.scss';
import {Field, reduxForm} from "redux-form";
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";


const MessageFormItem = props => {

    return (
        <div className={style.formItem}>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field
                            className={style.textareaField}
                            name={"newMessageText"}
                            component={"textarea"}
                            type={"textarea"}
                            placeholder={'Enter your message...'}
                        />
                    </div>
                    <div>
                        <ApplyBtn label="Send" name={'Submit'}  type={"submit"}/>
                    </div>
                </form>
            </div>

        </div>
    )
};

export default reduxForm({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(MessageFormItem);
