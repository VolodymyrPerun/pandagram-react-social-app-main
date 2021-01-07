import {connect} from 'react-redux';
import FriendItem from "./FriendItem";
import {setFriendsActionCreator} from "../../../../redux/friends-reducer";


let mapStateToProps = state => {
    return {
        friends: state.friendsPage.friends,
    }
};

let mapDispatchToProps = dispatch => {
    return {
        setFriends: friend => dispatch(setFriendsActionCreator(friend))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(FriendItem);
