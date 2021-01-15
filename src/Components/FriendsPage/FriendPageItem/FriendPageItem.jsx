import React from 'react';
import style from './FriendPageItem.module.scss';
import '../../../App.scss'
import avatar from '../../../assets/images/panda_avatar.gif';
import bg from '../../../assets/images/file_item_bg.png'
import avatarSmall from '../../../assets/images/panda_avatar_small.gif'
import {Pagination, Spin} from 'antd';
import {FastBackwardFilled, FastForwardFilled, LoadingOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';


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
                <button className='btn' style={{width: '50px', height: '40px'}} onClick={() => {
                    props.onPageChangeMaxFriendsTo10()
                }}>{10}</button>
                <button className='btn' style={{width: '50px', height: '40px'}} onClick={() => {
                    props.onPageChangeMaxFriendsTo20()
                }}>{20}</button>
                <button className='btn' style={{width: '50px', height: '40px'}} onClick={() => {
                    props.onPageChangeMaxFriendsTo50()
                }}>{50}</button>
            </div>
        </div>
        {
            props.friends.map(f =>
                <div key={f.id}>
                    <NavLink to={'/profile/' + f.id}>
                        <div className={style.friendItem}
                             style={{
                                 backgroundImage: `url(${bg})`,
                                 backgroundPosition: 'center',
                                 backgroundSize: 'cover',
                                 backgroundRepeat: 'no-repeat'
                             }}>

                            {props.isFetching ?
                                <img src={f.photos.small != null ? f.photos.small : avatarSmall} alt='avatar'/> :
                                <img src={f.photos.large != null ? f.photos.large : avatar} alt='avatar'/>}
                            {props.isFetching ?
                                <div className={style.info}>
                                    <Spin className={style.tip}
                                          tip="Loading..."
                                          indicator={<LoadingOutlined
                                              className={`${style.spinner} ${style.spinnerBig}`}
                                              spin/>}
                                    />
                                </div> :
                                <div className={style.info}>
                                    <div className={style.status}>{f.status  != null ? f.status : 'nothing to say...'}</div>
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
                    </NavLink>
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
                <button className='btn' style={{width: '50px', height: '40px'}} onClick={() => {
                    props.onPageChangeMaxFriendsTo10()
                }}>{10}</button>
                <button className='btn' style={{width: '50px', height: '40px'}} onClick={() => {
                    props.onPageChangeMaxFriendsTo20()
                }}>{20}</button>
                <button className='btn' style={{width: '50px', height: '40px'}} onClick={() => {
                    props.onPageChangeMaxFriendsTo50()
                }}>{50}</button>
            </div>
        </div>
    </>
};

export default FriendPageItem;
