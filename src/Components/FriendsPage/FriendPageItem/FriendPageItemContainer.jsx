import React from "react";
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    setFriends,
    setTotalFriendsCount,
    setPageSize,
    setIsFetching
} from "../../../redux/friends-reducer";
import FriendPageItem from "./FriendPageItem";
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import style from './FriendPageItem.module.scss';
import {friendsAPI} from "../../../API/API";


class FriendPageItemContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        friendsAPI.getFriends(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setFriends(data.items);
                this.props.setTotalFriendsCount(data.totalCount);
            });
    }

    onPageChange = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        friendsAPI.getFriends(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setFriends(data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo50 = pageSize => {
        this.props.setPageSize(pageSize = 50);
        this.props.setIsFetching(true);
        friendsAPI.getFriends(this.props.currentPage, pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setFriends(data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo20 = pageSize => {
        this.props.setPageSize(pageSize = 20);
        this.props.setIsFetching(true);
        friendsAPI.getFriends(this.props.currentPage, pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setFriends(data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo10 = pageSize => {
        this.props.setPageSize(pageSize = 10);
        this.props.setIsFetching(true);
        friendsAPI.getFriends(this.props.currentPage, pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setFriends(data.items);//.items
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
        follow,
        unfollow,
        setFriends,
        setCurrentPage,
        setPageSize,
        setTotalFriendsCount,
        setIsFetching
    })(FriendPageItemContainer);

