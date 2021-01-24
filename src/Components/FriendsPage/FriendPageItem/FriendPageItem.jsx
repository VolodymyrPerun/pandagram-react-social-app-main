import React from 'react';
import style from './FriendPageItem.module.scss';
import '../../../App.scss'
import avatar from '../../../assets/images/panda_avatar.gif';
import bg from '../../../assets/images/file_item_bg.png'
import avatarSmall from '../../../assets/images/panda_avatar_small.gif'
import {Pagination} from 'antd';
import {FastBackwardFilled, FastForwardFilled} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import Preloader from "../../commons/Preloader/Preloader";


const FriendPageItem = props => {

    let pagesCount = Math.ceil(Math.floor(props.totalFriendsCount / props.pageSize) * 10);

    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <button><FastBackwardFilled/></button>;
        }
        if (type === 'next') {
            return <button><FastForwardFilled/></button>;
        }
        return originalElement;
    }

    return <>
        <div>

            <Pagination className={style.pagination}
                        total={pagesCount}
                        itemRender={itemRender}
                        showLessItems={true}
                        showSizeChanger={false}
                        onChange={(p) => {
                            props.onPageChange(p)
                        }}
                        onClick={(p) => {
                            props.onPageChange(p)
                        }}
            />

            <div className={style.pagesCounter}>Max Friends on one page {props.pageSize}. Click to change:
                <ApplyBtn handleClick={() => {
                    props.onPageChangeMaxFriendsTo10()
                }} label='10'/>
                <ApplyBtn handleClick={() => {
                    props.onPageChangeMaxFriendsTo20()
                }} label='20'/>
                <ApplyBtn handleClick={() => {
                    props.onPageChangeMaxFriendsTo50()
                }} label='50'/>
            </div>
        </div>
        {
            props.friends.map(f =>
                <div key={f.id}>
                    <div className={style.friendItem}
                         style={{
                             backgroundImage: `url(${bg})`,
                             backgroundPosition: 'center',
                             backgroundSize: 'cover',
                             backgroundRepeat: 'no-repeat'
                         }}>
                        <NavLink to={'/profile/' + f.id}>
                            {props.isFetching ?
                                <img src={f.photos.small != null ? f.photos.small : avatarSmall} alt='avatar'/> :
                                <img src={f.photos.large != null ? f.photos.large : avatar} alt='avatar'/>}
                        </NavLink>
                        {props.isFetching ?
                            <div className={style.info}>
                                <Preloader/>
                            </div> :
                            <div className={style.info}>
                                <div
                                    className={style.status}>{f.status != null ? f.status : 'nothing to say...'}</div>
                                <div><span>Name: </span>{f.name != null ? f.name : 'sorry, it`s my business...'}
                                </div>
                                <div>
                                    <span>Nickname: </span>{f.uniqueUrlName ? f.uniqueUrlName : 'sorry, it`s a secret...'}
                                </div>
                                <div className={style.followed}>
                                    {f.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === f.id)}
                                                  onClick={() => {
                                                      props.unfollowToggle(f.id)
                                                  }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === f.id)}
                                                  onClick={() => {
                                                      props.followToggle(f.id)
                                                  }}>Follow</button>}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            )
        }
        <div>
            <Pagination className={style.pagination}
                        total={pagesCount}
                        itemRender={itemRender}
                        showLessItems={true}
                        showSizeChanger={false}
                        onChange={(p) => {
                            props.onPageChange(p)
                        }}
                        onClick={(p) => {
                            props.onPageChange(p)
                        }}
            />

            <div className={style.pagesCounter}>MaxFriends on one page {props.pageSize}. Click to change:
                <ApplyBtn handleClick={() => {
                    props.onPageChangeMaxFriendsTo10()
                }} label='10'/>
                <ApplyBtn handleClick={() => {
                    props.onPageChangeMaxFriendsTo20()
                }} label='20'/>
                <ApplyBtn handleClick={() => {
                    props.onPageChangeMaxFriendsTo50()
                }} label='50'/>
            </div>
        </div>
    </>
};

export default FriendPageItem;
