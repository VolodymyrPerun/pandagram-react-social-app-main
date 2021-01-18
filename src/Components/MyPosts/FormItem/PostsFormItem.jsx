import React from 'react';
import style from './PostsFormItem.module.scss';
import {Field, reduxForm} from "redux-form";
import ApplyBtn from "../../Buttons/Apply/ApplyBtn";


const PostsFormItem = props => {

    return (
        <div className={style.formWrapper}>
            <form  onSubmit={props.handleSubmit}>
                <div className={style.form}>
                    <div className={style.formItem}>
                        <Field
                            className={style.textareaField}
                            name={"newPostText"}
                            component={"textarea"}
                            type={"textarea"}
                            placeholder={'Enter your post...'}
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
