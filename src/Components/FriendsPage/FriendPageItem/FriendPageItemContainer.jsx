import React from "react";
import {connect} from 'react-redux';
import {
    setCurrentPage,
    setPageSize,
} from "../../../redux/reducers/friendsReducer/actions";
import {
    followToggle,
    unfollowToggle,
    getAllFriends
} from "../../../redux/reducers/friendsReducer/thunks";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalFriendsCount,
    getFriends
} from "../../../redux/reducers/friendsReducer/friends-selectors";
import FriendPageItem from "./FriendPageItem";
import Preloader from "../../commons/Preloader/Preloader";


class FriendPageItemContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getAllFriends(currentPage, pageSize);
    }

    onPageChange = pageNumber => {
        const {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.getAllFriends(pageNumber, pageSize);
    };

    onPageChangeMaxFriendsTo50 = pageSize => {
        const {currentPage} = this.props;
        this.props.setPageSize(pageSize = 50);
        this.props.getAllFriends(currentPage, pageSize);
    };

    onPageChangeMaxFriendsTo20 = pageSize => {
        const {currentPage} = this.props;
        this.props.setPageSize(pageSize = 20);
        this.props.getAllFriends(currentPage, pageSize);
    };

    onPageChangeMaxFriendsTo10 = pageSize => {
        const {currentPage} = this.props;
        this.props.setPageSize(pageSize = 10);
        this.props.getAllFriends(currentPage, pageSize);
    };


    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
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
    };
}

// let mapStateToProps = state => {
//     return {
//         friends: state.friendsPage.friends,
//         pageSize: state.friendsPage.pageSize,
//         totalFriendsCount: state.friendsPage.totalFriendsCount,
//         currentPage: state.friendsPage.currentPage,
//         isFetching: state.friendsPage.isFetching,
//         followingInProgress: state.friendsPage.followingInProgress,
//         isAuth: state.auth.isAuth
//     }
// };

let mapStateToProps = state => {
    return {
        friends: getFriends(state),
        isFetching: getIsFetching(state),
        pageSize: getPageSize(state),
        totalFriendsCount: getTotalFriendsCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps,
    {
        setCurrentPage,
        setPageSize,
        getAllFriends,
        followToggle,
        unfollowToggle
    })(FriendPageItemContainer);

