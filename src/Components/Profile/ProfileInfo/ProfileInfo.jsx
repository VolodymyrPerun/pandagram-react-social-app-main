import React from 'react';
import style from './ProfileInfo.module.scss';
import profilePagePhoto from '../../../assets/images/profilePhoto.png';
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    GithubOutlined,
    MailOutlined
} from '@ant-design/icons';
import avatar from "../../../assets/images/panda_avatar.gif";
import bg from "../../../assets/images/file_item_bg.png";
import ProfileStatus from "../ProfileStatus/ProfileStatusWithHooks";
import Preloader from "../../commons/Preloader/Preloader";

const ProfileInfo = ({profile, isFetching, status, updateUserStatus}) => {

    if (!profile) {
        return <Preloader/>
    } else {
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
                        {isFetching ?
                            <div>
                                <Preloader/>
                            </div> :
                            <div className={style.content}>
                                <img
                                    src={profile.photos.large != null ? profile.photos.large : avatar}
                                    alt='avatar'/>
                                <div className={style.contentInfo}>
                                    <ProfileStatus
                                        status={status}
                                        updateUserStatus={updateUserStatus}
                                    />
                                    <ul>
                                        <li>
                                            <span>Full name:</span> {profile.fullName != null ? profile.fullName : 'sorry, it`s my business...'}
                                        </li>
                                        <li>
                                            <span>About me:</span> {profile.aboutMe != null ? profile.aboutMe : 'sorry, it`s a secret...'}
                                        </li>
                                        <li>
                                            <span>Looking for a job:</span> {profile.lookingForAJobDescription != null ? profile.lookingForAJobDescription : 'sorry, but it`m not looking for a job...'}
                                        </li>
                                    </ul>
                                    <ul className={style.socialMedias}>
                                        <li>
                                            <a className={style.facebook}
                                               href={"http://" + profile.contacts.facebook}
                                               rel="noopener noreferrer"
                                               target="_blank"><FacebookOutlined/></a>
                                        </li>
                                        <li>
                                            <a className={style.twitter}
                                               href={"http://" + profile.contacts.twitter}
                                               rel="noopener noreferrer"
                                               target="_blank"><TwitterOutlined/></a>
                                        </li>
                                        <li>
                                            <a className={style.instagram}
                                               href={"http://" + profile.contacts.instagram}
                                               rel="noopener noreferrer"
                                               target="_blank"><InstagramOutlined/></a>
                                        </li>
                                        <li>
                                            <a className={style.youtube}
                                               href={"http://" + profile.contacts.youtube}
                                               rel="noopener noreferrer"
                                               target="_blank"><YoutubeOutlined/></a>
                                        </li>
                                        <li>
                                            <a className={style.github} href={"http://" + profile.contacts.github}
                                               rel="noopener noreferrer"
                                               target="_blank"><GithubOutlined/></a>
                                        </li>
                                        <li>
                                            <a href={"mailto:" + profile.contacts.website}
                                               rel="noopener noreferrer"
                                               target="_blank"><MailOutlined/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default ProfileInfo;
