import React from 'react';
import style from './ProfileInfoDataForm.module.scss';
import SubmitFollowBtn from "../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import FormsControlItem from "../../commons/FormsControls/FormsControls";
import {INPUT, TEXTAREA} from "../../../constants/formsControls.enum";
import {maxLengthCreator, minLengthCreator} from "../../../validators/validators";
import {Field, reduxForm} from "redux-form";

const ProfileInfoDataForm = ({handleSubmit, pristine, submitting, goToEditMode, error}) => {

    const maxLength145 = maxLengthCreator(145);
    const maxLength15 = maxLengthCreator(15);
    const minLength2 = minLengthCreator(2);

    return (
        <form onSubmit={handleSubmit}>

            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"fullName"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Full name'}
                       warn={[maxLength15, minLength2]}
                       label={<span>Full name:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"aboutMe"}
                       component={FormsControlItem(TEXTAREA)}
                       type={"text"}
                       placeholder={'About me'}
                       warn={[maxLength145, minLength2]}
                       label={<span>About me:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"LookingForAJob"}
                       component={FormsControlItem(INPUT)}
                       type={"checkbox"}
                       placeholder={'Looking for a job'}
                       label={<span>Looking for a job:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"LookingForAJobDescription"}
                       component={FormsControlItem(TEXTAREA)}
                       type={"text"}
                       placeholder={'My professionals skills'}
                       warn={[maxLength145, minLength2]}
                       label={<span>My professionals skills:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"contacts.facebook"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Facebook'}
                       warn={[maxLength145, minLength2]}
                       label={<span>Facebook:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"contacts.twitter"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Twitter'}
                       warn={[maxLength145, minLength2]}
                       label={<span>Twitter:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"contacts.instagram"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Instagram'}
                       warn={[maxLength145, minLength2]}
                       label={<span>Instagram:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"contacts.youtube"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Youtube'}
                       warn={[maxLength145, minLength2]}
                       label={<span>Youtube:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"contacts.github"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Github'}
                       warn={[maxLength145, minLength2]}
                       label={<span>Github:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"contacts.mainLink"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Email'}
                       warn={[maxLength145, minLength2]}
                       label={<span>Email:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"contacts.vk"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Vk'}
                       warn={[maxLength145, minLength2]}
                       label={<span>Vk:</span>}
                />
            </div>
            <div className={style.inputContainer}>
                <Field className={style.input}
                       name={"contacts.website"}
                       component={FormsControlItem(INPUT)}
                       type={"text"}
                       placeholder={'Website'}
                       warn={[maxLength145, minLength2]}
                       label={<span>Website:</span>}
                />
            </div>
            <SubmitFollowBtn
                label="Save"
                name={'Submit'}
                type={"submit"}
                disabled={pristine || submitting}
                onClick={goToEditMode}
            />
            {error &&
            <div className={style.formsSummaryError}>
                <span>ERROR: {error}</span>
            </div>}
        </form>
    )
};

export default reduxForm({
    // a unique name for the form
    form: 'profileInfoDataForm'
})(ProfileInfoDataForm);
