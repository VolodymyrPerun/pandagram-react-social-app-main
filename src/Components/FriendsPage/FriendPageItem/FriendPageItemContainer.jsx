import {connect} from 'react-redux';
import FriendPageItem from "./FriendPageItem";
import {
    followActionCreator,
    unfollowActionCreator,
    setCurrentPageActionCreator,
    setFriendsActionCreator,
    setTotalFriendsCountActionCreator
} from "../../../redux/friends-reducer";


let mapStateToProps = state => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
    }
};

let mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch(followActionCreator(userId)),
        unfollow: userId => dispatch(unfollowActionCreator(userId)),
        setFriends: friends => dispatch(setFriendsActionCreator(friends)),
        setCurrentPage: page => dispatch(setCurrentPageActionCreator(page)),
        setTotalFriendsCount: totalFriendsCount => dispatch(setTotalFriendsCountActionCreator(totalFriendsCount))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendPageItem);
