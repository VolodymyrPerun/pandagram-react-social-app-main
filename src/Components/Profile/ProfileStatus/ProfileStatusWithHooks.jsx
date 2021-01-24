import React, {useState} from "react";
import style from './ProfileStatus.module.scss'

const ProfileStatusWithHooks = props => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true);
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    let onStatusChange = e => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={style.statusBlock}>
            {!editMode &&
            <div className={style.contentInfo}>
                <span
                    onClick={activateEditMode}
                >{props.status || 'nothing to say...'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    onBlur={deactivateEditMode}
                    autoFocus={true}
                    value={status}
                />
            </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;
