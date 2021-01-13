import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Spin} from "antd";
import {LoadingOutlined} from '@ant-design/icons';
import style from "../Profile/Profile.module.scss";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
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
        getUserProfile
    }
)(withRouter(ProfileContainer));
