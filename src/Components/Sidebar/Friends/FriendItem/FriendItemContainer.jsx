import {connect} from 'react-redux';
import FriendItem from "./FriendItem";


let mapStateToProps = (state) => {

    return {
        sidebar: state.sidebar
    }
};

const FriendItemContainer = connect(mapStateToProps)(FriendItem);

export default FriendItemContainer;
