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

const ProfileInfo = props => {

    if (!props.profile) {
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
                        {props.isFetching ?
                            <div>
                                <Preloader/>
                            </div> :
                            <div className={style.content}>
                                <img
                                    src={props.profile.photos.large != null ? props.profile.photos.large : avatar}
                                    alt='avatar'/>
                                <div className={style.contentInfo}>
                                    <ProfileStatus
                                        status={props.status}
                                        updateUserStatus={props.updateUserStatus}
                                    />
                                    <ul>
                                        <li>
                                            <span>Full name:</span> {props.profile.fullName != null ? props.profile.fullName : 'sorry, it`s my business...'}
                                        </li>
                                        <li>
                                            <span>About me:</span> {props.profile.aboutMe != null ? props.profile.aboutMe : 'sorry, it`s a secret...'}
                                        </li>
                                        <li>
                                            <span>Looking for a job:</span> {props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : 'sorry, but it`m not looking for a job...'}
                                        </li>
                                    </ul>
                                    <ul className={style.socialMedias}>
                                        <li>
                                            <a className={style.facebook}
                                               href={"http://" + props.profile.contacts.facebook}
                                               rel="noopener noreferrer"
                                               target="_blank"><FacebookOutlined/></a>
                                        </li>
                                        <li>
                                            <a className={style.twitter}
                                               href={"http://" + props.profile.contacts.twitter}
                                               rel="noopener noreferrer"
                                               target="_blank"><TwitterOutlined/></a>
                                        </li>
                                        <li>
                                            <a className={style.instagram}
                                               href={"http://" + props.profile.contacts.instagram}
                                               rel="noopener noreferrer"
                                               target="_blank"><InstagramOutlined/></a>
                                        </li>
                                        <li>
                                            <a className={style.youtube}
                                               href={"http://" + props.profile.contacts.youtube}
                                               rel="noopener noreferrer"
                                               target="_blank"><YoutubeOutlined/></a>
                                        </li>
                                        <li>
                                            <a className={style.github} href={"http://" + props.profile.contacts.github}
                                               rel="noopener noreferrer"
                                               target="_blank"><GithubOutlined/></a>
                                        </li>
                                        <li>
                                            <a href={"mailto:" + props.profile.contacts.website}
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
