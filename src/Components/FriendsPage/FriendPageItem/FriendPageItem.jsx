import React from 'react';
import style from './FriendPageItem.module.scss';
import '../../../App.scss'
import avatar from '../../../assets/images/panda_avatar2.gif';
import {Pagination} from 'antd';
import {FastBackwardFilled, FastForwardFilled} from '@ant-design/icons';


const FriendPageItem = props => {

    let pagesCount = Math.ceil(Math.floor(props.totalFriendsCount / props.pageSize) * 10);

    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <a><FastBackwardFilled/></a>;
        }
        if (type === 'next') {
            return <a><FastForwardFilled/></a>;
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

            <div className={style.pagesCounter}>Maximum Friends on one page {props.pageSize}. Click to change:
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
            props.friends.map((f) =>
                < div key={f.id}>
                    <div className={style.friendItem}>
                        <img src={f.photos.large != null ? f.photos.large : avatar}//photos
                            //<img src={f.user_photo != null ?
                            //'http://localhost:5000/' +
                            // f.user_photo : avatar}
                             alt='img'/>
                        <div className={style.info}>
                            <div className={style.status}>{f.status}</div>
                            <div>{'Name:  ' + f.name}</div>
                            <div>{'Surname:  ' + f.surname}</div>
                            <div>{'Age:  ' + f.age}</div>
                            <div>{'Sex:  ' + f.sex}</div>
                            <div>{'Address:  ' + f.address}</div>
                            <div className={style.followed}>
                                {f.followed ? <button onClick={() => {
                                    props.unfollow(f.userId)//id
                                }}>Unfollow</button> : <button onClick={() => {
                                    props.follow(f.userId)//id
                                }}>Follow</button>}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        <div>
            <div className={style.pagesCounter}>Maximum Friends on one page {props.pageSize}. Click to change:
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

            <div className={style.pagesCounter}>Maximum Friends on one page: {props.pageSize}</div>
        </div>
    </>
};

export default FriendPageItem;
