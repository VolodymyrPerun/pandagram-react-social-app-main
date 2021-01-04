import {connect} from 'react-redux';
import FriendPageItem from "./FriendPageItem";
import {followActionCreator, unfollowActionCreator, setFriendsActionCreator} from "../../../redux/friends-reducer";


let mapStateToProps = state => {
    return {
        friends: state.friendsPage.friends
    }
};

let mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch(followActionCreator(userId)),
        unfollow: userId => dispatch(unfollowActionCreator(userId)),
        setFriends: friends => dispatch(setFriendsActionCreator(friends))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendPageItem);
