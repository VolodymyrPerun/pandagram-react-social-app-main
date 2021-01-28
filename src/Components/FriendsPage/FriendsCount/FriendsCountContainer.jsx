import {connect} from 'react-redux';
import FriendsCount from "./FriendsCount";
import {setFriends} from "../../../redux/reducers/friendsReducer/actions";


let mapStateToProps = state => {

    return {
        totalFriendsCount: state.friendsPage.totalFriendsCount,
    }
};
let mapDispatchToProps = dispatch => {
    return {
        setFriends: friends => dispatch(setFriends(friends))
    }
};

const FriendCountContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsCount);

export default FriendCountContainer;
