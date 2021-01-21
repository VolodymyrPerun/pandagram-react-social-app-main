import React from 'react';
import style from './MessageFormItem.module.scss';
import {Field, reduxForm} from "redux-form";
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import FormsControlItem from "../../commons/FormsControls/FormsControls";
import {
    maxLengthCreator,
    minLengthCreator,
    required
} from "../../../validators/validators";
import {TEXTAREA} from "../../../constants/formsControls.enum";


const maxLength50 = maxLengthCreator(50);
const minLength2 = minLengthCreator(2);

const MessageFormItem = props => {

    return (
        <div className={style.formItem}>
            <div>
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field
                            className={style.textareaField}
                            name={"newMessageText"}
                            component={FormsControlItem(TEXTAREA)}
                            type={"textarea"}
                            placeholder={'Enter your message...'}
                            validate={[required, maxLength50, minLength2]}
                        />
                    </div>
                    <div>
                        <ApplyBtn label="Send" name={'Submit'} type={"submit"}/>
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
