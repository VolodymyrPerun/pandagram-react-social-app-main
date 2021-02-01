import React from 'react';
import style from './ProfileInfoData.module.scss';
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    GithubOutlined,
    MailOutlined
} from '@ant-design/icons';
import {faVk} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SubmitFollowBtn from "../../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import HeartIcon from "../../../commons/CustomIcons/HeartIcon";
import PandaIcon from "../../../commons/CustomIcons/PandaIcon";

const ProfileInfoData = ({profile, isOwner, goToEditMode}) => {

    return (
        <>
            {isOwner &&
            <SubmitFollowBtn
                handleClick={() => {
                    goToEditMode()
                }}
                label="Edit Data"
                name={'Edit'}
                type={"button"}/>}
            <ul>
                <li>
                    <span>Full name:</span> {profile.fullName != null ? profile.fullName : 'sorry, it`s my business...'}
                </li>
                <li>
                    <span>About me:</span> {profile.aboutMe != null ? profile.aboutMe : 'sorry, it`s a secret...'}
                </li>
                <li>
                    <span>Looking for a job:</span> {profile.lookingForAJob ? 'yes' : 'no'}
                </li>
                {profile.lookingForAJob &&
                <li>
                    <span>My professionals skills:</span> {profile.lookingForAJobDescription != null ? profile.lookingForAJobDescription : 'sorry, but it`m not looking for a job...'}
                </li>}
            </ul>
            <ul className={style.socialMedias}>
                <li>
                    <a className={style.facebook}
                       href={profile.contacts.facebook}
                       rel="noopener noreferrer"
                       target="_blank"><FacebookOutlined/></a>
                </li>
                <li>
                    <a className={style.twitter}
                       href={profile.contacts.twitter}
                       rel="noopener noreferrer"
                       target="_blank"><TwitterOutlined/></a>
                </li>
                <li>
                    <a className={style.instagram}
                       href={profile.contacts.instagram}
                       rel="noopener noreferrer"
                       target="_blank"><InstagramOutlined/></a>
                </li>
                <li>
                    <a className={style.youtube}
                       href={profile.contacts.youtube}
                       rel="noopener noreferrer"
                       target="_blank"><YoutubeOutlined/></a>
                </li>
                <li>
                    <a className={style.github}
                       href={profile.contacts.github}
                       rel="noopener noreferrer"
                       target="_blank"><GithubOutlined/></a>
                </li>
                <li>
                    <a className={style.email} href={profile.contacts.website}
                       rel="noopener noreferrer"
                       target="_blank">
                        <div className={style.customIconsList}>
                            <HeartIcon style={{
                                position: 'relative',
                                top: '-12px',
                                left: '-12px',
                                fontSize: '12px',
                                color: 'hotpink'
                            }}
                            />
                            <PandaIcon style={{fontSize: '20px'}}/>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={style.vk} href={profile.contacts.vk}
                       rel="noopener noreferrer"
                       target="_blank"><FontAwesomeIcon icon={faVk}/></a>
                </li>
                <li>
                    <a className={style.email} href={'mailto:' + profile.contacts.mainLink}
                       rel="mailto:profile.contacts.mainLink"
                       target="mailto:profile.contacts.mainLink"><MailOutlined/></a>
                </li>
            </ul>
        </>
    )
};

export default ProfileInfoData;
