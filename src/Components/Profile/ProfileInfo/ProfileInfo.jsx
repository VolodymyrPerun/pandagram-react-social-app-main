import React from 'react';
import style from './ProfileInfo.module.scss';
import profilePagePhoto from '../../../assets/images/profilePhoto.png'
import {Spin} from "antd";
import {
    LoadingOutlined,
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    GithubOutlined,
    MailOutlined
} from '@ant-design/icons';
import avatar from "../../../assets/images/panda_avatar.gif";
import bg from "../../../assets/images/file_item_bg.png";

const ProfileInfo = props => {

    if (!props.profile) {
        return <Spin className={style.tip}
                     tip="Loading..."
                     indicator={<LoadingOutlined
                         className={`${style.spinner} ${style.spinnerBig}`}
                         spin/>}
        />
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
                                <Spin className={style.tip}
                                      tip="Loading..."
                                      indicator={<LoadingOutlined
                                          className={`${style.spinner} ${style.spinnerBig}`}
                                          spin/>}
                                />
                            </div> :
                            <div className={style.content}>
                                <img
                                    src={props.profile.photos.large != null ? props.profile.photos.large : avatar}
                                    alt='avatar'/>
                                <div className={style.contentInfo}>
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
                                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                            <a className={style.facebook} href={"http://" + props.profile.contacts.facebook} target="_blank"><FacebookOutlined /></a>
                                        </li>
                                        <li>
                                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                            <a className={style.twitter} href={"http://" + props.profile.contacts.twitter} target="_blank"><TwitterOutlined /></a>
                                        </li>
                                        <li>
                                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                            <a className={style.instagram} href={"http://" + props.profile.contacts.instagram} target="_blank"><InstagramOutlined /></a>
                                        </li>
                                        <li>
                                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                            <a className={style.youtube} href={"http://" + props.profile.contacts.youtube} target="_blank"><YoutubeOutlined /></a>
                                        </li>
                                        <li>
                                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                            <a className={style.github} href={"http://" + props.profile.contacts.github} target="_blank"><GithubOutlined /></a>
                                        </li>
                                        <li>
                                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                                            <a href={"mailto:" + props.profile.contacts.website} target="_blank"><MailOutlined /></a>
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
