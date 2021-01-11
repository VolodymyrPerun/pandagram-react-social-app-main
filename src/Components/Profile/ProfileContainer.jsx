import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    setIsFetching,
    setUserProfile
} from "../../redux/profile-reducer";
import {
    setAuthUserData
} from "../../redux/auth-reducer";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import style from "../Profile/Profile.module.scss";
import {withRouter} from "react-router-dom";
import {authAPI, profileAPI} from "../../API/API";

class ProfileContainer extends React.Component {

    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, login, email);
                    profileAPI.getProfile(this.props.match.params.userId != null ? this.props.match.params.userId : id)
                        .then(data => {
                            this.props.setIsFetching(false);
                            this.props.setUserProfile(data);
                        })
                }
            });

    }

    render() {
        return (
            <div className={style.isFetching}>
                {this.props.isFetching ?
                    <Spin className={style.tip}
                          tip="Loading..."
                          indicator={<LoadingOutlined className={style.spinner} spin/>}
                    /> : null}
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        id: state.auth.id
    }
};


export default connect(mapStateToProps,
    {
        setUserProfile,
        setIsFetching,
        setAuthUserData
    }
)(withRouter(ProfileContainer));
