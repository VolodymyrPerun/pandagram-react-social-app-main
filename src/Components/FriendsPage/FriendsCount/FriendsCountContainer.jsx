import {connect} from 'react-redux';
import FriendsCount from "./FriendsCount";
import {setFriendsActionCreator} from "../../../redux/friends-reducer";


let mapStateToProps = state => {

    return {
        totalFriendsCount: state.friendsPage.totalFriendsCount,
    }
};
let mapDispatchToProps = dispatch => {
    return {
        setFriends: friends => dispatch(setFriendsActionCreator(friends))
    }
};

const FriendCountContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsCount);

export default FriendCountContainer;
