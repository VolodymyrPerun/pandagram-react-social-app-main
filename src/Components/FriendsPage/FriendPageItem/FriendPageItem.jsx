import React from 'react';
import style from './FriendPageItem.module.scss';
import * as axios from 'axios';
import avatar from '../../../assets/images/avatar_black.jpg';
import {Pagination} from 'antd';


class FriendPageItem extends React.Component {

    componentDidMount() {
        if (this.props.friends.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFriends(response.data.items);//.items
                    this.props.setTotalFriendsCount(response.data.totalCount);//.totalCount
                });
        }
    };

    onPageChange(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);//.items
            });
    }

    render() {

        let pagesCount = Math.ceil(Math.floor(this.props.totalFriendsCount / this.props.pageSize));

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        function itemRender(current, type, originalElement) {
            if (type === 'prev') {
                return <a>Previous</a>;
            }
            if (type === 'next') {
                return <a>Next</a>;
            }
            return originalElement;
        }


        return <>
            <div>
                <Pagination className={style.pagination}
                            total={this.props.totalFriendsCount}
                            current={pages.length}
                            itemRender={itemRender}
                            onChange={(p) => {
                                this.onPageChange(p)
                            }}
                />

                <div className={style.pagesCounter}>Maximum Friends on one page: {this.props.pageSize}</div>
            </div>
            {
                this.props.friends.map((f) =>
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
                                        this.props.unfollow(f.userId)//id
                                    }}>Unfollow</button> : <button onClick={() => {
                                        this.props.follow(f.userId)//id
                                    }}>Follow</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div>
                <Pagination className={style.pagination}
                            total={this.props.totalFriendsCount}
                            current={pages.length}
                            itemRender={itemRender}
                            onChange={(p) => {
                                this.onPageChange(p)
                            }}
                />

                <div className={style.pagesCounter}>Maximum Friends on one page: {this.props.pageSize}</div>
            </div>
        </>
    };
}

export default FriendPageItem;
