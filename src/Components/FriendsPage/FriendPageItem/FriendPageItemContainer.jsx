import React from "react";
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    setPageSize,
    followToggle,
    unfollowToggle,
    getFriends
} from "../../../redux/friends-reducer";
import FriendPageItem from "./FriendPageItem";
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import style from './FriendPageItem.module.scss';


class FriendPageItemContainer extends React.Component {

    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.props.getFriends(pageNumber, this.props.pageSize)
            .then(response => {
                return response.data;
            });
    };

    onPageChangeMaxFriendsTo50 = pageSize => {
        this.props.setPageSize(pageSize = 50);
        this.props.getFriends(this.props.currentPage, pageSize)
            .then(response => {
                return response.data;
            });
    };

    onPageChangeMaxFriendsTo20 = pageSize => {
        this.props.setPageSize(pageSize = 20);
        this.props.getFriends(this.props.currentPage, pageSize)
            .then(response => {
                return response.data;
            });
    };

    onPageChangeMaxFriendsTo10 = pageSize => {
        this.props.setPageSize(pageSize = 10);
        this.props.getFriends(this.props.currentPage, pageSize)
            .then(response => {
                return response.data;
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
                            followToggle={this.props.followToggle}
                            unfollowToggle={this.props.unfollowToggle}
                            isFetching={this.props.isFetching}
                            followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.friendsPage.followingInProgress
    }
};

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        setPageSize,
        getFriends,
        followToggle,
        unfollowToggle,
    })(FriendPageItemContainer);

