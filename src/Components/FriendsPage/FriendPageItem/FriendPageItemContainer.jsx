import React from "react";
import * as axios from "axios";
import {connect} from 'react-redux';
import {
    followActionCreator,
    unfollowActionCreator,
    setCurrentPageActionCreator,
    setFriendsActionCreator,
    setTotalFriendsCountActionCreator,
    setPageSizeActionCreator
} from "../../../redux/friends-reducer";
import FriendPageItem from "./FriendPageItem";
import isFetching  from "../../../assets/images/isFetching.gif";


class FriendPageItemContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalFriendsCount(response.data.totalCount);
            });
    }

    onPageChange = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo50 = pageSize => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=50`)
            .then(response => {
                this.props.setPageSize(pageSize = 50);
                this.props.setFriends(response.data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo20 = pageSize => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=20`)
            .then(response => {
                this.props.setPageSize(pageSize = 20);
                this.props.setFriends(response.data.items);//.items
            });
    };

    onPageChangeMaxFriendsTo10 = pageSize => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=10`)
            .then(response => {
                this.props.setPageSize(pageSize = 10);
                this.props.setFriends(response.data.items);//.items
            });
    };

    render() {
        return <>

            {this.props.isFetching ? <img src={isFetching}/> : null}
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

let mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch(followActionCreator(userId)),
        unfollow: userId => dispatch(unfollowActionCreator(userId)),
        setFriends: friends => dispatch(setFriendsActionCreator(friends)),
        setCurrentPage: pageNumber => dispatch(setCurrentPageActionCreator(pageNumber)),
        setPageSize: pageSize => dispatch(setPageSizeActionCreator(pageSize)),
        setTotalFriendsCount: totalFriendsCount => dispatch(setTotalFriendsCountActionCreator(totalFriendsCount))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendPageItemContainer);

