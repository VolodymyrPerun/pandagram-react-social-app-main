import React, {useState} from 'react';
import style from './ProfileInfo.module.scss';
import profilePagePhoto from '../../../assets/images/profilePhoto.png';
import {UploadOutlined} from '@ant-design/icons';
import avatar from "../../../assets/images/panda_avatar.gif";
import bg from "../../../assets/images/file_item_bg.png";
import ProfileStatus from "../ProfileStatus/ProfileStatusWithHooks";// Component with hooks
//import ProfileStatus from "../ProfileStatus/ProfileStatus";// Class component
import Preloader from "../../commons/Preloader/Preloader";
import ProfileInfoData from "../ProfileInfoData/ProfileInfoData";
import ProfileInfoDataForm from "../ProfileInfoDataForm/ProfileInfoDataForm";

const ProfileInfo = ({profile, isFetching, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    let goToEditMode = () => {
        setEditMode(true);
    };

    let onSubmit = formData => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };

    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img
                src={profilePagePhoto}
                alt='Profile'/>
            <div className={style.descriptionBlock}
                 style={{
                     backgroundImage: `url(${bg})`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat'
                 }}>
                <div>
                    {isFetching
                        ? <div>
                            <Preloader/>
                        </div>
                        : <div className={style.content}>
                            <img
                                src={profile.photos.large != null ? profile.photos.large : avatar}
                                alt='avatar'/>
                            {isOwner && <label className={style.customFileUpload}>
                                <input type={'file'}
                                       onChange={onMainPhotoSelected}
                                />
                                <UploadOutlined/> Upload Photo
                            </label>}
                            <div className={style.contentInfo}>
                                <ProfileStatus
                                    status={status}
                                    updateUserStatus={updateUserStatus}
                                />
                                {editMode
                                    ?
                                    <ProfileInfoDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                                    :
                                    <ProfileInfoData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}/>}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
