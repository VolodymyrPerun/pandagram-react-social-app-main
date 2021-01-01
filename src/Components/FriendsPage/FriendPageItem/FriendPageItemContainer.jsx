import {connect} from 'react-redux';
import FriendPageItem from "./FriendPageItem";


let mapStateToProps = (state) => {

    return {
        sidebar: state.sidebar
    }
};

const FriendPageItemContainer = connect(mapStateToProps)(FriendPageItem);

export default FriendPageItemContainer;
