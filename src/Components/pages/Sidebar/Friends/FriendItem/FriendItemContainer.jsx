import {connect} from 'react-redux';
import FriendItem from "./FriendItem";
import {getSidebarFriends} from "../../../../../redux/reducers/sidebarReducer/thunks";
import React from "react";
import Preloader from "../../../../commons/Preloader/Preloader";


class FriendItemContainer extends React.Component {

    componentDidMount() {
        let {getSidebarFriends} = this.props;
        getSidebarFriends();
    };

    render() {

        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <FriendItem friends={this.props.friends}/>}
        </>
    };
}

let mapStateToProps = state => {
    return {
        friends: state.sidebar.friends,
        isFetching: state.sidebar.isFetching
    }
};

export default connect(mapStateToProps, {getSidebarFriends})(FriendItemContainer);
