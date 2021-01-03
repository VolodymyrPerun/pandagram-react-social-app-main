import {connect} from 'react-redux';
import FriendPageItem from "./FriendPageItem";
import {followActionCreator, unfollowActionCreator, setFriendsActionCreator} from "../../../redux/friends-reducer";


let mapStateToProps = state => {
    return {
        friendsPage: state.friendsPage
    }
};

let mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch(followActionCreator(userId)),
        unfollow: userId => dispatch(unfollowActionCreator(userId)),
        setFriends: friend => dispatch(setFriendsActionCreator(friend))
    }
}

const FriendPageItemContainer = connect(mapStateToProps, mapDispatchToProps)(FriendPageItem);

export default FriendPageItemContainer;
