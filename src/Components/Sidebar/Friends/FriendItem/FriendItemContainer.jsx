import {connect} from 'react-redux';
import FriendItem from "./FriendItem";
import {setFriends, setIsFetching} from "../../../../redux/sidebar-reducer";
import React from "react";
import * as axios from "axios";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import style from "../../../FriendsPage/FriendPageItem/FriendPageItem.module.scss";


class FriendItemContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setFriends(response.data.items);
            });
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Spin className={style.tip}
                      indicator={<LoadingOutlined className={style.spinner} spin/>}
                /> :
                <FriendItem friends={this.props.friends}
                            isFetching={this.props.isFetching}

                />}
        </>
    }
}

let mapStateToProps = state => {
    return {
        friends: state.sidebar.friends,
        isFetching: state.sidebar.isFetching
    }
};

export default connect(mapStateToProps, {setFriends, setIsFetching})(FriendItemContainer);
