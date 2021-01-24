import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import style from "../Profile/Profile.module.scss";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId);
        this.props.getUserStatus(this.props.match.params.userId);
    }


    render() {

        return (
            <div className={style.isFetching}>
                {this.props.isFetching ?
                    <Spin className={style.tip}
                          tip="Loading..."
                          indicator={<LoadingOutlined className={style.spinner} spin/>}
                    /> : null}
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        id: state.auth.id,
        isAuth: state.auth.isAuth
    }
};


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
