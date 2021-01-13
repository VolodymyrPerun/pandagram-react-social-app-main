import {connect} from 'react-redux';
import FriendItem from "./FriendItem";
import {getSidebarFriends} from "../../../../redux/sidebar-reducer";
import React from "react";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import style from "../../../FriendsPage/FriendPageItem/FriendPageItem.module.scss";


class FriendItemContainer extends React.Component {

    componentDidMount() {
        this.props.getSidebarFriends()
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Spin className={style.tip}
                      indicator={<LoadingOutlined className={style.spinner} spin/>}
                /> :
                <FriendItem friends={this.props.friends}/>}
        </>
    }
}

let mapStateToProps = state => {
    return {
        friends: state.sidebar.friends,
        isFetching: state.sidebar.isFetching
    }
};

export default connect(mapStateToProps, {getSidebarFriends})(FriendItemContainer);
