import {connect} from 'react-redux';
import FriendItem from "./FriendItem";
import {setFriendsActionCreator} from "../../../../redux/friends-reducer";


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
};

let mapDispatchToProps = dispatch => {
    return {
        setFriends: friend => dispatch(setFriendsActionCreator(friend))
    }
}

const FriendItemContainer = connect(mapStateToProps, mapDispatchToProps)(FriendItem);

export default FriendItemContainer;
