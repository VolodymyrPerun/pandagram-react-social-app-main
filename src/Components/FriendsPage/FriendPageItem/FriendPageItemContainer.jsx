import React from "react";
import * as axios from "axios";
import {connect} from 'react-redux';
import {
    followActionCreator,
    unfollowActionCreator,
    setCurrentPageActionCreator,
    setFriendsActionCreator,
    setTotalFriendsCountActionCreator,
    setPageSizeActionCreator,
    setIsFetchingActionCreator
} from "../../../redux/friends-reducer";
import FriendPageItem from "./FriendPageItem";
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import style from './FriendPageItem.module.scss';


class FriendPageItemContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetchingActionCreator(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetchingActionCreator(false);
                this.props.setFriends(response.data.items);
                this.props.setTotalFriendsCount(response.data.totalCount);
            });
    }

    onPageChange = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetchingActionCreator(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetchingActionCreator(false);
                this.props.setFriends(response.data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo50 = pageSize => {
        this.props.setPageSize(pageSize = 50);
        this.props.setIsFetchingActionCreator(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageSize}`)
            .then(response => {
                this.props.setIsFetchingActionCreator(false);
                this.props.setFriends(response.data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo20 = pageSize => {
        this.props.setPageSize(pageSize = 20);
        this.props.setIsFetchingActionCreator(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageSize}`)
            .then(response => {
                this.props.setIsFetchingActionCreator(false);
                this.props.setFriends(response.data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo10 = pageSize => {
        this.props.setPageSize(pageSize = 10);
        this.props.setIsFetchingActionCreator(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageSize}`)
            .then(response => {
                this.props.setIsFetchingActionCreator(false);
                this.props.setFriends(response.data.items);//.items
            });
    };


    render() {
        return <>

            {this.props.isFetching ?
                <Spin className={style.tip}
                      tip="Loading..."
                      indicator={<LoadingOutlined className={style.spinner} spin/>}
                /> : null}
            <FriendPageItem totalFriendsCount={this.props.totalFriendsCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChange={this.onPageChange}
                            friends={this.props.friends}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            isFetching={this.props.isFetching}
                            onPageChangeMaxFriendsTo50={this.onPageChangeMaxFriendsTo50}
                            onPageChangeMaxFriendsTo20={this.onPageChangeMaxFriendsTo20}
                            onPageChangeMaxFriendsTo10={this.onPageChangeMaxFriendsTo10}
            />
        </>
    }
}

let mapStateToProps = state => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching,
    }
};

export default connect(mapStateToProps,
    {
        follow: followActionCreator,
        unfollow: unfollowActionCreator,
        setFriends: setFriendsActionCreator,
        setCurrentPage: setCurrentPageActionCreator,
        setPageSize: setPageSizeActionCreator,
        setTotalFriendsCount: setTotalFriendsCountActionCreator,
        setIsFetchingActionCreator: setIsFetchingActionCreator
    })(FriendPageItemContainer);

