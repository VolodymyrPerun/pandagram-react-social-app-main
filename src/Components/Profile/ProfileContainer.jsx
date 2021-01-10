import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    setIsFetching,
    setUserProfile
} from "../../redux/profile-reducer";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import style from "../Profile/Profile.module.scss";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId != null ? this.props.match.params.userId : + 2}`)
            .then(res => {
                this.props.setIsFetching(false);
                this.props.setUserProfile(res.data);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ?
                    <Spin className={style.tip}
                          tip="Loading..."
                          indicator={<LoadingOutlined className={style.spinner} spin/>}
                    /> : null}
                <Profile {...this.props} profile={this.props.profile}/>
            </>
        )
    }
}

let mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
};

// let WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    {
        setUserProfile,
        setIsFetching
    }
)(withRouter(ProfileContainer));
