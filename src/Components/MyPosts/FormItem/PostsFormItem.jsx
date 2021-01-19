import React from 'react';
import style from './PostsFormItem.module.scss';
import {Field, reduxForm} from "redux-form";
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {
    maxLengthCreator,
    minLengthCreator,
    required
} from "../../../validators/validators";
import Textarea from "../../commons/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2);

const PostsFormItem = props => {

    return (
        <div className={style.formWrapper}>
            <form onSubmit={props.handleSubmit}>
                <div className={style.form}>
                    <div className={style.formItem}>
                        <Field
                            name={"newPostText"}
                            component={Textarea}
                            type={"textarea"}
                            // label={'Enter your post...'}
                            placeholder={'Enter your post...'}
                            validate={[required, maxLength10, minLength2]}
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
