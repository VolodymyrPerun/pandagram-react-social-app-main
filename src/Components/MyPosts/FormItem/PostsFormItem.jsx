import React from 'react';
import style from './PostsFormItem.module.scss';
import {Field, reduxForm} from "redux-form";
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {
    maxLengthCreator,
    minLengthCreator,
    required
} from "../../../validators/validators";
import FormsControlItem from "../../commons/FormsControls/FormsControls";
import {TEXTAREA} from "../../../constants/formsControls.enum";


const maxLength50 = maxLengthCreator(50);
const minLength2 = minLengthCreator(2);

const PostsFormItem = ({handleSubmit}) => {

    return (
        <div className={style.formWrapper}>
            <form onSubmit={handleSubmit}>
                <div className={style.form}>
                    <div className={style.formItem}>
                        <Field
                            name={"newPostText"}
                            component={FormsControlItem(TEXTAREA)}
                            type={"textarea"}
                            placeholder={'Enter your post...'}
                            validate={[required, maxLength50, minLength2]}
                        />
                    </div>
                    <div className={style.formItem}>
                        <ApplyBtn label="Send" name={'Submit'} type={"submit"}/>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default reduxForm({
    // a unique name for the form
    form: 'postsAddMessageForm'
})(PostsFormItem);
