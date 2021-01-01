import {connect} from 'react-redux';
import FriendsCount from "./FriendsCount";


let mapStateToProps = (state) => {

    return {
        sidebar: state.sidebar
    }
};

const FriendCountContainer = connect(mapStateToProps)(FriendsCount);

export default FriendCountContainer;
